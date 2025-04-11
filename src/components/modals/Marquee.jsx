import { Box, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Marquee = ({ icon, title, subtitle, bgColor, speed = 20 }) => {
    return (
        <Box
            color="white"
            bg={bgColor}
            py={20}
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
                    <Box mr={8} flexShrink={0}>
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
                    <Heading as="h1" size="2xl" mb={6} display="inline-block">
                        {title}
                    </Heading>
                    <Text fontSize="xl" display="inline-block" ml={6}>
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