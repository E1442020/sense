import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./designSystem/baseLayout/components/BaseLayout";
import Home from "./home/pages/Home";
import About from "./home/pages/About";
import AiCoaching from "./aiCoaching/pages/AiCoaching";
import Courses from "./courses/pages/Courses";
import CourseDetails from "./courses/pages/CourseDetails";

export const allRouters = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/aiCoaching",
        element: <AiCoaching />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courseDetails",
        element: <CourseDetails />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);
