import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/home/Home";
import About from "../components/about/About";
import AllTreatment from "../components/AllTreatment/AllTreatment";
import MyAppointments from "../MyAppointments/MyAppointments";
import Profile from "../profile/Profile";
import Details from "../components/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedbackRes = await fetch("/happyClients.json");
          const feedbackData = await feedbackRes.json();

          return { servicesData, feedbackData };
        },
      },
      {
        path: "/treatments",
        element: <AllTreatment></AllTreatment>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/appointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          
          const singleData = data.find(d=> d.id == params.id)
          return singleData;
        },
      },
    ],
  },
]);

export default router;
