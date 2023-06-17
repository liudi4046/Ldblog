import { Grid } from "@mui/material";
import { BlogCardInfo } from "../../../types";

import { useQuery } from "react-query";
import { supabase } from "../../../App";
import { useState } from "react";

import { Card } from "./Card";

export default function BlogCardsContainer() {
  const [BlogOverviews, setBlogOverviews] = useState<BlogCardInfo[]>([]);
  const { error, isLoading } = useQuery(
    ["select", "*", "markdownFiles"],
    async () => {
      let { data: MarkdownFiles, error } = await supabase
        .from("MarkdownFiles")
        .select("id,title,description,created_at,views")
        .order("created_at", { ascending: false });
      if (error) {
        throw error;
      }
      console.log(MarkdownFiles);
      setBlogOverviews([...(MarkdownFiles as BlogCardInfo[])]);
    }
  );
  const loadingCards = new Array(9).fill(undefined);
  console.log("loadingcards", loadingCards);
  console.log("isloadingIn container", isLoading);
  return (
    <>
      {error && <div>{(error as Error).message}</div>}
      <Grid container spacing={3}>
        {(isLoading ? loadingCards : BlogOverviews).map((overview, index) => {
          return (
            <Grid item xs={4} key={index}>
              <div className="flex justify-center h-full">
                <Card BlogCardInfo={overview} isLoading={isLoading} />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
