import React from 'react';
import {Link} from 'react-scroll';
import {Flex, Box, Button} from '@chakra-ui/react';
import './menubar.scss';
import {routes} from '../../routes';

const Menubar: React.FC = () => {
    const renderMenuItems = () => (
        Object.keys(routes).map((key) => (
            <Link
                activeClass="active"
                to={key}
                spy={true}
                smooth={true}
                duration={500}
                key={key}
                style={{fontFamily: "Lato, sans-serif", margin: "0 10px"}}
            >
                <Button variant="ghost" _hover={{color: 'teal.500'}}>
                    {key.toUpperCase()}
                </Button>
            </Link>
        ))
    );

    return (
        <Box as="nav" className="menubar">
            <Flex justify="space-around" align="center" p="4">
                {renderMenuItems()}
            </Flex>
        </Box>
    );
};

export default Menubar;
