import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { throttle } from 'lodash';
import { routes } from '../../routes.ts';

const sectionOffsets = {
    home: routes.home,
    projects: routes.projects,
    about: routes.about,
    contact: routes.contact,
};

const useScrollListener = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = throttle(() => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const [section, path] of Object.entries(sectionOffsets)) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        navigate(path, { replace: true });
                        break;  // Correct placement for break is within the if statement.
                    }
                }
            }
        }, 200); // Adjust the throttle delay as needed

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navigate]);
};

export default useScrollListener;
