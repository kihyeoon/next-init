import Link from "next/link";

const products = ["pants", "shirts", "skirt", "shoes"];

export default function ProductsPage() {
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
