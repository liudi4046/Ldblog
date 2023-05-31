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

import Contact from "./pages/Contact";
export const supabase = createClient<Database>(
  "https://znjskusyqzexkwohnlub.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuanNrdXN5cXpleGt3b2hubHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTY3MzMsImV4cCI6MjAwMDU3MjczM30.ewGk7LZTCBtZvydtiC6yM2sRFv4GEFP9Z__AbQNsGw0"
);
import { Helmet } from "react-helmet";
import CreateBlog from "./pages/createBlog";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();
type MdxComponentProps = {
  children: React.ReactNode;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="signup" element={<Auth />} />
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
