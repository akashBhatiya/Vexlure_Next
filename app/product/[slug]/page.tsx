// @ts-nocheck

import { notFound } from 'next/navigation';
import { GiCheckMark } from "react-icons/gi";
import { CATEGORIES_DATA } from "@/components/categoriesData";

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = CATEGORIES_DATA.find((p) => p.slug === slug);
  if (!product) return notFound();

  // Helper function to format feature text with colon styling
  const formatFeatureText = (text: string) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex === -1) return text;
    
    const beforeColon = text.substring(0, colonIndex + 1);
    const afterColon = text.substring(colonIndex + 1);
    
    return (
      <>
        <span className="text-[var(--black)] text-product-detail-feature-label font-semibold">{beforeColon}</span>
        <span className="text-[var(--gray-text)] text-product-detail-feature-text font-medium">{afterColon}</span>
      </>
    );
  };

  // Only for agriculture-spices: show Figma-style detail

    return (
      <section className="w-full py-25 px-5 md:px-8 flex flex-col items-center bg-[var(--white)]">
        {/* Hero Image & Title */}
        <section className="w-full max-w-[1440px] relative flex flex-col items-center m-4">
          <img src={product.image} alt={product.title} className="rounded-2xl w-full h-[420px] md:h-[580px] object-cover shadow" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="w-full h-full absolute inset-0 rounded-2xl bg-[#18181880]" />
            <div className="relative max-w-[920px] z-10 flex flex-col items-center justify-center">
              <span className="text-product-label font-medium text-white mb-3">• {product.title}</span>
              <h1 className="text-product-detail-hero-title font-semibold text-white mb-4">{product.subtitle}</h1>
              <p className="text-white text-product-detail-hero-description mb-0 font-normal">{product.subdescription}</p>
            </div>
          </div>
        </section>

        {/* Agriculture Products Grid */}
        <section className="w-full max-w-[1440px] flex flex-col gap-8 mt-14 md:mt-25">
          {product.products?.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${idx % 2 !== 1 ? 'md:flex-row-reverse' : ''} items-stretch gap-4`}
            >
              {/* Image - no bg, just rounded */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl w-full h-full object-cover shadow-none"
                  style={{ background: 'none' }}
                />
              </div>
              {/* Info Box - gray bg */}
              <div className="w-full md:w-1/2 bg-[var(--secondary-bg)] rounded-2xl shadow p-4 md:p-8 flex flex-col justify-center">
                <h3 className="text-product-detail-card-title font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-product-detail-card-description text-gray-700 mb-4 font-normal">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center bg-[var(--white)] py-2.5 px-2 rounded">
                      {/* <GiCheckMark className="text-orange-500 mr-2 flex-shrink-0" />  */}
                      <span>{formatFeatureText(f)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </section>
    );
}
