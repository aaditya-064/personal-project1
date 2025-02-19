import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`p-2 border border-gray-300 rounded-md w-full ${className}`}
      {...props}
    />
  );
}
