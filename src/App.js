import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./components/layout/RootLayout";

const routes = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/about-us", element: <AboutUsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
