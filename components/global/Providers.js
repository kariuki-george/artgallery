import React, { useEffect } from "react";
import store from "../../state/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../state/slices/userSlice";

const queryClient = new QueryClient();

//auth

function Providers({ children }) {
  return (
    <Provider store={store}>
      <Auth>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          {children}{" "}
        </QueryClientProvider>
      </Auth>
    </Provider>
  );
}

function Auth({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    user && dispatch(login(user));
  }, []);
  return <>{children}</>;
}

export default Providers;
