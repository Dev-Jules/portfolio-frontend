import { Link as ScrollLink } from 'react-scroll';
import {Box, Button, Text, VStack, Image} from '@chakra-ui/react';
import { motion } from "framer-motion";
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from "react";
import './home.scss';


const MotionBox = motion(Box);


type ScrollTextProps = {
    to: string;
    arrow: React.ReactNode;
    projectText: React.ReactNode;
    //...other props.
};

const ScrollText = ({ to, arrow, projectText, ...rest }: ScrollTextProps) => (
    <VStack
        as={ScrollLink}
        to={to}
        smooth={true}
        color="darkgrey"
        duration={500}
        _hover={{ cursor: "pointer", color: "black" }}
        align="center"  // vertically align the content (Arrow and Text)
        {...rest}
    >
        <Text >{projectText}</Text>
        {arrow}
    </VStack>
);


const Home = () => {
    return (
        <Box className="home" width="100%" position="relative">
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                display="flex"
                pr="50vw"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
            >
                <VStack spacing={4} className="hero-content" maxW="800px" alignItems="center">
                    <Text fontFamily="Orbitron" fontSize="3xl" fontWeight="bold" color="white">Hi, I'm Dev Ju</Text>
                    <Text fontSize="xl" color="lightgray">Fullstack Developer specializing in Angular / React and .NET</Text>
                    <Text fontSize="xl" color="white">Future IT-Security specialist</Text>
                    <Box>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                            <Button colorScheme="blackAlpha" marginRight={4}>
                                View About
                            </Button>
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            <Button colorScheme="gray">
                                Contact Me
                            </Button>
                        </ScrollLink>
                    </Box>
                </VStack>
            </MotionBox>
            <MotionBox
                position="absolute"
                bottom="0"
                width="100%"
                display="flex"
                justifyContent="center"
                pb="3vh"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ScrollText to="projects" projectText="Projects" arrow={<ChevronDownIcon boxSize="5" />} />
            </MotionBox>
        </Box>
    );
};

export default Home;
