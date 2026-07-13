import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/contacts";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Logo and socials */}
        <div className="flex flex-col items-center gap-6 border-b border-neutral-800 pb-16">
          <Image
            src="/images/GI_logo.png"
            alt="Guiding Idea"
            width={60}
            height={60}
          />
          <div className="flex gap-4">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-neutral-100"
              aria-label="WhatsApp"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171l-.346.205-3.576.656 1.235-3.6.24-.375A9.865 9.865 0 015.031 3.25c5.054 0 9.167 4.112 9.167 9.166 0 5.054-4.113 9.167-9.167 9.167a9.853 9.853 0 01-4.728-1.203l-.335-.214-3.58.666 1.251-3.566-.214-.338a9.144 9.144 0 01-1.423-4.092c-.552-5.035 3.588-9.428 8.581-9.422z" />
              </svg>
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-neutral-100"
              aria-label="Telegram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.84 5.4-1.2 7.19-.16.89-.48 1.18-.78 1.2-.66.02-1.16-.44-1.79-.87-.99-.65-1.56-.99-2.52-1.59-1.12-.73-.39-1.13.24-1.79.16-.18 2.92-2.68 2.97-2.91.05-.03.09-.13-.04-.2-.13-.07-.32-.04-.46-.02-.19.05-3.47 2.19-4.8 3.28-.45.33-.86.49-1.26.48-.41-.02-1.21-.23-1.81-.42-.73-.23-1.31-.35-1.26-.74.03-.39.49-.78 1.35-1.18 5.32-2.32 6.29-2.72 7.02-2.73.63-.01 1.08.16 1.56.34z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {/* About us */}
          <div>
            <h3 className="text-base font-semibold text-neutral-100">
              About us
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400">
              <li>
                <Link
                  href="/screenwriting"
                  className="transition-colors hover:text-neutral-100"
                >
                  GI screenwriting
                </Link>
              </li>
              <li>
                <Link
                  href="/doctoring"
                  className="transition-colors hover:text-neutral-100"
                >
                  GI doctoring
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="transition-colors hover:text-neutral-100"
                >
                  GI courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold text-neutral-100">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400">
              <li>
                <Link
                  href="/contacts"
                  className="transition-colors hover:text-neutral-100"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <a
                  href="mailto:effrego@gmail.com"
                  className="transition-colors hover:text-neutral-100"
                >
                  Заявка на курс
                </a>
              </li>
              <li>
                <a
                  href="mailto:effrego@gmail.com"
                  className="transition-colors hover:text-neutral-100"
                >
                  Для авторов
                </a>
              </li>
              <li>
                <a
                  href="mailto:effrego@gmail.com"
                  className="transition-colors hover:text-neutral-100"
                >
                  Для продюсеров
                </a>
              </li>
            </ul>
          </div>

          {/* Comming soon */}
          <div>
            <h3 className="text-base font-semibold text-neutral-100">
              Comming soon
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400">
              <li>
                <span className="transition-colors hover:text-neutral-100">
                  Library
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>© 2026 Guiding Idea (Все права защищены)</p>
          <p className="mt-4 text-xs text-neutral-600">{company.name}</p>
        </div>
      </div>
    </footer>
  );
}
