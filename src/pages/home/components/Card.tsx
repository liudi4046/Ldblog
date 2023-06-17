import { motion, useSpring } from "framer-motion";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import { BlogCardInfo } from "../../../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Skeleton from "@mui/material/Skeleton";

export const Card = ({
  BlogCardInfo,
  isLoading,
}: {
  BlogCardInfo: BlogCardInfo | undefined;
  isLoading: boolean;
}) => {
  const mouseX = useSpring(0, { stiffness: 200, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 200, damping: 100 });

  const navigate = useNavigate();
  const viewBlogDetail = () => {
    navigate(`/blog/${BlogCardInfo?.id}`);
  };
  const formattedDate = moment
    .tz(BlogCardInfo?.created_at, "Asia/Shanghai")
    .format("MMM D, YYYY");

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const ColoredSkeleton = (props: any) => (
    <Skeleton {...props} sx={{ bgcolor: "rgb(39 39 42)", ...props.sx }} />
  );
  return (
    <motion.div
      onClick={viewBlogDetail}
      onMouseMove={onMouseMove}
      className="p-5 cursor-pointer overflow-hidden relative duration-700 border rounded-xl bg-zinc-950 group md:gap-8 border-zinc-600 w-[350px] h-[200px] "
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.1,
        },
        position: "relative",
        zIndex: 1,
        boxShadow: "0px 0px 30px rgba(255,255,255,0.2)",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: mouseY,
          left: mouseX,
          width: "80px",
          height: "80px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          filter: "blur(50px)",
          boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.2)",
        }}
      />{" "}
      {isLoading ? (
        <>
          <div className="flex justify-between mt-2 mb-4">
            <ColoredSkeleton variant="text" width="30%" height={15} />

            <ColoredSkeleton variant="circular" width={15} height={15} />
          </div>
          <ColoredSkeleton
            variant="text"
            width="80%"
            height={30}
            className="mt-4"
          />
          <ColoredSkeleton variant="rounded" height={60} className="mt-4" />
        </>
      ) : (
        <>
          <div className="flex justify-between ">
            <p className="text-zinc-400 text-sm group-hover:text-white transition-colors duration-1000">
              {formattedDate}
            </p>
            <div className="flex gap-1">
              <VisibilityIcon fontSize="small" style={{ color: "gray" }} />
              <p className="text-zinc-400 text-sm">{BlogCardInfo?.views}</p>
            </div>
          </div>
          <p className="mt-4 text-2xl font-bold group-hover:text-white transition-colors duration-1000 text-zinc-300">
            {BlogCardInfo?.title}
          </p>
          <div className="mt-4 text-zinc-400 text-sm group-hover:text-white transition-colors duration-1000">
            {BlogCardInfo?.description}
          </div>
        </>
      )}
    </motion.div>
  );
};
