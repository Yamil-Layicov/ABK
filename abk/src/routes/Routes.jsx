import HomeLayout from '../pages/homeLayout/HomeLayout'
import Login from '../pages/loginPage/Login'
import Error404 from '../pages/error404Page/Error404'
// import PrivateRoute from './PrivateRoute'
// import AdminLayout from '../admin/adminLayout/AdminLayout'
// import AdminHome from '../admin/pages/home/AdminHome'
// import Users from '../admin/pages/users/Users'
// import AdminAbout from '../admin/pages/about/AdminAbout'
// import AdminFooter from '../admin/pages/footer/AdminFooter'
// import AdminGallery from '../admin/pages/gallery/AdminGallery'
// import AdminReservation from '../admin/pages/reservation/AdminReservation'
// import AdminMenuPage from '../admin/pages/menu/AdminMenuPage'

import HomePage from '../pages/homePage/HomePage';
import ServicePage from '../pages/servicesPage/ServicePage';
import BlogPage from '../pages/blogPage/BlogPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ConactPage from '../pages/contactPage/ConactPage';
import FaqPage from '../pages/faqPage/FaqPage';



const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'services',
        element: <ServicePage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'haqqımızda',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ConactPage />,
      },
      {
        path: 'faq',
        element: <FaqPage />,
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error404/>,
  },

  // {
  //   path: '/admin',
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <PrivateRoute><AdminHome /></PrivateRoute>,
  //     },
  //     {
  //       path: 'profil',
  //       element: <PrivateRoute><Users/></PrivateRoute>,
  //     },
  //     {
  //       path: 'about',
  //       element: <PrivateRoute><AdminAbout /></PrivateRoute>,
  //     },
  //     {
  //       path: 'footer',
  //       element: <PrivateRoute><AdminFooter /></PrivateRoute>,
  //     },
  //     {
  //       path: 'menu',
  //       element: <PrivateRoute><AdminMenuPage /></PrivateRoute>,
  //     },
  //     {
  //       path: 'gallery',
  //       element: <PrivateRoute><AdminGallery/></PrivateRoute>,
  //     },
  //     {
  //       path: 'reservation',
  //       element: <PrivateRoute><AdminReservation/></PrivateRoute>,
  //     },
  //   ],
  // },

];

export default routes;