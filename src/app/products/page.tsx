import { getProducts } from "@/service/products";
import Link from "next/link";

export const revalidate = 3;

export default async function ProductsPage() {
  //todo: 서버 파일(데이터베이스)에 있는 제품 리스트를 읽어와서 보여준다.
  const products = await getProducts();

  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
