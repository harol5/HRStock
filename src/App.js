import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import CreateAccount from "./CreateAccount/CreateAccount";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-account-form",
    element: <CreateAccount />,
  },
  {
    path: "/*",
    element: <h1>page not found</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
