import { getProducts } from "@/service/products";
import Link from "next/link";

export default function ProductsPage() {
  //todo: 서버 파일(데이터베이스)에 있는 제품 리스트를 읽어와서 보여준다.
  const products = getProducts();

  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
