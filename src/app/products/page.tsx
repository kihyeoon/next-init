import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Link from "next/link";
import Image from "next/image";
import clothesImage from "public/images/clothes.jpg";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <h1>ProductsPage</h1>
      <Image src={clothesImage} alt="clothes" priority />
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
