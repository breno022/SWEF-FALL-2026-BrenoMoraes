import Image from "next/image";

const socials = [
  { label: "GitHub", href: "https://github.com/breno022" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/breno-moraes-99b945339/" }, 
  { label: "Email", href: "mailto:moraes.b@northeastern.edu" }, 
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20">
      <section className="flex flex-col gap-4">
        <Image
          src="/me2.jpeg"
          alt="Me and the fam at graduation"
          width={128}
          height={128}
          priority
          className="h-32 w-32 rounded-full border-2 border-emerald-400 object-cover object-[50%_35%]"
        />
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Breno Moraes
        </h1>
        <p className="text-lg text-zinc-400">
          CS &amp; Economics @ Northeastern · Rio de Janeiro → Boston
        </p>
      </section>

      <section className="flex flex-col gap-4 leading-relaxed text-zinc-300">
        <p>
          I&apos;m a student in Khoury College and the Honors Program, interested in math,
          coding, economics, and finance.
        </p>
        <p>
          Right now I&apos;m in TAMID&apos;s Software Engineering Foundations track, where
          my team is building a sports analytics platform that predicts match outcomes and
          compares them against the betting market.
        </p>
        <p>Interests: football, basketball, fishing, and Drake.</p>
      </section>

      <section className="flex flex-wrap gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-emerald-400 hover:text-emerald-400"
          >
            {s.label} ↗
          </a>
        ))}
      </section>
    </main>
  );
}