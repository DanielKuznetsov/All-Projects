import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2>Home page!</h2>
      <nav>
        <Link to="about">About</Link>
      </nav>
    </>
  );
}
