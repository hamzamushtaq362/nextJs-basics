import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div>
      <div>
        <Link href={"/dynamic-route-link/1"}>Product Page 1</Link>
      </div>

      <div>
        <Link href={"/dynamic-route-link/2"}>Product Page 2</Link>
      </div>

      <div>
        <Link href={"/dynamic-route-link/3"}>Product Page 3</Link>
      </div>
    </div>
  );
}
