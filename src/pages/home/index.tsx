import BlogCardsContainer from "./components/BlogCardsContainer";
import blogsOverview from "./data/blogsOverview.json";

export default function Home() {
  return (
    <>
      <BlogCardsContainer BlogOverviews={blogsOverview} />
    </>
  );
}
