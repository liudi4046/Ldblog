import { Typography } from "@mui/material";
import { Card } from "./Card";
import { BlogCardInfo } from "../../../types";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
export default function BlogCard({
  BlogCardInfo,
}: {
  BlogCardInfo: BlogCardInfo;
}) {
  const navigate = useNavigate();
  const viewBlogDetail = () => {
    navigate(`/blog/${BlogCardInfo.id}`);
  };
  const formattedDate = moment
    .tz(BlogCardInfo.created_at, "Asia/Shanghai")
    .format("MM-DD HH:mm");
  return (
    <Card viewBlogDetail={viewBlogDetail}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="text-center"
      >
        {BlogCardInfo.title}
      </Typography>
      <Typography variant="body2" textAlign={"center"} marginBottom={3}>
        {formattedDate}
      </Typography>
      <Typography variant="body2">{BlogCardInfo.description}</Typography>
    </Card>
  );
}
