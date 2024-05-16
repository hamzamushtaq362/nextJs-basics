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

export async function getServerSideProps(context) {
  const { params } = context;
  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { post: data } };
}
