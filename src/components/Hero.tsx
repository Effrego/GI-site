import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Textured background band pinned to the top */}
      <div className="absolute inset-x-0 top-0 h-[130px] overflow-hidden md:h-[170px]">
        <Image
          src="/images/Header_background.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo + title sitting above the band */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-[80px] md:pt-[100px]">
        <Image
          src="/images/GI_logo.png"
          alt="Guiding Idea"
          width={160}
          height={160}
          className="w-[100px] md:w-[115px]"
          priority
        />
        <h1 className="mt-5 font-display text-[2.5rem] font-medium tracking-wide text-neutral-100 md:text-5xl">
          Guiding Idea
        </h1>
        <div className="mt-8 w-full max-w-[1400px] border-t border-neutral-700/50" />
      </div>
    </section>
  );
}
