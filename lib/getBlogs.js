export default async function getBlogs(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return result.json();
};
