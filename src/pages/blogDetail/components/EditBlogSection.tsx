import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { supabase } from "../../../App";

interface EditBlogSectionProps {
  id: string;
  blogContent: string;
  setIsEditSectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditBlogSection({
  blogContent,
  id,
  setIsEditSectionOpen,
}: EditBlogSectionProps) {
  const [curContent, setCurContent] = useState(blogContent);
  const queryClient = useQueryClient();
  const { mutate: mutateUpdateBlog, error } = useMutation(updateBlogContent, {
    onSuccess: () => {
      queryClient.invalidateQueries(["select", "content", "markdownFiles", id]);
      setIsEditSectionOpen(false);
    },
  });
  async function updateBlogContent() {
    const { error } = await supabase
      .from("MarkdownFiles")
      .update({ content: curContent })
      .eq("id", id);
    if (error) {
      throw error;
    }
  }
  return (
    <>
      <TextField
        value={curContent}
        fullWidth
        onChange={(e) => setCurContent(e.target.value)}
        multiline
        maxRows={19}
        placeholder="content"
      />
      <Button onClick={() => mutateUpdateBlog()}>确认修改</Button>
    </>
  );
}
