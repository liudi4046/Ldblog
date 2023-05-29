import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Neijuan from "./blogs/1.mdx";
const MDXFiles: { [key: string]: any } = {
  "1": Neijuan,
};
export default function BlogDetail() {
  const { id } = useParams(); // 获取路由参数
  const navigate = useNavigate();
  if (id === undefined) {
    return <></>;
  }

  const MDXContent = MDXFiles[id];

  if (!MDXContent) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="prose prose-lg mx-auto">
        <MDXContent />
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
