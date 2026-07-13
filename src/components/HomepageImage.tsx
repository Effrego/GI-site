import Image from "next/image";

export default function HomepageImage() {
  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto max-w-[1400px] rounded-xl border border-neutral-800 p-1.5">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg md:aspect-[37/10]">
          <Image
            src="/images/home_page.webp"
            alt="Рабочее пространство сценариста"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
