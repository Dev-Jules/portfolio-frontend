import { Link } from 'react-scroll';
import { Box } from '@chakra-ui/react';
import './menubar.scss';
import { routes } from '../../routes';

const Menubar = () => {
    const renderMenuItems = () => (
        Object.keys(routes).map((key) =>(
            <Link
                activeClass="active"
                to={key}
                spy={true}
                smooth={true}
                duration={500}
                key={key}>
                {key[0].toUpperCase() + key.substring(1)}
            </Link>
        ))
    );

    return (
        <Box as="nav" className="menubar" position="fixed" top="0" width="100%" bg="black" color="white" zIndex="10">
            <Box display="flex" justifyContent="space-around">
                {renderMenuItems()}
            </Box>
        </Box>
    );
};

export default Menubar;
