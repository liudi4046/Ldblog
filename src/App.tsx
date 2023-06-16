import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase";
import BlogDetail from "./pages/blogDetail";
import PageNotFound from "./components/PageNotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Contact from "./pages/contact";
export const supabase = createClient<Database>(
  "https://znjskusyqzexkwohnlub.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuanNrdXN5cXpleGt3b2hubHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTY3MzMsImV4cCI6MjAwMDU3MjczM30.ewGk7LZTCBtZvydtiC6yM2sRFv4GEFP9Z__AbQNsGw0"
);
import { Helmet } from "react-helmet";
import CreateBlog from "./pages/createBlog";
import Auth from "./pages/auth";
import { createContext } from "react";
import UserProvider from "./context/UserProvider";
import JourneyTimeLine from "./pages/timeLine";

const queryClient = new QueryClient();
export const UserContext = createContext(null);
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "black", // 设置为白色
          color: "white",
          "&:hover": {
            backgroundColor: "#27272a",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // 设置标签字体颜色为白色
          "&.Mui-focused": {
            color: "white",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "white", // 设置输入框字体颜色为白色
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // 设置输入框边框颜色为白色
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        },
      },
    },
  },
});
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="signup" element={<Auth />} />
        <Route path="timeline" element={<JourneyTimeLine />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <>
      <Helmet>
        <title>LdBlog</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
