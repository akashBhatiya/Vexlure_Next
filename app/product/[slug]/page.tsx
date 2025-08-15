import { notFound } from 'next/navigation';

const PRODUCT_DATA = [
  {
    slug: 'agriculture-spices',
    title: 'Agriculture & Spices',
    description:
      "Farm Fresh, Globally Delivered. At Vexlure International, agriculture is in our roots. With a farming legacy and global expertise, we deliver authentic, high-quality agricultural and spice products worldwide.",
    image: '/image/industry-agriculture.png',
  },
  {
    slug: 'industrial-machinery',
    title: 'Industrial Machinery & Equipment',
    description:
      'We deliver industrial-grade solutions built for reliability, strength, and consistent output.',
    image: '/image/industry-machinery.jpg',
  },
  {
    slug: 'textiles-garments',
    title: 'Textiles & Garments',
    description: 'Textiles are woven into the very fabric of our identity.',
    image: '/image/industry-textiles.jpg',
  },
  {
    slug: 'paper-packaging',
    title: 'Paper & Packaging',
    description: "Modern packaging is more than protection: it's presentation, performance, and purpose.",
    image: '/image/industry-packaging.jpg',
  },
  {
    slug: 'chemicals',
    title: 'Chemicals',
    description: 'Vexlure International leverages industry expertise and a strategic location near Ankleshwar, a global chemical hub.',
    image: '/image/industry-chemicals.jpg',
  },
];

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = PRODUCT_DATA.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <main className="flex flex-col mt-6 min-h-[60vh] items-center justify-center">
      <img src={product.image} alt={product.title} className="rounded-xl w-full max-w-2xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="max-w-2xl text-center text-lg">{product.description}</p>
    </main>
  );
}
