// Layout
import DefaultLayout from "../layout/DefaultLayout";

// Pages
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Lessons from "../pages/Lessons";
import Ads from "../pages/Ads";
import Students from "../pages/Students";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/courses",
        component: Courses,
        exact: true,
      },
      {
        path: "/lessons",
        component: Lessons,
        exact: true,
      },
      {
        path: "/ads",
        component: Ads,
        exact: true,
      },
      {
        path: "/students",
        component: Students,
        exact: true,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
