import { Grid } from "@mui/material";
import { BlogCardInfo } from "../types";
import BlogCard from "./BlogCard";

export default function BlogCardsContainer({
  BlogOverviews,
}: {
  BlogOverviews: BlogCardInfo[];
}) {
  return (
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
  );
}
