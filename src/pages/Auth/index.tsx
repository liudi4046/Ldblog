import { Button, TextField } from "@mui/material";
import { useState } from "react";
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
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const {
    mutate: mutateSignup,

    isLoading,
  } = useMutation(() => signUpUser());

  const changeEmail = (e: any) => {
    setUserCredentials({
      ...userCredentials,
      email: e.target.value,
    });
  };
  const changePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserCredentials({
      ...userCredentials,
      password: e.target.value,
    });
  };
  return (
    <>
      <Loading isLoading={isLoading} />
      Sign up
      <TextField
        placeholder="Email"
        onChange={changeEmail}
        value={userCredentials.email}
      />
      <TextField
        placeholder="Password"
        type="password"
        onChange={changePassword}
        value={userCredentials.password}
      />
      <Button onClick={() => mutateSignup()}>Sign Up</Button>
    </>
  );
}
