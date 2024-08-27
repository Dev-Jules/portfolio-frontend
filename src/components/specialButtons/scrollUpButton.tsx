import React, { useEffect, useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const ScrollUpButton: React.FC = () => {
    const [showScrollUpButton, setShowScrollUpButton] = useState(false);

    // Scroll detection for showing the scroll-up button
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Show the button when scrolled past the home section (100vh)
            if (scrollPosition > window.innerHeight - 1) {
                setShowScrollUpButton(true);
            } else {
                setShowScrollUpButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showScrollUpButton && (
                <IconButton
                    position="fixed"
                    bottom="4vh"
                    right="4vh"
                    colorScheme="teal"
                    icon={<ChevronUpIcon boxSize="5" />}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                />
            )}
        </>
    );
};

export default ScrollUpButton;
