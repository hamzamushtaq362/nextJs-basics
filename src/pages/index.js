import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div>
      <div>Home Page</div>

      <Link href="/about">About Page</Link>
    </div>
  );
}
