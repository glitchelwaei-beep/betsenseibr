import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";
import { blogMdxComponents } from "@/components/blog/mdx-components";

export async function renderBlogMdx(source: string) {
  const components: MDXComponents = blogMdxComponents;
  const { default: Content } = await evaluate(source, {
    ...runtime,
    development: process.env.NODE_ENV === "development",
    useMDXComponents: () => components,
  });
  return Content;
}
