import { getProduct, getProducts } from "@/service/products";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품 이름: ${slug}`,
  };
}

export default function DetailPage({ params: { slug } }: Props) {
  //todo: 서버 파일(데이터베이스)에 있는 제품 정보를 읽어와서 보여준다.
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <h1>{product} 제품 설명 페이지</h1>
      <p>{product} 제품 설명</p>
      <Link href="/products">목록으로 이동</Link>
    </>
  );
}

export function generateStaticParams() {
  //todo: 모든 제품의 페이지들을 미리 만들어 둔다.(SSG)
  const products = getProducts();
  return products.map((product) => ({ slug: product }));
}
