import { useNavigate, useParams } from "react-router-dom";
import getMarkdownFile from "./lib/getMarkdownFile";
import ReactMarkdown from "react-markdown";
import { Button } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
export default function BlogDetail({}) {
  const { title } = useParams();

  const navigate = useNavigate();

  const { isLoading, data: markdownFileContent } = useQuery(
    ["markdown-bucket", `${title}`],
    () => getMarkdownFile({ title })
  );

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="flex mx-auto w-2/3 flex-col p-8">
        {markdownFileContent ? (
          <ReactMarkdown>{markdownFileContent}</ReactMarkdown>
        ) : null}
      </div>
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
