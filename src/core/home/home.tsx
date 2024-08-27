import {Link as ScrollLink} from 'react-scroll';
import {Box, Button, Text, VStack} from '@chakra-ui/react';
import {motion} from "framer-motion";
import {ChevronDownIcon} from '@chakra-ui/icons';
import './home.scss';
import {ScrollText} from "../../components/specialButtons/scrollText.tsx";  // Assuming you have custom styling for the home section

const MotionBox = motion(Box);

const Home = () => {
    return (
        <Box className="home" width="100%" height="100vh" position="relative" bg="black">
            {/* Hero Section */}
            <MotionBox
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
                px="5vw"
            >
                <VStack spacing={4} className="hero-content" maxW="800px" alignItems="center">
                    <Text fontFamily="Lato" fontSize="3xl" fontWeight="bold" color="white">
                        Hi, I'm Dev Ju
                    </Text>
                    <Text fontSize="xl" color="lightgray">
                        Fullstack Developer specializing in Angular / React and .NET
                    </Text>
                    <Text fontSize="xl" color="white">
                        Future IT-Security specialist
                    </Text>
                    <Text fontSize="xl" color="lightcyan">
                        Currently working at <a href={"https://www.polygons.at"}>Polygons</a>
                    </Text>
                    <Box>
                        <ScrollLink to="about" smooth={true} duration={500}>
                            <Button colorScheme="blackAlpha" marginRight={4}>
                                View About
                            </Button>
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <Button colorScheme="gray">Contact Me</Button>
                        </ScrollLink>
                    </Box>
                </VStack>
            </MotionBox>

            {/* Scroll Down Indicator */}
            <MotionBox
                position="absolute"
                bottom="0"
                width="100%"
                display="flex"
                justifyContent="center"
                pb="3vh"
                initial={{y: 0}}
                animate={{y: [0, -20, 0]}}
                transition={{duration: 1.5, repeat: Infinity}}
            >
                <ScrollText
                    to="projects"
                    projectText="Projects"
                    arrow={<ChevronDownIcon boxSize="5"/>}
                />
            </MotionBox>
        </Box>
    );
};

export default Home;
