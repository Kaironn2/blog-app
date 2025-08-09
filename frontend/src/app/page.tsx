'use client'

import { PostModel } from "@/models/post/post-model";
import { ApiPostRepository, postRepository } from "@/repositories/post/api-post-repository";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    postRepository
      .findAll()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load posts");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
