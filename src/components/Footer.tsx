import Link from "next/link";
import { company, team } from "@/lib/contacts";

const navItems = [
  { label: "Screenwriting", href: "/screenwriting" },
  { label: "Doctoring", href: "/doctoring" },
  { label: "Courses", href: "/courses" },
  { label: "Контакты", href: "/contacts" },
];

export default function Footer() {
  const primaryContact = team[0];

  return (
    <footer className="border-t border-neutral-800 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-neutral-100">
            Guiding Idea
          </p>
          <p className="mt-2 text-sm text-neutral-500">{company.name}</p>
          <p className="mt-1 text-sm text-neutral-500">{company.address}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-neutral-400">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-neutral-400">
          <p className="text-neutral-500">{primaryContact.email}</p>
          <p className="mt-1 text-neutral-500">{primaryContact.phone}</p>
          <Link
            href="/contacts"
            className="mt-3 inline-block text-neutral-300 transition-colors hover:text-neutral-100"
          >
            Все контакты →
          </Link>
        </div>
      </div>
    </footer>
  );
}
