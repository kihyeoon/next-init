import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
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
      <MeowArticle />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products }, revalidate: 10 };
}
