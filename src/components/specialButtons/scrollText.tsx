import {Text, VStack} from "@chakra-ui/react";
import {Link as ScrollLink} from "react-scroll";
import React from "react";


type ScrollTextProps = {
    to: string;
    arrow: React.ReactNode;
    projectText: React.ReactNode;
};

export const ScrollText = ({ to, arrow, projectText, ...rest }: ScrollTextProps) => (
    <VStack
        as={ScrollLink}
        to={to}
        smooth={true}
        duration={500}
        _hover={{ cursor: "pointer", color: "black" }}
        align="center"
        {...rest}
    >
        <Text>{projectText}</Text>
        {arrow}
    </VStack>
);
