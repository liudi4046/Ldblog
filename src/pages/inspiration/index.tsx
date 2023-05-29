import { useQuery } from "react-query";
import { MarkdownFileOverview } from "../home/types";
export default function littleThoughts() {
  const { isLoading, data: markdownFileOverviews } = useQuery<
    MarkdownFileOverview[]
  >(["select", "MarkdownFilesOverview", "*"], getMarkdownFileOverviews);

  console.log(markdownFileOverviews);
  return <div>index</div>;
}
