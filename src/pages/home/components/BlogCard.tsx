import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { MarkdownFileOverview } from "../types";
import { useNavigate } from "react-router-dom";
export default function BlogCard({
  MarkdownFileOverview,
}: {
  MarkdownFileOverview: MarkdownFileOverview;
}) {
  const navigate = useNavigate();
  const viewBlogDetail = () => {
    navigate(`/blog/${MarkdownFileOverview.title}`);
  };
  return (
    <Card sx={{ maxWidth: 345, flexGrow: 1 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-center"
        >
          {MarkdownFileOverview.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {MarkdownFileOverview.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            marginLeft: "auto",
          }}
          size="small"
          onClick={viewBlogDetail}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
