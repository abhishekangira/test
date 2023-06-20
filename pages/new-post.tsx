import { useEffect } from "react";
import { Post } from ".";
import { useRouter } from "next/router";

export default function NewPost() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const postBody = e.target.postText.value;
    const postTitle = e.target.postTitle.value;
    console.log(postBody);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((post: Post) => router.push(`/posts/${post.id}`));
  };
  return (
    <div className="max-w-lg mx-auto p-5">
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input
          className="text-black p-2"
          id="postTitle"
          type="text"
          placeholder="Title"
        />
        <input
          className="text-black p-2"
          id="postText"
          type="text"
          placeholder="Text"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
