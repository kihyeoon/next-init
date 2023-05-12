import { getProducts } from "@/service/products";
import Link from "next/link";
import style from "./page.module.css";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    cache: "no-cache",
  });
  const data = await res.json();
  const factText = data.data[0];

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
      <article className={style.article}>
        <h2>Meow Fact</h2>
        <p>{factText}</p>
      </article>
    </>
  );
}
