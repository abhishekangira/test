import Link from "next/link";
import { useEffect, useState } from "react";

export type Post = {
  userId: number;
  id: number;
  body: string;
  title: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="p-4 grid gap-2">
      <input
        className="text-black"
        type="text"
        value={searchTerm}
        onChange={searchHandler}
      />
      <Link href="/new-post" className="text-xl font-bold">
        New Post
      </Link>
      {posts
        .filter((post) => post.title.includes(searchTerm))
        .map((post, index) => (
          <div key={post.id}>
            <Link className="" href={`/posts/${post.id}`}>
              {index + 1}. {post.title}
            </Link>
          </div>
        ))}
    </div>
  );
}
