import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const routerConfig: RoutersConfig = [
  // Insert New Router
  {
    path: '/demo1/hello',
    component: () => import('../pages/hello/HelloDemo1Page'),
    authorized: true,
    title: 'Hello HzeroFrontWky Demo1',
  },
  {
    path: '/demo1/demo-page',
    component: () => import('../pages/hello/DemoPage'),
    authorized: true,
    title: 'Sample Demo1',
  },
  {
    path: '/wky/fitst',
    component: () => import('../pages/firstPage/list/FirstPage'),
    authorized: true,
    title: 'wky-fitst-page',
  },
  {
    path: '/so/list',
    component: () => import('../pages/salesOrder/list/HodrSoPage'),
    authorized: true,
    title: '订单列表',
  },
];

export default routerConfig;
