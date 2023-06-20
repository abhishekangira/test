import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Post } from "..";

type Comment = {
  body: string;
  email: string;
  name: string;
  id: number;
  postId: number;
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setPost(json));
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => response.json())
        .then((json) => setComments(json));
    }
  }, [id]);

  if (!post) return <div>Loading</div>;

  return (
    <div className="p-5 grid gap-5">
      <h1 className="font-bold text-xl">{post.title}</h1>
      <p>{post.body}</p>
      <h2 className="font-extrabold text-xl">Comments:</h2>
      <ol className="grid gap-5">
        {comments.map((comment) => (
          <li key={comment.id} className="grid gap-2">
            <div className="flex gap-3">
              <h4 className="font-bold">{comment.name}</h4>
              <h5 className="text-slate-400">({comment.email})</h5>
            </div>
            <p>{comment.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
