import { getProducts } from '@/lib/woocommerce';

export default async function Home() {
  const products = await getProducts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Benooma Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            {product.name} — ₹{product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
