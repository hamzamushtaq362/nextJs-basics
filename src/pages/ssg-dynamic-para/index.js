import Link from "next/link";
import React from "react";

export default function Ssg({ posts }) {
  return (
    <>
      {posts.map((e) => {
        return (
          <>
            <Link href={`/ssg-dynamic-para/${e?.id}`}>
              <h2>
                {e?.userId} {e?.title}
              </h2>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { posts: data.slice(0, 3) } };
}
