import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined      
 } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-catalog',
      path: `${APP_PREFIX_PATH}/dashboards/catalog`,
      title: 'sidenav.dashboard.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'dashboards-catalog-goods',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/goods`,
          title: 'sidenav.dashboard.catalog.goods',
          icon: false,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-catalog-categories',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/categories`,
          title: 'sidenav.dashboard.catalog.categories',
          icon: false,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-catalog-collections',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/collections`,
          title: 'sidenav.dashboard.catalog.collections',
          icon: false,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-catalog-combo',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/combo`,
          title: 'sidenav.dashboard.catalog.combo',
          icon: false,
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'dashboards-orders',
      path: `${APP_PREFIX_PATH}/dashboards/orders`,
      title: 'sidenav.dashboard.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-clients',
      path: `${APP_PREFIX_PATH}/dashboards/clients`,
      title: 'sidenav.dashboard.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'dashboards-clients-list',
          path: `${APP_PREFIX_PATH}/dashboards/clients/list`,
          title: 'sidenav.dashboard.clients.list',
          icon: false,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-clients-group',
          path: `${APP_PREFIX_PATH}/dashboards/clients/group`,
          title: 'sidenav.dashboard.clients.group',
          icon: false,
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'dashboards-banners',
      path: `${APP_PREFIX_PATH}/dashboards/banners`,
      title: 'sidenav.dashboard.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-promocodes',
      path: `${APP_PREFIX_PATH}/dashboards/promocodes`,
      title: 'sidenav.dashboard.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-offlinePoints',
      path: `${APP_PREFIX_PATH}/dashboards/offline-points`,
      title: 'sidenav.dashboard.offlinePoints',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'dashboards-offlinePoints-addresses',
          path: `${APP_PREFIX_PATH}/dashboards/offline-points/addresses`,
          title: 'sidenav.dashboard.offlinePoints.addresses',
          icon: false,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-offlinePoints-geofences',
          path: `${APP_PREFIX_PATH}/dashboards/offline-points/geofences`,
          title: 'sidenav.dashboard.offlinePoints.geofences',
          icon: false,
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'dashboards-employees',
      path: `${APP_PREFIX_PATH}/dashboards/employees`,
      title: 'sidenav.dashboard.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-distribution',
      path: `${APP_PREFIX_PATH}/dashboards/distribution`,
      title: 'sidenav.dashboard.distribution',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'sidenav.system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobile-app`,
      title: 'sidenav.system.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'sidenav.system.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree
]

export default navigationConfig;
