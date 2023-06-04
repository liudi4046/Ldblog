import { useState } from "react";

import { Button, TextField } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useMutation } from "react-query";
import { supabase } from "../../App";
import { useUser } from "../../context/UserProvider";

export interface Blog {
  title: string;
  description: string;
  content: string;
  user_id: string;
}

const generateBlog = async ({ title, description, content, user_id }: Blog) => {
  let { data: MarkdownFiles, error } = await supabase
    .from("MarkdownFiles")
    .insert([{ title, description, content, user_id }]);
  if (error) {
    throw error;
  }
  console.log(MarkdownFiles);
  return MarkdownFiles;
};
export default function CreateBlog() {
  const { curUser } = useUser();
  const [content, setContent] = useState("");
  const {
    mutate: mutateCreateBlog,
    error,
    isLoading,
  } = useMutation(generateBlog);
  const [blogInfo, setBlogInfo] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  const changeTitle = (e: any) => {
    setBlogInfo({
      ...blogInfo,
      title: e.target.value,
    });
  };
  const changeDescription = (e: any) => {
    setBlogInfo({
      ...blogInfo,
      description: e.target.value,
    });
  };

  const handleCreateBlog = () => {
    if (!curUser) {
      return;
    } //1234
    mutateCreateBlog({ ...blogInfo, content, user_id: curUser?.id });
  };

  console.log("error", error);
  return (
    <div className="flex flex-col gap-3">
      {isLoading && "isLoading..."}

      <div className="flex gap-3 w-1/2">
        <TextField
          label="title"
          variant="outlined"
          value={blogInfo.title}
          onChange={changeTitle}
          className="w-1/3"
        />
        <TextField
          label="description"
          variant="outlined"
          value={blogInfo.description}
          onChange={changeDescription}
          className="w-2/3"
        />
      </div>

      <div className="flex h-[450px] w-full ">
        <textarea
          className="border-2 w-1/2 h-full p-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="border-2 w-1/2 h-full prose max-w-none p-3 overflow-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <Button variant="contained" onClick={handleCreateBlog}>
          Create
        </Button>
      </div>
    </div>
  );
}
