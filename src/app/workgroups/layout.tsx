"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { GlocalContextProvider } from "@/globalcomponents/GlobalContext";
import { ThemeSwitcher } from "@/globalcomponents/ThemeSwitcher";
export default function WorkgroupsLayout({ children }) {
  let { globalData, setGlobalData } = useContext(GlocalContextProvider);

  const pathname = usePathname();

  const linkClass = (section: string) =>
    pathname.startsWith(`/workgroups/${section}`)
      ? "font-semibold text-neutral-900  "
      : "text-gray-500 hover:text-gray-900";

  let handleThemeChange = () => {
    setGlobalData({
      ...globalData,
      themeType: globalData.themeType === "light" ? "dark" : "light",
    });
  };
  return (
    <div className="text-sm w-full h-screen flex flex-col overflow-hidden divide-x divide-y divide-gray-300 border border-gray-300">
      {/* top menu */}
      <div className="h-12 shrink-0 flex flex-row gap-3 items-center px-4 justify-between">
        <div className="min-w-40">
          <Link href="/">Home</Link>
          <button onClick={handleThemeChange}>
            Change Theme {globalData.themeType}
          </button>
          <ThemeSwitcher />
        </div>
        <div className="flex flex-row gap-2">
          <Link
            href="/workgroups/components/project-one"
            className={linkClass("components")}
          >
            Components
          </Link>
          <Link
            href="/workgroups/desktopuis/project-one"
            className={linkClass("desktopuis")}
          >
            Desktop
          </Link>
        </div>
        <div className="min-w-40 flex justify-end">Im Aravinda</div>
      </div>
      {/* container */}
      <div className="min-h-0 flex-1 ">{children}</div>
    </div>
  );
}
