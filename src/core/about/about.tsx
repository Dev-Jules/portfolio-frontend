import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.scss';

const MotionBox = motion(Box);

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    const variants = {
        hidden: { opacity: 0, x: -100 }, // Starts from slightly above and fades in
        visible: { opacity: 1, x: 0 }, // Ends at its original position
    };

    return (
        <Box
            className="home"
            height="100vh"
            width="100vw"
            bg="transparent"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            position="relative"
            ref={ref}
        >
            <MotionBox
                className="heading"
                position="absolute"
                top="48vh"
                left="10vw"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 1 }}
            >
                <Heading fontFamily="Orbitron">ABOUT</Heading>
            </MotionBox>
        </Box>
    );
};

export default About;
