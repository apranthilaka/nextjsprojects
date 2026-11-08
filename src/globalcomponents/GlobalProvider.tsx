// app/GlobalProvider.tsx
"use client";

import { useState, Dispatch, SetStateAction, ReactNode } from "react";
import { GlocalContextProvider } from "./GlobalContext";

type theme = { themeType: string };
type PropType = {
  globalData: theme;
  setGlobalData: Dispatch<SetStateAction<theme>>;
};

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [globalData, setGlobalData] = useState<PropType["globalData"]>({
    themeType: "dark",
  });

  return (
    <GlocalContextProvider value={{ globalData, setGlobalData }}>
      {/* Tip: You can bind the themeType class here so it targets the entire app DOM tree */}
      <div className={globalData.themeType}>{children}</div>
    </GlocalContextProvider>
  );
}
