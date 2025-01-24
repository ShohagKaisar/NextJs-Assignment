import getAllBlogs from "@/lib/getAllBlogs";
import Link from "next/link";


export default async function Home() {

  const blogs = await getAllBlogs();

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold text-center my-4">All Blogs</h2>
      <hr></hr>
      {
        blogs.map(blog => (<div className="flex justify-between my-2 px-4 border-2 border-blue-500 py-2 rounded-full" key={blog.id}>
          <p>{blog.id}. {blog.title}</p>
          <Link href={`details/${blog.id}`}><button className="px-2 py-1 bg-green-400 rounded-full">Details</button></Link>
        </div>))
      }

    </div>
  );
}
