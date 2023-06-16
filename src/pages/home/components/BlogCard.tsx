import { Typography } from "@mui/material";
import { Card } from "./Card";
import { BlogCardInfo } from "../../../types";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
    .format("MMM D, YYYY");

  return (
    <Card viewBlogDetail={viewBlogDetail}>
      <div className="flex justify-between ">
        <p className="text-zinc-400 text-sm group-hover:text-white transition-colors duration-1000">
          {formattedDate}
        </p>
        <div className="flex gap-1">
          <VisibilityIcon
            fontSize="small"
            style={{ color: "gray" }}
          ></VisibilityIcon>
          <p className="text-zinc-400 text-sm">{BlogCardInfo.views}</p>
        </div>
      </div>

      <p className="mt-4 text-2xl font-bold group-hover:text-white transition-colors duration-1000 text-zinc-300">
        {BlogCardInfo.title}
      </p>

      <div className="mt-4 text-zinc-400 text-sm group-hover:text-white transition-colors duration-1000">
        {BlogCardInfo.description}
      </div>
    </Card>
  );
}
