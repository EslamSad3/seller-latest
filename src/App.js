import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import AllProducts from "./components/allProducts/AllProducts";
import Login from "./components/login/Login";
import { ProductsContextProvider } from "./context/ProductsContext";
import Add from "./components/actions/Add";
import toast, { Toaster } from "react-hot-toast";
import Update from "./components/actions/Update";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

let routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AllProducts />
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <Login /> },
  {
    path: "/add",
    element: (
      <ProtectedRoute>
        <Add />
      </ProtectedRoute>
    ),
  },
  {
    path: "/update/:id",
    element: (
      <ProtectedRoute>
        <Update />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Toaster />
        <RouterProvider router={routers}></RouterProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
