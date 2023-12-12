import HomeLayout from '../pages/homeLayout/HomeLayout'
import Error404 from '../pages/error404Page/Error404'
import PrivateRoute from './PrivateRoute'
import AdminLayout from '../admin/adminLayout/AdminLayout'
import AdminHome from '../admin/pages/home/AdminHome'
import AdminAbout from '../admin/pages/about/AdminAbout'
import Login from '../pages/adminLoginPage/Login'
import Settings from '../admin/pages/setting/Settings'

import ServiceLayout from '../pages/servicesPage/serviceLayout/ServiceLayout';
import HomePage from '../pages/homePage/HomePage';
import ServicePage from '../pages/servicesPage/ServicePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ConactPage from '../pages/contactPage/ConactPage';
import FaqPage from '../pages/faqPage/FaqPage';


import Layout from '../pages/kabinetLoginRegister/loayout/Layout';
import LoginPage from '../pages/kabinetLoginRegister/login/LoginPage';
import RegisterPage from '../pages/kabinetLoginRegister/register/RegisterPage';
import AdminBloq from '../admin/pages/bloq/AdminBloq'
import AdminBloqLayout from '../admin/pages/bloq/adminBloqLayout/AdminBloqLayout'
import BloqCreate from '../admin/pages/bloq/bloqCreate/BloqCreate'
import BloqEdit from '../admin/pages/bloq/bloqEdit/BloqEdit'
import AdminService from '../admin/pages/services/AdminService'
import AdminServiceLayout from '../admin/pages/services/adminServiceLayout/AdminServiceLayout'
import ServiceCreate from '../admin/pages/services/serviceCreate/ServiceCreate';
import ServiceEdit from '../admin/pages/services/serviceEdit/ServiceEdit';
import AdminFaqLayout from '../admin/pages/faq/adminFaqLayout/AdminBloqLayout'
import AdminFaq from '../admin/pages/faq/AdminFaq';
import FaqEdit from '../admin/pages/faq/faqEdit/FaqEdit';
import FaqCreate from '../admin/pages/faq/faqCreate/FaqCreate'
import ServiceDetail from '../pages/servicesPage/serviceDetail/ServiceDetail'
import NewsLayout from '../pages/news/newsLayout/NewsLayout'
import NewsPage from '../pages/news/NewsPage'
import NewsDetail from '../pages/news/newsDetail/NewsDetail'
import Messages from '../admin/pages/messages/Messages'



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
        path: 'xidmetler',
        element: <ServiceLayout />,
        children: [
          {
            index: true,
            element: <ServicePage />,
          },
          {
            path: ":id",
            element: <ServiceDetail/>,
          },
        ],
      },
      {
        path: 'bloq',
        element: <NewsLayout />,
        children:[
          {
            index:true,
            element: <NewsPage/>
          },
          {
            path:":id",
            element: <NewsDetail/>
          }
        ]
      },
      {
        path: 'haqqimizda',
        element: <AboutPage />,
      },
      {
        path: 'elaqe',
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
        path: 'mesajlar',
        element: <PrivateRoute><Messages/></PrivateRoute>,
      },
      {
        path: 'about',
        element: <PrivateRoute><AdminAbout/></PrivateRoute>,
      },
      {
        path: 'settings',
        element: <PrivateRoute><Settings/></PrivateRoute>,
      },
      {
        path: 'bloq',
        element: <PrivateRoute><AdminBloqLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminBloq/></PrivateRoute>,
          },
          {
            path:"create",
            element: <PrivateRoute><BloqCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><BloqEdit/></PrivateRoute>,
          },
        ]
      },
      {
        path: 'services',
        element: <PrivateRoute><AdminServiceLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminService/></PrivateRoute>,
          },
          {
            path:"create",
            element: <PrivateRoute><ServiceCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><ServiceEdit/></PrivateRoute>,
          },
        ]
      },
      {
        path: 'faq',
        element: <PrivateRoute><AdminFaqLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminFaq/></PrivateRoute>,
          },
          {
            path:"create",
            element: <PrivateRoute><FaqCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><FaqEdit/></PrivateRoute>,
          },
        ]
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