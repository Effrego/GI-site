import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center border-b border-neutral-800 px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-0">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl md:text-6xl">
            Guiding Idea
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-400">
            Авторская студия историй — разработка сценариев, докторинг и обучение
            сценарному мастерству.
          </p>
          <div className="mt-10">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium tracking-wide text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              Связаться
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/GI_logo.png"
            alt="Guiding Idea"
            width={300}
            height={300}
            className="w-full max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}
