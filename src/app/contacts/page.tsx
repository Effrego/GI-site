import type { Metadata } from "next";
import Image from "next/image";
import { company, team } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Контакты — Guiding Idea",
  description: "Свяжитесь с командой Guiding Idea.",
};

const teamImages: Record<string, string> = {
  Ефрат: "/images/Yefrat_icon.png",
  Касиет: "/images/Kassiyet_icon.png",
};

export default function ContactsPage() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Контакты
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
          Guiding Idea
        </h1>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {team.map((contact) => (
            <div key={contact.name} className="flex gap-6">
              {teamImages[contact.name] && (
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image
                    src={teamImages[contact.name]}
                    alt={contact.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-lg font-medium text-neutral-100">
                  {contact.name}
                </h2>
                <p className="mt-1 text-sm text-neutral-500">{contact.role}</p>
                <dl className="mt-4 space-y-2 text-sm text-neutral-400">
                  <div className="flex gap-2">
                    <dt className="text-neutral-600">Телефон:</dt>
                    <dd>{contact.phone}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-neutral-600">Telegram:</dt>
                    <dd>{contact.telegram}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-neutral-600">Email:</dt>
                    <dd>{contact.email}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
          <p>{company.name}</p>
          <p className="mt-1">Адрес: {company.address}</p>
        </div>
      </div>
    </section>
  );
}
