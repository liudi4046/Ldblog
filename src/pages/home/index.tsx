import { useQuery } from "react-query";
import BlogCardsContainer from "./components/BlogCardsContainer";
import { supabase } from "../../App";

export default function Home() {
  return (
    <>
      <BlogCardsContainer />
    </>
  );
}
