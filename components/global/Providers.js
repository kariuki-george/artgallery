import React, { useEffect } from "react";
import store from "../../state/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "../../state/slices/userSlice";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

//auth

function Providers({ children }) {
  return (
    <Provider store={store}>
      <Auth>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          {children} <ReactQueryDevtools initialIsOpen={false} />
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
    {children} 
    </>
  );
}

export default Providers;
