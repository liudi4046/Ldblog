import { useEffect } from "react";
import BlogCardsContainer from "./components/BlogCardsContainer";
import { supabase } from "../../App";
import { useUser } from "../../context/UserProvider";
import Loading from "../../components/Loading";

export default function Home() {
  const { setCurUser } = useUser();
  useEffect(() => {
    const getSession = async () => {
      const { data: userData } = await supabase.auth.getSession();
      setCurUser(userData.session?.user ?? null);
    };
    getSession();
  }, []);

  return (
    <>
      <BlogCardsContainer />
    </>
  );
}
