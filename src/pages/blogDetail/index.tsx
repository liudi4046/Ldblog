import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import { supabase } from "../../App";
import Loading from "../../components/Loading";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ErrorPage from "../../components/ErrorPage";
import { useUser } from "../../context/UserProvider";
const getBlog = async (id: number) => {
  let { data: MarkdownFileContent, error } = await supabase
    .from("MarkdownFiles")
    .select("content,user_id,id")
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
  if (id === undefined) {
    return <></>;
  }

  const {
    data: blogData,
    isLoading: isGetBlogLoading,
    error: isGetBlogError,
  } = useQuery(["select", "content", "markdownFiles", id], () =>
    getBlog(parseInt(id))
  );
  const navigate = useNavigate();
  const { curUser } = useUser();
  const {
    mutate: mutateDeleteBlog,
    isLoading: isDeleteBlogLoading,
    error: isDeleteBLogError,
  } = useMutation(() => deleteBlog(blogData?.id as number, navigate));
  console.log("isDeleteBlogLoading", isDeleteBlogLoading);
  console.log("isGetBlogLoading", isGetBlogLoading);
  console.log("blogdata", blogData);
  return (
    <>
      <Loading isLoading={isDeleteBlogLoading || isGetBlogLoading} />
      {/* <Button onClick={} disabled={curUser?.id !== blogData?.user_id}>
        编辑
      </Button> */}
      <ErrorPage error={isGetBlogError} />
      {blogData?.content ? (
        <div className="border-2 w-1/2 h-full prose max-w-none p-3 mx-auto">
          <ReactMarkdown>{blogData.content ?? ""}</ReactMarkdown>
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
        }}
      >
        删除
      </Button>
    </>
  );
}
