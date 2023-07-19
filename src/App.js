import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/allProducts/AllProducts";
import Login from "./components/login/Login";
import { ProductsContextProvider } from "./context/ProductsContext";
import Add from "./components/actions/Add";
import toast, { Toaster } from 'react-hot-toast';
import Update from "./components/actions/Update";

let routers = createBrowserRouter([
  {  path:"/", element: <AllProducts /> },
  { path: "/login", element: <Login /> },
  { path: "/add", element: <Add /> },
  { path: "/update", element: <Update /> },
]);

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Toaster/>
        <RouterProvider router={routers}></RouterProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
