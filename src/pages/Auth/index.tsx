import { Button } from "@mui/material";

import { useMutation } from "react-query";
import { supabase } from "../../App";
import Loading from "../../components/Loading";
const signUpUser = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    throw error;
  }
  return data;
};
export default function Auth() {
  const {
    mutate: mutateSignup,

    isLoading,
  } = useMutation(signUpUser);

  return (
    <>
      <Loading isLoading={isLoading} />

      <Button onClick={() => mutateSignup()}>Sign Up</Button>
    </>
  );
}
