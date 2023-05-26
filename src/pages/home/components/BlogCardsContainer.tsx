import { Grid } from "@mui/material";
import { MarkdownFileOverview } from "../types";
import BlogCard from "./BlogCard";

export default function BlogCardsContainer({
  markdownFileOverviews,
}: {
  markdownFileOverviews: MarkdownFileOverview[];
}) {
  return (
    <Grid container spacing={3}>
      {markdownFileOverviews.map((overview) => {
        return (
          <Grid item xs={4} key={overview.id}>
            <div className="flex justify-center">
              <BlogCard MarkdownFileOverview={overview} />
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
