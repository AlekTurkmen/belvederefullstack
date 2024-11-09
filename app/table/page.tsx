import React from 'react';

export default function Home() {
    return (
      <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
            rel="noopener noreferrer"
          >
            Home
          </a>
  
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/table"
            rel="noopener noreferrer"
          >
            Data Table Testing
          </a>
        </header>

        <main>
        <h1>This is where the data table will go. Coming soon.</h1>

        </main>

      </div>
    );
  }