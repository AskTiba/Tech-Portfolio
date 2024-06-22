// ClientProvider.tsx
"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Adjust this import to your actual path

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
