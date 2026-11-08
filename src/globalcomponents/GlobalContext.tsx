"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type theme = { themeType: string };

type ContextType = {
  globalData: { themeType: string };
  setGlobalData: Dispatch<SetStateAction<theme>>;
};

export const GlocalContextProvider = createContext<ContextType>({
  globalData: { themeType: "dark" },
  setGlobalData: () => {},
});
