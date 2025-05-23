import { Box, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { keyframes } from "@emotion/react";

const Marquee = ({ icon, title, subtitle, bgColor, speed = 20 }) => {


    return (
        <Box
            color="white"
            bg={bgColor}
            py={{ base: 10, md: 20 }}
            overflow="hidden"
            position="relative"
        >
            <Box
                display="inline-flex"
                alignItems="center"
                whiteSpace="nowrap"
                animation={`marquee ${speed}s linear infinite`}
            >
                {icon && (
                    <Box mr={{ base: 4, md: 8 }} flexShrink={0}>
                        <img
                            src={icon}
                            alt="Marquee Icon"
                            style={{
                                height: '120px',

                            }}
                        />
                    </Box>
                )}

                <Box>
                    <Heading
                        as="h1"
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
                        mb={{ base: 2, md: 6 }}
                        display="inline-block"
                        verticalAlign="middle"
                    >
                        {title}
                    </Heading>
                    <Text
                        fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
                        display="inline-block"
                        ml={{ base: 4, md: 6 }}
                        verticalAlign="middle"
                    >
                        {subtitle}
                    </Text>
                </Box>
            </Box>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </Box>
    );
};

Marquee.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    speed: PropTypes.number,
};

export default Marquee;