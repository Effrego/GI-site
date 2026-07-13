import Image from "next/image";

export default function HomepageImage() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
          <Image
            src="/images/home_page.webp"
            alt="Workspace"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
