import { supabase } from "../../../App";

/**
 *
 * @returns 返回一个markdown文件内容，以字符串形式
 */

export default async function getMarkdownFile({
  title,
}: {
  title: string | undefined;
}): Promise<string> {
  // Replace these paths with the paths to your Markdown files
  const { data, error } = await supabase.storage
    .from("public/markdown-bucket")
    .download(title + ".md");
  if (error) {
    throw Error();
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(data);
    reader.onloadend = function () {
      const res = reader.result;
      resolve(res as string);
    };
    reader.onerror = function () {
      reject(new Error("reading error"));
    };
  });
}
