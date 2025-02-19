import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
