import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../User/Login/Login";
import Register from "../../User/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://kora-news-server-hasanc14.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://kora-news-server-hasanc14.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://kora-news-server-hasanc14.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
