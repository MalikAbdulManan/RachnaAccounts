// assets
import { Add } from '@mui/icons-material';
import { IconDashboard } from '@tabler/icons';
import PersonIcon from '@mui/icons-material/Person';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },

        {
            id: 'addemployee-page',
            title: 'Add employee',
            type: 'item',
            url: '/dashboard/addemployee',
            icon: Add,
            breadcrumbs: false
        },

        {
            id: 'viewemployees-page',
            title: 'View employees',
            type: 'item',
            url: '/dashboard/viewemployees',
            icon: PersonIcon,
            breadcrumbs: false
        },
        {
            id: 'sendemployeepay-page',
            title: 'Send employee pay',
            type: 'item',
            url: '/dashboard/sendemployeepay',
            icon: LocalAtmIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
