import { BlogUpdate } from "@/components/blogs/blog-update";

async function extractBlogDetails(id: string) {
  const res = await fetch(
    `${process.env.URL}/api/blog-post/blog-details?edit&blogID=${id}`,
    {
      method: "GET",
      next : {
        revalidate : 0
      }
    }
  );

  const data = await res.json();

  if (data.success) return data.data;
}

interface Param {
  id: string;
}

export default async function Update({ params }: { params: Param }){
  const { id } = params;
  const formData = await extractBlogDetails(id);
  return <BlogUpdate formDataObj={formData}/>
}