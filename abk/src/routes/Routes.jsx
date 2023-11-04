import HomeLayout from '../pages/homeLayout/HomeLayout'
import Error404 from '../pages/error404Page/Error404'
import PrivateRoute from './PrivateRoute'
import AdminLayout from '../admin/adminLayout/AdminLayout'
import AdminHome from '../admin/pages/home/AdminHome'
import Users from '../admin/pages/users/Users'
import AdminAbout from '../admin/pages/about/AdminAbout'
import AdminGallery from '../admin/pages/gallery/AdminGallery'
import AdminReservation from '../admin/pages/reservation/AdminReservation'
import AdminMenuPage from '../admin/pages/menu/AdminMenuPage'
import Login from '../pages/adminLoginPage/Login'
import Settings from '../admin/pages/setting/Settings'

import HomePage from '../pages/homePage/HomePage';
import ServicePage from '../pages/servicesPage/ServicePage';
import BlogPage from '../pages/blogPage/BlogPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ConactPage from '../pages/contactPage/ConactPage';
import FaqPage from '../pages/faqPage/FaqPage';


import Layout from '../pages/kabinetLoginRegister/loayout/Layout';
import LoginPage from '../pages/kabinetLoginRegister/login/LoginPage';
import RegisterPage from '../pages/kabinetLoginRegister/register/RegisterPage';

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

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <PrivateRoute><AdminHome /></PrivateRoute>,
      },
      {
        path: 'profil',
        element: <PrivateRoute><Users/></PrivateRoute>,
      },
      {
        path: 'about',
        element: <PrivateRoute><AdminAbout /></PrivateRoute>,
      },
      {
        path: 'footer',
        element: <PrivateRoute><Settings/></PrivateRoute>,
      },
      {
        path: 'menu',
        element: <PrivateRoute><AdminMenuPage /></PrivateRoute>,
      },
      {
        path: 'gallery',
        element: <PrivateRoute><AdminGallery/></PrivateRoute>,
      },
      {
        path: 'reservation',
        element: <PrivateRoute><AdminReservation/></PrivateRoute>,
      },
    ],
  },

  {
    path:"/şəksiKabinet",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <LoginPage/>
      },
      {
        path:"/şəksiKabinet/qeydiyyat",
        element: <RegisterPage/>
      }
    ]
  }

];

export default routes;