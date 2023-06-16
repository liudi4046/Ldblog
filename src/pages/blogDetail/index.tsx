import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import { supabase } from "../../App";
import Loading from "../../components/Loading";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ErrorPage from "../../components/ErrorPage";
import { useUser } from "../../context/UserProvider";
import { useState } from "react";
import EditBlogSection from "./components/EditBlogSection";
import moment from "moment-timezone";
import VisibilityIcon from "@mui/icons-material/Visibility";

const getBlog = async (id: number) => {
  let { data: MarkdownFileContent, error } = await supabase
    .from("MarkdownFiles")
    .select("content,user_id,id,views,created_at,title")
    .eq("id", id);
  if (error) {
    throw error;
  }

  return MarkdownFileContent?.[0];
};
const deleteBlog = async (blogId: number, navigate: NavigateFunction) => {
  const { error } = await supabase
    .from("MarkdownFiles")
    .delete()
    .eq("id", blogId);
  if (error) {
    throw error;
  }
  navigate("/");
};

export default function BlogDetail() {
  const { id } = useParams();
  const [isEditSectionOpen, setIsEditSectionOpen] = useState(false);
  if (id === undefined) {
    return <></>;
  }
  const {
    data: blogData,
    isLoading: isGetBlogLoading,
    error: isGetBlogError,
  } = useQuery(
    ["select", "content", "markdownFiles", id],
    () => getBlog(parseInt(id)),
    {
      onSuccess: async () => {
        await supabase.rpc("increment_blog_view", {
          blog_id: parseInt(id),
        });
      },
    }
  );
  const navigate = useNavigate();
  const { curUser } = useUser();
  const { mutate: mutateDeleteBlog, isLoading: isDeleteBlogLoading } =
    useMutation(() => deleteBlog(blogData?.id as number, navigate));

  const editBlog = () => {
    setIsEditSectionOpen(!isEditSectionOpen);
  };
  const formattedDate = moment
    .tz(blogData?.created_at, "Asia/Shanghai")
    .format("YYYY-MM-DD HH:mm:ss");

  return (
    <>
      <Loading isLoading={isDeleteBlogLoading || isGetBlogLoading} />
      <ErrorPage error={isGetBlogError} />
      <div className="flex w-fit ml-auto gap-1">
        <VisibilityIcon fontSize="small" style={{ color: "gray" }} />
        <p className="text-zinc-400 text-sm">{blogData?.views}</p>
      </div>

      <br />
      {blogData?.content ? (
        <div className="w-1/2 mx-auto">
          <div className="flex flex-col gap-4 mb-4">
            <Typography variant="h4" style={{ textAlign: "center" }}>
              {blogData.title}
            </Typography>
            <Typography textAlign={"center"}>{formattedDate}</Typography>
          </div>

          <div className="w-full h-[550px] prose max-w-none p-3 prose-invert">
            {isEditSectionOpen ? (
              <EditBlogSection
                blogContent={blogData.content}
                id={id}
                setIsEditSectionOpen={setIsEditSectionOpen}
              />
            ) : (
              <ReactMarkdown>{blogData.content ?? ""}</ReactMarkdown>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              disabled={curUser?.id !== blogData?.user_id}
              onClick={editBlog}
              sx={{
                color: "white",
              }}
            >
              edit
            </Button>
          </div>
        </div>
      ) : (
        !isGetBlogLoading && <div>无内容</div>
      )}
      <Button
        onClick={() => navigate(-1)}
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          color: "white",
        }}
      >
        Go Back
      </Button>
      <Button
        disabled={curUser?.id !== blogData?.user_id}
        onClick={() => mutateDeleteBlog()}
        sx={{
          position: "fixed",
          right: 0,
          bottom: 0,
          color: "white",
        }}
      >
        Delete
      </Button>
    </>
  );
}
