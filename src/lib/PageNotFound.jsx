import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="font-heading font-bold text-8xl md:text-9xl text-black/5">404</h1>
        <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-black -mt-4">
          Page not found.
        </h2>
        <p className="font-body text-black/50 text-base mt-4">
          This page doesn't exist. Maybe it never did.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-black text-white font-semibold text-sm px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}