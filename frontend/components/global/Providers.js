import React, { useEffect } from "react";
import store from "../../state/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "../../state/slices/userSlice";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";

const queryClient = new QueryClient();

//auth

function Providers({ children }) {
  return (
    <Provider store={store}>
      <Auth>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          {children}
        </QueryClientProvider>
      </Auth>
    </Provider>
  );
}

function Auth({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    user && dispatch(loginUser(user));
  }, []);
  return (
    <>
      <Head>
        <title>Art Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=60&q=60"
        ></link>
      </Head>
      {children}
    </>
  );
}

export default Providers;
