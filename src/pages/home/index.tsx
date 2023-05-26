import getMarkdownFileOverviews from "./lib/getMarkdownFileOverviews";
import BlogCardsContainer from "./components/BlogCardsContainer";
import { MarkdownFileOverview } from "./types";
import Loading from "../../components/Loading";
import { useQuery } from "react-query";
export default function Home() {
  const { isLoading, data: markdownFileOverviews } = useQuery<
    MarkdownFileOverview[]
  >(["select", "MarkdownFilesOverview", "*"], getMarkdownFileOverviews);

  console.log(markdownFileOverviews);

  return (
    <>
      <Loading isLoading={isLoading} />

      <BlogCardsContainer markdownFileOverviews={markdownFileOverviews ?? []} />
    </>
  );
}
