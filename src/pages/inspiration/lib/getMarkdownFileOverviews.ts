import { supabase } from "../../../App";

const getMarkdownFileOverviews = async (): Promise<
  | {
      created_at: string;
      description: string | null;
      id: number;
      title: string | null;
    }[]
> => {
  const { data, error } = await supabase
    .from("MarkdownFilesOverview")
    .select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export default getMarkdownFileOverviews;
