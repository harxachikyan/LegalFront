import { Box, VStack, Text, Divider, Image } from "@chakra-ui/react";
import logo from "../../assets/images/legalLogo.jpg";
import React from "react";
import { keyframes } from "@emotion/react";

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
            p={10}
            borderRadius="xl"
            display="flex"
            justifyContent="space-between"
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
        >
            <Box
                p={8}
                borderRadius="xl"
                position="relative"
                zIndex="1"
                flex="1"
                maxW="50%"
            >
                <VStack spacing={6} align="start">
                    {["Լավագույն լուծումներ", "Երախտապարտ վստահորդներ", "Գրագետ գործելաոճ", "Անհատական մոտեցումներ", "Լիարժեք նվիրվածություն"].map((word, index) => (
                        <Box
                            key={index}
                            animation={fadeInAnimation}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Text
                                fontSize="xl"
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
                                    fontSize="4xl"
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
                    my={8}
                    borderColor="rgba(33, 128, 193, 0.5)"
                    borderWidth="2px"
                    width="80%"
                    opacity="0"
                    animation={`${fadeIn} 0.5s ease-out 0.5s forwards`}
                />

                <VStack spacing={5} align="start" mt={6}>
                    {["Տարիների փորձ", "Իրավական գիտելիքներ", "Տարբերվող մոտեցումներ", "Անհրաժեշտ հմտություններ", "Նախանձելի արդյունքներ"].map((word, index) => (
                        <Box
                            key={index}
                            animation={fadeInAnimation}
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                            <Text
                                fontSize="xl"
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
                                    fontSize="4xl"
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
            >
                <Image
                    src={logo}
                    alt="LegalTitan Logo"
                    w="70%"
                    maxW="300px"
                    borderRadius="full"
                    boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
                    border="4px solid rgba(255, 255, 255, 0.2)"
                    transform="rotate(-5deg)"
                    _hover={{
                        transform: "rotate(0deg)",
                        transition: "transform 0.5s ease",
                    }}
                    mb={8}
                />

                <Box
                    bg="rgba(0, 0, 0, 0.3)"
                    p={6}
                    borderRadius="xl"
                    borderLeft="4px solid #2180c1"
                    backdropFilter="blur(5px)"
                    maxW="80%"
                    animation={`${fadeIn} 0.8s ease-out 1s forwards`}
                    opacity="0"
                >
                    <Text
                        color="white"
                        fontSize="lg"
                        fontWeight="semibold"
                        fontStyle="italic"
                        textAlign="center"
                        lineHeight="1.6"
                    >
                        "Իրավունքի նպատակը խաղաղության ապահովումն է, նրան հասնելու միջոցը՝ պայքարը:"
                    </Text>
                    <Text
                        textAlign="right"
                        fontSize="md"
                        fontWeight="bold"
                        color="rgba(255, 255, 255, 0.8)"
                        mt={3}
                    >
                        Իրվինգ
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Acrostic;