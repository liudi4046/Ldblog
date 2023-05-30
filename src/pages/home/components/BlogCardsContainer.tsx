import { Grid } from "@mui/material";
import { BlogCardInfo } from "../../../types";
import BlogCard from "./BlogCard";
import { useQuery } from "react-query";
import { supabase } from "../../../App";
import { useState } from "react";
import Loading from "../../../components/Loading";

export default function BlogCardsContainer() {
  const [BlogOverviews, setBlogOverviews] = useState<BlogCardInfo[]>([]);
  const { error, isLoading } = useQuery(
    ["select", "*", "markdownFiles"],
    async () => {
      let { data: MarkdownFiles, error } = await supabase
        .from("MarkdownFiles")
        .select("id,title,description");
      if (error) {
        throw error;
      }
      setBlogOverviews([...(MarkdownFiles as BlogCardInfo[])]);
    }
  );
  return (
    <>
      <Loading isLoading={isLoading} />
      {error && <div>{(error as Error).message}</div>}
      <Grid container spacing={3}>
        {BlogOverviews.map((overview) => {
          return (
            <Grid item xs={4} key={overview.title}>
              <div className="flex justify-center">
                <BlogCard BlogCardInfo={overview} />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
