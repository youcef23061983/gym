import { BASE_API_URL } from "@/utils/Url";
export async function generateStaticParams() {
  try {
    const response = await fetch(`${BASE_API_URL}/api/shop`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const posts = await response.json();

    console.log(posts); // Log the response to check the data

    if (!posts || posts.length === 0) {
      console.error("No posts found");
      return [];
    }

    return posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching data in generateStaticParams:", error);
    return [];
  }
}

const page = async ({ params: { id } }) => {
  if (!BASE_API_URL) {
    return null;
  }
  async function getDetailData(id) {
    const response = await fetch(`${BASE_API_URL}/api/shop/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  }

  const product = await getDetailData(id);
  if (!product) {
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
