import { BASE_API_URL } from "@/utils/Url";
export async function generateStaticParams() {
  const response = await fetch(`${BASE_API_URL}/shop/api`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const posts = await response.json();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
const page = async ({ params: { id } }) => {
  async function getDetailData({ params: { id } }) {
    const response = await fetch(`${BASE_API_URL}/shop/api/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  }
  const product = await getDetailData({ params: { id } });
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};

export default page;
