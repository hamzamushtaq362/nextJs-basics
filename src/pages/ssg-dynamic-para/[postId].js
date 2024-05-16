import React from "react";

export default function Post({ post }) {
  return (
    <>
      <span>{post?.userId}</span>
      <span>{post?.title}</span>
      <br />
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { post: data } };
}
