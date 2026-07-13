import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="border-b border-neutral-800 px-6 py-4">
      <div className="mx-auto max-w-6xl">
        <ol className="flex items-center gap-2 text-sm text-neutral-500">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-neutral-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-neutral-400">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-neutral-700">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
