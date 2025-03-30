import { Box, Flex, Text, Link, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Nav = () => {
    return (
        <Box
            bg="#1a365d"
            padding="10px 20px"
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
            position="relative"
            top={0}
            zIndex={10}
        >
            <Flex justify="space-between" align="center" maxW="1600px" mx="auto">
                    <Flex direction="column">
                        <Flex align="center">
                            <Box
                                bg="white"
                                color="#1a365d"
                                p={3}
                                borderRadius="lg"
                                fontWeight="bold"
                                fontSize="xl"
                                transition="all 0.3s ease"
                                _hover={{
                                    transform: "rotate(-5deg)",
                                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
                                }}
                            >
                                LLC
                            </Box>

                            <Text fontSize="32px" fontWeight="bold" color="white" ml={3} lineHeight="1">
                                LAW FIRM
                            </Text>
                            <Text fontSize="32px" fontWeight="bold" color="white" ml={3} lineHeight="1">
                                | LegalTitan
                            </Text>
                            <Text fontSize="lg" color="white" ml={6} mt={1}>
                                |  Իրավաբանական Ընկերություն
                            </Text>
                        </Flex>


                    </Flex>

                    <HStack spacing={8} align="center">
                    <HStack spacing={4}>
                        {["ՀԱՅ", "ENG", "РУС"].map((lang) => (
                            <Text
                                key={lang}
                                fontSize="20px"
                                fontWeight="bold"
                                color="rgba(255,255,255,0.8)"
                                cursor="pointer"
                                transition="all 0.3s ease"
                                _hover={{
                                    color: "white",
                                    transform: "scale(1.1)",
                                    textShadow: "0 0 10px rgba(255,255,255,0.5)"
                                }}
                                px={2}
                                py={1}
                            >
                                {lang}
                            </Text>
                        ))}
                    </HStack>

                    <HStack spacing={5}>
                        <Box
                            as={FaFacebook}
                            size="28px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.3)",
                                color: "#4267B2"
                            }}
                        />
                        <Box
                            as={FaInstagram}
                            size="28px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.3)",
                                color: "#E1306C"
                            }}
                        />
                        <Box
                            as={FaLinkedin}
                            size="28px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.3)",
                                color: "#0077B5"
                            }}
                        />
                    </HStack>
                </HStack>
            </Flex>

            <Flex justify="center" gap={10} mt={8} maxW="1600px" mx="auto">
                <Link
                    href="#"
                    color="white"
                    fontWeight="semibold"
                    fontSize="lg"
                    textDecoration="none"
                    position="relative"
                    _hover={{
                        _after: {
                            content: '""',
                            position: "absolute",
                            bottom: "-5px",
                            left: "0",
                            width: "100%",
                            height: "2px",
                            bg: "white",
                            borderRadius: "full",
                        },
                        transform: "translateY(-3px)",
                        textShadow: "0 0 10px rgba(255,255,255,0.7)",
                    }}
                    transition="all 0.3s ease"
                >
                    Ընկերությունը
                </Link>

                <Link
                    href="#"
                    color="white"
                    fontWeight="semibold"
                    fontSize="lg"
                    textDecoration="none"
                    position="relative"
                    _hover={{
                        _after: {
                            content: '""',
                            position: "absolute",
                            bottom: "-5px",
                            left: "0",
                            width: "100%",
                            height: "2px",
                            bg: "white",
                            borderRadius: "full",
                        },
                        transform: "translateY(-3px)",
                        textShadow: "0 0 10px rgba(255,255,255,0.7)",
                    }}
                    transition="all 0.3s ease"
                >
                    Մեր թիմը
                </Link>

                <Link
                    href="/services"
                    color="white"
                    fontWeight="semibold"
                    fontSize="lg"
                    textDecoration="none"
                    position="relative"
                    _hover={{
                        _after: {
                            content: '""',
                            position: "absolute",
                            bottom: "-5px",
                            left: "0",
                            width: "100%",
                            height: "2px",
                            bg: "white",
                            borderRadius: "full",
                        },
                        transform: "translateY(-3px)",
                        textShadow: "0 0 10px rgba(255,255,255,0.7)",
                    }}
                    transition="all 0.3s ease"
                >
                    Ծառայություններ
                </Link>

                <Link
                    href="/connect"
                    color="white"
                    fontWeight="semibold"
                    fontSize="lg"
                    textDecoration="none"
                    position="relative"
                    _hover={{
                        _after: {
                            content: '""',
                            position: "absolute",
                            bottom: "-5px",
                            left: "0",
                            width: "100%",
                            height: "2px",
                            bg: "white",
                            borderRadius: "full",
                        },
                        transform: "translateY(-3px)",
                        textShadow: "0 0 10px rgba(255,255,255,0.7)",
                    }}
                    transition="all 0.3s ease"
                >
                    Կապ
                </Link>
            </Flex>

        </Box>
    );
};

export default Nav;