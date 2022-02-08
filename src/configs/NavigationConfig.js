import {
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'main',
    icon: '',
    breadcrumb: true,
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'sidenav.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
        {
        key: 'dashboard-clients',
        path: `${APP_PREFIX_PATH}/clients`,
        title: 'sidenav.clients',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'dashboard-clients-list',
            path: `${APP_PREFIX_PATH}/clients/clients-list`,
            title: 'sidenav.clients.clientsList',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'dashboard-clients-groups',
            path: `${APP_PREFIX_PATH}/clients/clients-list`,
            title: 'sidenav.clients.clientsGroups',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      }
    ]
  }
]

const navigationConfig = [
  ...dashBoardNavTree,
]

export default navigationConfig;
