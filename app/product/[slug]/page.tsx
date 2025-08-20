// @ts-nocheck

import { notFound } from 'next/navigation';
import { GiCheckMark } from "react-icons/gi";
import { CATEGORIES_DATA } from "@/components/categoriesData";

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = CATEGORIES_DATA.find((p) => p.slug === slug);
  if (!product) return notFound();

  // Only for agriculture-spices: show Figma-style detail

    return (
      <section className="w-full py-16 px-4 md:px-8 flex flex-col items-center bg-[var(--white)]">
        {/* Hero Image & Title */}
        <section className="w-full max-w-[1440px] relative flex flex-col items-center m-4">
          <img src={product.image} alt={product.title} className="rounded-2xl w-full max-h-[580px] object-cover shadow" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="w-full h-full absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <span className="text-xs md:text-base font-medium text-white/80 tracking-widest mb-3 drop-shadow-lg">• {product.title}</span>
              <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg leading-tight">{product.subtitle}</h1>
              <p className="max-w-2xl text-center text-white text-base md:text-xl drop-shadow mb-0 font-normal">{product.subdescription}</p>
            </div>
          </div>
        </section>

        {/* Agriculture Products Grid */}
        <section className="w-full max-w-[1440px] flex flex-col gap-8 mt-8">
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
                <h3 className="text-xl md:text-3xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs md:text-base text-gray-700 mb-4 font-normal">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-800 bg-[var(--white)] text-base py-2.5 px-2 rounded">
                      <GiCheckMark className="text-orange-500 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </section>
    );
  

  // Fallback for other products
  // return (
  //   <main className="flex flex-col mt-6 min-h-[60vh] items-center justify-center max-w-[1440px]">
  //     <img src={product.image} alt={product.title} className="rounded-xl w-full max-w-2xl mb-6" />
  //     <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
  //     <p className="max-w-2xl text-center text-lg">{product.subdescription}</p>
  //   </main>
  // );
}
