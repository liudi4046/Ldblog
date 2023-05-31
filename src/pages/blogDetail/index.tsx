import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useMutation, useQueries, useQuery } from "react-query";
import { supabase } from "../../App";
import Loading from "../../components/Loading";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ErrorPage from "../../components/ErrorPage";
const getBlogContent = async (id: string) => {
  let { data: MarkdownFileContent, error } = await supabase
    .from("MarkdownFiles")
    .select("content")
    .eq("id", id);
  if (error) {
    throw error;
  }

  return (MarkdownFileContent?.[0] ?? { content: "" }).content;
};

export default function BlogDetail() {
  const { id } = useParams(); // 获取路由参数
  if (id === undefined) {
    return <></>;
  }
  const {
    data: content,
    isLoading,
    error,
  } = useQuery(["select", "content", "markdownFiles", id], () =>
    getBlogContent(id)
  );
  const navigate = useNavigate();

  return (
    <>
      <Loading isLoading={isLoading} />
      <ErrorPage error={error} />
      {content ? (
        <div className="border-2 w-1/2 h-full prose max-w-none p-3 mx-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      ) : (
        !isLoading && <div>无内容</div>
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
    </>
  );
}
