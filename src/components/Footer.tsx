import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "About us",
    links: [
      { label: "GI screenwriting", href: "/screenwriting" },
      { label: "GI doctoring", href: "/doctoring" },
      { label: "GI courses", href: "/courses" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Контакты", href: "/contacts" },
      { label: "Заявка на курс", href: "/contacts" },
      { label: "Для авторов", href: "/contacts" },
      { label: "Для продюсеров", href: "/contacts" },
    ],
  },
  {
    title: "Comming soon",
    links: [{ label: "Library", href: "/" }],
  },
];

export default function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Logo + socials */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/GI_logo.png"
            alt="Guiding Idea"
            width={70}
            height={70}
            className="w-10"
          />
          <div className="mt-5 flex gap-3">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 transition-opacity hover:opacity-80"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 transition-opacity hover:opacity-80"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns (centered group) */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 sm:gap-x-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-base text-neutral-100">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-neutral-400 transition-colors hover:text-neutral-100"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-14 border-t border-neutral-800" />
        <p className="mt-8 text-center font-display text-sm text-neutral-500">
          © 2026 Guiding Idea (Все права защищены)
        </p>
      </div>
    </footer>
  );
}
