import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      cache: "no-store", // for SSR
    },
  );
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Posts from JSONPlaceholder</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
