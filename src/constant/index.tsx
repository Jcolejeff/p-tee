import { routePathTypes } from 'types';

const ROUTES: Record<routePathTypes, routePathTypes> = {
  '': '',
  'create-account': 'create-account',
  blogs: 'blogs',
  logout: 'logout',
  'new-password': 'new-password',
  'reset-password': 'reset-password',
  'forgot-password': 'forgot-password',
  'verify-email': 'verify-email',
  dashboard: 'dashboard',
  settings: 'settings',
  profile: 'profile',
  users: 'users',
  login: 'login',
  subscriptions: 'subscriptions',
  payment: 'payment',
  'view-user': 'view-user',
  'food-bundles': 'food-bundles',
  Trainers: 'Trainers',
  notifications: 'notifications',
  'approve-users': 'approve-users',
  'user-profile': 'user-profile',
  Clients: 'Clients',
  'create-category': 'create-category',
  'create-approve-users': 'create-approve-users',
  'create-food-bundle': 'create-food-bundle',
  'create-sub-category': 'create-sub-category',
  'create-flash-sale': 'create-flash-sale',

  'create-new-product': 'create-new-product',
};

const TIMBU_KEYS = {
  BTS_ID: 'a3b42063504f4372ac9a1a6bd0f46d85',
  BLOG_ID: '696dccd73fb242448c41704b5179698f',
  IMAGE_BASE_URL: 'https://images.timbu.com',
};

const CONSTANTS = { ROUTES, TIMBU_KEYS };

export default CONSTANTS;
