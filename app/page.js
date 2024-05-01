import { fetchFromApi } from "@/api/getApidata";
import ProductCard from "@/components/ProductCard";


export default async function Home() {
const {products} = await fetchFromApi('/products')

  return (
    <div className="flex justify-center items-center flex-col h-full w-full p-10">
    <h1 className="text-3xl font-bold text-white mb-5">Products</h1>
      <div className="flex gap-4 flex-wrap ">
      {products?.map((product)=>(
        <ProductCard key={product?.id} product={product} />
      ))

      }
      </div>
    </div>
  );
}
