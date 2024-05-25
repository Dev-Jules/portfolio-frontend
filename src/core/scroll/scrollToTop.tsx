import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const section = pathname.substring(1) || 'home';
        scroller.scrollTo(section, {
            smooth: true,
            duration: 500,
            offset: -64, // Adjust based on menubar height
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
