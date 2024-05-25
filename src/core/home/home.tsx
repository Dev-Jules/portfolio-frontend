
import { Link as ScrollLink } from 'react-scroll';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import './home.scss';
import {motion} from "framer-motion";

const MotionBox = motion(Box);

const Home = () => {
    return (
        <MotionBox
            className="home"
            height="100vh"
            width="100vw"
            bgImage="url('src/assets/cover.png')"
            bgSize="cover"
            bgPosition="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            position="relative"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 1 }}
        >
                <VStack spacing={4} className="hero-content" maxW="800px" textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold">Hi, I'm Dev Ju</Text>
                    <Text fontSize="xl">Fullstack Developer specializing in Angular / React and .NET</Text>
                    <Text fontSize="xl">Future IT-Security specialist</Text>
                    <Box className="cta-buttons" mt={4} display="flex" gap={4}>
                        <Button as={ScrollLink} to="about" smooth={true} duration={500} colorScheme='blackAlpha' >
                            View About
                        </Button>
                        <Button as={ScrollLink} to="contact" smooth={true} duration={500} colorScheme="gray">
                            Contact Me
                        </Button>
                    </Box>
                </VStack>
                <Box className="scroll-down" position="absolute" bottom="20px">
                    <Button
                        as={ScrollLink}
                        to="projects"
                        smooth={true}
                        duration={500}
                        variant="link"
                        size="lg"
                        className="scroll-link custom-button"
                    >
                        Projects
                    </Button>
                </Box>
        </MotionBox>
    );
};

export default Home;
