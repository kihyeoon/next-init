import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function DetailPage({ params: { slug } }: Props) {
  if (slug === "nothing") notFound();

  return <h1>{slug} 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "shirts", "socks"];
  return products.map((product) => ({ slug: product }));
}
