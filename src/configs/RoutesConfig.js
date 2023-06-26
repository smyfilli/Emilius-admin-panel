import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    {
        key: 'dashboard.catalog.goods',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/goods`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/goods')),
    },
    {
        key: 'dashboard.catalog.categories',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/categories`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/categories')),
    },
    {
        key: 'dashboard.catalog.collections',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/collections`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/collections')),
    },
    {
        key: 'dashboard.catalog.combo',
        path: `${APP_PREFIX_PATH}/dashboards/catalog/combo`,
        component: React.lazy(() => import('views/app-views/dashboards/catalog/combo')),
    },
    {
        key: 'dashboard.orders',
        path: `${APP_PREFIX_PATH}/dashboards/orders`,
        component: React.lazy(() => import('views/app-views/dashboards/orders')),
    },
    {
        key: 'dashboard.clients.list',
        path: `${APP_PREFIX_PATH}/dashboards/clients/list`,
        component: React.lazy(() => import('views/app-views/dashboards/clients/list')),
    },
    {
        key: 'dashboard.clients.group',
        path: `${APP_PREFIX_PATH}/dashboards/clients/group`,
        component: React.lazy(() => import('views/app-views/dashboards/clients/group')),
    },
    {
        key: 'dashboard.banners',
        path: `${APP_PREFIX_PATH}/dashboards/banners`,
        component: React.lazy(() => import('views/app-views/dashboards/banners')),
    },
    {
        key: 'dashboard.promocodes',
        path: `${APP_PREFIX_PATH}/dashboards/promocodes`,
        component: React.lazy(() => import('views/app-views/dashboards/promocodes')),
    },
    {
        key: 'dashboard.offlinePoints.addresses',
        path: `${APP_PREFIX_PATH}/dashboards/offline-points/addresses`,
        component: React.lazy(() => import('views/app-views/dashboards/offlinePoints/addresses')),
    },
    {
        key: 'dashboard.offlinePoints.geofences',
        path: `${APP_PREFIX_PATH}/dashboards/offline-points/geofences`,
        component: React.lazy(() => import('views/app-views/dashboards/offlinePoints/geofences')),
    },
    {
        key: 'dashboard.employees',
        path: `${APP_PREFIX_PATH}/dashboards/employees`,
        component: React.lazy(() => import('views/app-views/dashboards/employees')),
    },
    {
        key: 'dashboard.distribution',
        path: `${APP_PREFIX_PATH}/dashboards/distribution`,
        component: React.lazy(() => import('views/app-views/dashboards/distribution')),
    },
    {
        key: 'system.settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        component: React.lazy(() => import('views/app-views/system/settings')),
    },
    {
        key: 'system.mobileApp',
        path: `${APP_PREFIX_PATH}/system/mobile-app`,
        component: React.lazy(() => import('views/app-views/system/mobileApp')),
    },
    {
        key: 'system.logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        component: React.lazy(() => import('views/app-views/system/logs')),
    },
    {
        key: 'dashboard.clients.list.editProfile',
        path: `${APP_PREFIX_PATH}/dashboards/clients/list/edit-profile/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/clients/list/EditProfile')),
    }
]

