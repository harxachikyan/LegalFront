import { Box, VStack, Text, Divider, Image } from "@chakra-ui/react";
import logo from "../../assets/images/legalLogo.jpg"; // KEPT AS IS
import React from "react";
import { keyframes } from "@emotion/react";

// KEPT AS IS: Animation keyframes
const glow = keyframes`
    0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.7); }
    50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.9); }
    100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.7); }
`;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const Acrostic = () => {
    const glowAnimation = `${glow} 3s ease-in-out infinite`;
    const fadeInAnimation = `${fadeIn} 0.5s ease-out forwards`;

    return (
        <Box
            bg="linear-gradient(135deg, #1a365d 0%, #15325a 50%, #0d2a52 100%)"
            bgSize="cover"
            bgPosition="center"
            p={{ base: 6, md: 10 }}
            borderRadius="xl"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "space-between" }}
            alignItems="center"
            boxShadow="xl"
            position="relative"
            overflow="hidden"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
                zIndex: 0,
            }}
            maxW="100%"
            mx="auto"
            mt={{ base: 8, md: 16 }}
        >

            <Box
                p={{ base: 4, md: 8 }}
                borderRadius="xl"
                position="relative"
                zIndex="1"
                flex="1"
                maxW={{ base: "100%", md: "50%" }}
                textAlign={{ base: "center", md: "left" }}
            >
                <VStack spacing={{ base: 3, md: 6 }} align={{ base: "center", md: "start" }}>
                    {["Լավագույն լուծումներ", "Երախտապարտ վստահորդներ", "Գրագետ գործելաոճ", "Անհատական մոտեցումներ", "Լիարժեք նվիրվածություն"].map((word, index) => (
                        <Box
                            key={index}
                            animation={fadeInAnimation}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Text
                                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                                color="transparent"
                                style={{ WebkitTextStroke: "1px white" }}
                                lineHeight="1.6"
                                _hover={{
                                    transform: "translateX(5px)",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <Text
                                    as="span"
                                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                    style={{
                                        WebkitTextStroke: "2px white",
                                        color: "transparent",
                                        marginRight: "8px",
                                        display: "inline-block",
                                        animation: glowAnimation,
                                    }}
                                >
                                    {word[0]}
                                </Text>
                                {word.slice(1)}
                            </Text>
                        </Box>
                    ))}
                </VStack>

                <Divider
                    my={{ base: 6, md: 8 }}
                    borderColor="rgba(33, 128, 193, 0.5)"
                    borderWidth="2px"
                    width={{ base: "60%", md: "80%" }}
                    mx={{ base: "auto", md: "unset" }} p
                    opacity="0"
                    animation={`${fadeIn} 0.5s ease-out 0.5s forwards`}
                />

                <VStack spacing={{ base: 3, md: 5 }} align={{ base: "center", md: "start" }} mt={{ base: 4, md: 6 }}>
                    {["Տարիների փորձ", "Իրական հնարավորություններ", "Տարբերվող մոտեցումներ", "Անհրաժեշտ հմտություններ", "Նախանձելի արդյունքներ"].map((word, index) => (
                        <Box
                            key={index}
                            animation={fadeInAnimation}
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                            <Text
                                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                                color="transparent"
                                style={{ WebkitTextStroke: "1px white" }}
                                lineHeight="1.6"
                                _hover={{
                                    transform: "translateX(5px)",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <Text
                                    as="span"
                                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                    style={{
                                        WebkitTextStroke: "2px white",
                                        color: "transparent",
                                        marginRight: "8px",
                                        display: "inline-block",
                                        animation: glowAnimation,
                                    }}
                                >
                                    {word[0]}
                                </Text>
                                {word.slice(1)}
                            </Text>
                        </Box>
                    ))}
                </VStack>
            </Box>


            <Box
                position="relative"
                zIndex="1"
                flex="1"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={{ base: 10, md: 0 }}
            >
                <Image
                    src={logo}
                    alt="LegalTitan Logo"
                    w={{ base: "50%", sm: "40%", md: "70%" }}
                    maxW={{ base: "200px", md: "300px" }}
                    borderRadius="full"
                    boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
                    border="4px solid rgba(255, 255, 255, 0.2)"
                    transform="rotate(-5deg)"
                    _hover={{
                        transform: "rotate(0deg)",
                        transition: "transform 0.5s ease",
                    }}
                    mb={{ base: 6, md: 8 }}
                />

                <Box
                    bg="rgba(0, 0, 0, 0.3)"
                    p={{ base: 4, md: 6 }}
                    borderRadius="xl"
                    borderLeft="4px solid #2180c1"
                    backdropFilter="blur(5px)"
                    maxW={{ base: "90%", md: "80%" }}
                    animation={`${fadeIn} 0.8s ease-out 1s forwards`}
                    opacity="0"
                >
                    <Text
                        color="white"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="semibold"
                        fontStyle="italic"
                        textAlign="center"
                        lineHeight="1.6"
                    >
                        "Իրավունքի նպատակը խաղաղության ապահովումն է, նրան հասնելու միջոցը՝ պայքարը:"
                    </Text>
                    <Text
                        textAlign="right"
                        fontSize={{ base: "sm", md: "md" }}
                        fontWeight="bold"
                        color="rgba(255, 255, 255, 0.8)"
                        mt={{ base: 2, md: 3 }}
                    >
                        Իրվինգ
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Acrostic;