import CONSTANTS from 'constant';
import Subscriptions from 'pages/app/subscriptions';
import Users from 'pages/app/users';
import Products from 'pages/app/payments';
import ViewUser from 'pages/app/view-user';
import FoodBundles from 'pages/app/food-bundles';
import FlashSales from 'pages/app/flash-sales';
import Dashboard from 'pages/app/dashboard';
import Notifications from 'pages/app/notifications';
import MasterClasses from 'pages/app/master-classes';
import ApproveUsers from 'pages/app/approve-users';
import UserProfile from 'pages/app/user-profile';
import Settings from 'pages/app/settings';
import SingleBlog from 'pages/inner-pages/single-blog';
import SinglePatient from 'pages/inner-pages/single-patient';
import { routeTypes, routesInterface } from 'types';
import CreateCategory from 'pages/app/create-category';
import CreateSubCategory from 'pages/app/create-subCategory';
import CreateNewProduct from 'pages/app/create-new-product';
import CreateFoodBundle from 'pages/app/create-food-bundle';
import CreateFlashSale from 'pages/app/recruiters';
import Trainers from 'pages/app/recruiters';
import ClientsPage from 'pages/app/candidates';

const internalRoute: routeTypes = [
  {
    element: <Dashboard />,
    path: 'dashboard',
  },
  {
    element: <CreateCategory />,
    path: 'create-category',
  },
  {
    element: <CreateSubCategory />,
    path: 'create-sub-category',
  },
  {
    element: <ClientsPage />,
    path: 'Clients',
  },
  {
    element: <Users />,
    path: 'users',
  },
  {
    element: <UserProfile />,
    path: 'profile',
  },

  {
    element: <Subscriptions />,
    path: 'subscriptions',
  },
  {
    element: <Trainers />,
    path: 'Trainers',
  },
  {
    element: <Products />,
    path: 'payment',
  },
  {
    element: <ViewUser />,
    path: 'view-user',
  },
  {
    element: <FoodBundles />,
    path: 'food-bundles',
  },
  {
    element: <Settings />,
    path: 'settings',
  },

  {
    element: <CreateFoodBundle />,
    path: 'create-food-bundle',
  },
  {
    element: <CreateFlashSale />,
    path: 'create-flash-sale',
  },
  // {
  //   element: <MasterClasses />,
  //   path: 'reports',
  // },

  {
    element: <Notifications />,
    path: 'notifications',
  },

  {
    element: <ApproveUsers />,
    path: 'approve-users',
  },
  {
    element: <CreateNewProduct />,
    path: 'create-new-product',
  },
];

export const innerInternalRoutes: routesInterface<string>[] = [
  { element: <SingleBlog />, path: `${CONSTANTS.ROUTES.blogs}/:id` },
];

export default internalRoute;
