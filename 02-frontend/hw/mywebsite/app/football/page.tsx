import Link from "next/link";

const facts: string[] = [
  "Bayern Munich was founded in 1900 and plays at the Allianz Arena.",
  "They're the most successful club in German football history.",
  "I play on an intramural team at Northeastern.",
];

export default function FootballPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-red-500">
          Mia san mia
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight">Football ⚽</h1>
        <p className="text-zinc-400">It&apos;s called Football.</p>
      </header>

      <section className="flex flex-col gap-4 leading-relaxed text-zinc-300">
        <p>
          Growing up in Rio, football was everywhere: on TV, in the street, at school
        </p>
        <p>
          My club is Bayern Munich.
          Back in 2015 I visited Germany and got to watch one of Bayern's games, so the club just stuck with me.
        </p>
        <p>
          These days I still play every week with my intramural team
        </p>
      </section>

      <section className="rounded-2xl border border-red-900/60 bg-red-950/30 p-6">
        <h2 className="mb-4 text-xl font-bold text-red-400">Quick facts</h2>
        <ul className="flex list-disc flex-col gap-2 pl-5 text-zinc-300">
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://fcbayern.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-red-600 px-5 py-2 text-sm font-medium hover:bg-red-500"
        >
          FC Bayern ↗
        </a>
        <Link
          href="/"
          className="rounded-full border border-zinc-700 px-5 py-2 text-sm hover:border-zinc-400"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}