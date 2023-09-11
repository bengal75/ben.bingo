import { getRandomQuote } from "src/app/quotes";

export default function Home() {
  const quote = getRandomQuote();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
      <div className="flex flex-col items-center justify-center gap-8 max-w-prose text-gray-200 font-mono">
        <p className="text-2xl md:text-5xl">{quote}</p>
        <p className="self-end text-lg md:text-3xl text-right">- Simon Sinek</p>
      </div>
    </main>
  );
}
