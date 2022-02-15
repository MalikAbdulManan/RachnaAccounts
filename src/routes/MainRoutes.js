import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const AddEmployee = Loadable(lazy(() => import('views/AddNewEmployee/AddNewEmployee')));
const ViewEmployees = Loadable(lazy(() => import('views/ViewEmployees/ViewEmployees')));
const SendEmployeePay = Loadable(lazy(() => import('views/SendEmployeePay/SendEmployeePay')));
const VerifyPensioner = Loadable(lazy(() => import('views/VerifyPensioner/VerifyPensioner')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/dashboard/addemployee',
            element: <AddEmployee />
        },
        {
            path: '/dashboard/viewemployees',
            element: <ViewEmployees />
        },
        {
            path: '/dashboard/sendemployeepay',
            element: <SendEmployeePay />
        },
        {
            path: '/dashboard/verifypensioner',
            element: <VerifyPensioner />
        }
    ]
};

export default MainRoutes;
