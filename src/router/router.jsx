import { createBrowserRouter } from "react-router-dom";
import Userlayout from "../components/layout/Userlayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Quote from "../pages/quote/Quote";

let user_routes = [
  {
    path: '/',
    element: <Userlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: 'quote', element: <Quote /> },
    ],
  },
];

const router = createBrowserRouter([...user_routes]);

export default router;