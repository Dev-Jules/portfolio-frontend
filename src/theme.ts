import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#242424',
                color: 'white',
            },
        },
    },
});

export default theme;
