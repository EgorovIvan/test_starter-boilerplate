import {
    DashboardOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    GiftOutlined,
    PictureOutlined,
    QrcodeOutlined,
    ShopOutlined,
    UsergroupAddOutlined,
    MailOutlined,
    SettingOutlined,
    TabletOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'


const dashBoardNavTree = [
    {
        key: 'main',
        path: `${APP_PREFIX_PATH}/main`,
        title: 'main',
        icon: '',
        breadcrumb: true,
        submenu: [
            {
                key: 'main-dashboard',
                path: `${APP_PREFIX_PATH}/main/dashboard`,
                title: 'sidenav.dashboard',
                icon: DashboardOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'main-catalog',
                path: `${APP_PREFIX_PATH}/main/catalog`,
                title: 'sidenav.main.catalog',
                icon: ShoppingCartOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: 'main-product',
                        path: `${APP_PREFIX_PATH}/main/catalog/product`,
                        title: 'sidenav.main.catalog.product',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'main-collection',
                        path: `${APP_PREFIX_PATH}/main/catalog/categories`,
                        title: 'sidenav.main.catalog.categories',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    },

                    {
                        key: 'main-collections',
                        path: `${APP_PREFIX_PATH}/main/catalog/collections`,
                        title: 'sidenav.main.catalog.collections',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'main-combo',
                        path: `${APP_PREFIX_PATH}/main/catalog/combo`,
                        title: 'sidenav.main.catalog.combo',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    }
                ]
            },
            {
                key: 'main-orders',
                path: `${APP_PREFIX_PATH}/main/orders`,
                title: 'sidenav.main.orders',
                icon: GiftOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'main-clients',
                path: `${APP_PREFIX_PATH}/main/clients`,
                title: 'sidenav.main.clients',
                icon: UserOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: 'main-clients-list',
                        path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
                        title: 'sidenav.main.clients.clientsList',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'main-clients-groups',
                        path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
                        title: 'sidenav.main.clients.clientsGroups',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    }
                ]
            },
            {
                key: 'main-banners',
                path: `${APP_PREFIX_PATH}/main/banners`,
                title: 'sidenav.main.banners',
                icon: PictureOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'main-promo-codes',
                path: `${APP_PREFIX_PATH}/main/promo-codes`,
                title: 'sidenav.main.promoCodes',
                icon: QrcodeOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'main-offline-points',
                path: `${APP_PREFIX_PATH}/main/offline-points`,
                title: 'sidenav.main.offlinePoints',
                icon: ShopOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: 'main-offline-points-addresses',
                        path: `${APP_PREFIX_PATH}/main/offline-points/addresses`,
                        title: 'sidenav.main.offlinePoints.addresses',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'main-offline-points-geofences',
                        path: `${APP_PREFIX_PATH}/main/offline-points/geofences`,
                        title: 'sidenav.main.offlinePoints.geofences',
                        icon: '',
                        breadcrumb: true,
                        submenu: []
                    }
                ]
            },
            {
                key: 'main-employees',
                path: `${APP_PREFIX_PATH}/main/employees`,
                title: 'sidenav.main.employees',
                icon: UsergroupAddOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'main-mailing-lists',
                path: `${APP_PREFIX_PATH}/main/mailing-lists`,
                title: 'sidenav.main.mailingLists',
                icon: MailOutlined,
                breadcrumb: true,
                submenu: []
            },
        ]
    }
]

const docsNavTree = [
  {
    key: 'systemic',
    path: `${APP_PREFIX_PATH}/systemic`,
    title: 'systemic',
    icon: '',
    breadcrumb: true,
    submenu: [
      {
        key: 'systemic-settings',
        path: `${APP_PREFIX_PATH}/systemic/settings`,
        title: 'sidenav.systemic.settings',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'systemic-mobile-applications',
        path: `${APP_PREFIX_PATH}/systemic/mobile-applications`,
        title: 'sidenav.systemic.mobileApplications',
        icon: TabletOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'systemic-logs',
        path: `${APP_PREFIX_PATH}/systemic/logs`,
        title: 'sidenav.systemic.logs',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [
    ...dashBoardNavTree,
    ...docsNavTree
]

export default navigationConfig;
