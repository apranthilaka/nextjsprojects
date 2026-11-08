"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PropTypes = {
  children: React.ReactNode;
};

const linkGroupOne = [
  { title: "project One", url: "/workgroups/desktopuis/project-one" },
  { title: "project two", url: "/workgroups/desktopuis/project-two" },
];

export default function ComponentsLayout({ children }: PropTypes) {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full flex-1 min-h-0 text-neutral-500 h-full">
      {/* left menu */}
      <div className="w-70 border-r border-neutral-300 shrink-0 overflow-auto h-full">
        <ul>
          {linkGroupOne.map((link) => {
            const isActive = pathname === link.url;

            return (
              <li key={link.title}>
                <Link
                  href={link.url}
                  className={`block border-b p-2 transition-colors ${
                    isActive
                      ? "bg-neutral-100 text-neutral-900 font-medium"
                      : "hover:bg-neutral-50"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* data container */}
      <div className="flex-1 overflow-auto p-5">{children}</div>
    </div>
  );
}
