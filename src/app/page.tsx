import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-background to-background/80">
      <main className="flex flex-col items-center justify-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            PRÓXIMAMENTE
          </h1>
        </div>
        <p className="mt-4 text-xl text-gray-700">
        © {new Date().getFullYear()} Kindly Klan
        </p>
      </main>
    </div>
  );
}
