// assets
import { Add } from '@mui/icons-material';
import { IconDashboard } from '@tabler/icons';
import PersonIcon from '@mui/icons-material/Person';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';

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
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },

        {
            id: 'addemployee-page',
            title: 'Add employee',
            type: 'item',
            url: '/addemployee',
            icon: Add,
            breadcrumbs: false
        },

        {
            id: 'viewemployees-page',
            title: 'View employees',
            type: 'item',
            url: '/viewemployees',
            icon: PersonIcon,
            breadcrumbs: false
        },
        {
            id: 'sendemployeepay-page',
            title: 'Send employee pay',
            type: 'item',
            url: '/sendemployeepay',
            icon: LocalAtmIcon,
            breadcrumbs: false
        },
        {
            id: 'verifypensioner-page',
            title: 'Verify pensioner',
            type: 'item',
            url: '/verifypensioner',
            icon: FingerprintIcon,
            breadcrumbs: false
        },
        {
            id: 'searchrecords-page',
            title: 'Search records',
            type: 'item',
            url: '/user/searchrecords',
            icon: ScreenSearchDesktopIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
