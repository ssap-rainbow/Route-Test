import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import { RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
