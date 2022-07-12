import * as React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2>About us</h2>
      <p>
        We are a supermarket that delivers fresh produce to your house at no
        extra cost.
      </p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
