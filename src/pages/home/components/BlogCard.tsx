import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { BlogCardInfo } from "../../../types";
import { useNavigate } from "react-router-dom";
export default function BlogCard({
  BlogCardInfo,
}: {
  BlogCardInfo: BlogCardInfo;
}) {
  const navigate = useNavigate();
  const viewBlogDetail = () => {
    navigate(`/blog/${BlogCardInfo.id}`);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-center"
        >
          {BlogCardInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {BlogCardInfo.description}
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
