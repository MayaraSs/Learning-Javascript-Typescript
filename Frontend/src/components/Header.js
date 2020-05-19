import React from "react";
import { ProgressPlugin } from "webpack";

export default function Header({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
