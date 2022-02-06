import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Typography } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <div
        // style={{
        //     color: '#7c795d',
        //     fontFamily: 'Trocchi, serif',
        //     fontSize: '45px',
        //     fontWeight: 'normal',
        //     lineHeight: '48px',
        //     margin: '0'
        // }}
        >
            {' '}
            <Typography varient="h1" className="text-lg font-medium">
                <Logo />
            </Typography>
        </div>
    </ButtonBase>
);

export default LogoSection;
