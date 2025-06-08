"use client";
import { NotionRenderer as NotionRendererLib } from "react-notion-x";
import { useTheme } from "next-themes";

export const BlogRender = ({ recordMap }: { recordMap: any }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <NotionRendererLib
      bodyClassName="text-base sm:text-lg"
      className={"dark:!bg-[#292828]"}
      darkMode={!isDarkMode}
      disableHeader
      fullPage
      recordMap={recordMap}
    />
  );
};
