import { Button } from "@mui/material";

import { useMutation } from "react-query";
import { supabase } from "../../App";
import Loading from "../../components/Loading";
import { NavigateFunction, useNavigate } from "react-router-dom";
const signUpUser = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    throw error;
  }
  return data;
};
const logOutUser = async (navigate: NavigateFunction) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
  navigate("/");
};
export default function Auth() {
  const { mutate: mutateSignup, isLoading: isSignupLoading } =
    useMutation(signUpUser);
  const { mutate: mutateLogout, isLoading: isLogoutLoading } =
    useMutation(logOutUser);
  const navigate = useNavigate();
  return (
    <>
      <Loading isLoading={isSignupLoading || isLogoutLoading} />
      <Button
        onClick={() => {
          mutateSignup();
        }}
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          mutateLogout(navigate);
        }}
      >
        Log Out
      </Button>
    </>
  );
}
