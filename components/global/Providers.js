import React from "react";
import store from "../../state/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}{" "}
      </QueryClientProvider>
    </Provider>
  );
}

export default Providers;
