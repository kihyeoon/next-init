import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3;

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  return {
    title: `제품 이름: ${product?.name}`,
  };
}

export default async function DetailPage({ params: { slug } }: Props) {
  //todo: 서버 파일(데이터베이스)에 있는 제품 정보를 읽어와서 보여준다.
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
      <p>{product.name} 제품 설명</p>
      <Link href="/products">목록으로 이동</Link>
    </>
  );
}

export async function generateStaticParams() {
  //todo: 모든 제품의 페이지들을 미리 만들어 둔다.(SSG)
  const products = await getProducts();
  return products.map(({ id }) => ({ slug: id }));
}
