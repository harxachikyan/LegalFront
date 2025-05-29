import React from "react";
import { Box, Flex, Image, Text, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaEnvelope, FaInstagram, FaHeart, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/images/legalLogo.jpg";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => (
    <Box bg="#1a365d" color="white" pt={12} pb={8} px={8}>
        <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            maxW="1600px"
            mx="auto"
            gap={8}
        >
            <VStack align="flex-start" spacing={4} maxW="300px">
                <Flex align="center">
                    <Image src={logo} alt="LegalTitan Logo" h={12} mr={3} />
                    <Text fontSize="2xl" fontWeight="bold">
                        LegalTitan
                    </Text>
                </Flex>
                <Text fontSize="sm">
                    Մեր իրավաբանական ընկերությունը մատուցում  է բարձրակարգ իրավաբանական ծառայություններ՝ հիմնված տարիների փորձի և պրոֆեսիոնալիզմի վրա:
                </Text>
                <HStack spacing={6} mt={4}>
                    <Link href="#" _hover={{ color: "#187bc0" }} transition="all 0.3s">
                        <Icon
                            as={FaFacebook}
                            color="white"
                            fontSize="32px"
                            _hover={{ transform: "scale(1.1)" }}
                            transition="all 0.3s"
                            onClick={() => window.open('https://www.facebook.com/profile.php?id=61557661694303', '_blank')}

                        />
                    </Link>
                    <Link href="#" _hover={{ color: "#187bc0" }} transition="all 0.3s">
                        <Icon
                            as={FaEnvelope}
                            color="white"
                            fontSize="32px"
                            _hover={{ transform: "scale(1.1)" }}
                            transition="all 0.3s"
                            onClick={() => window.open('https://mail.google.com/')}

                        />
                    </Link>
                    <Link href="#" _hover={{ color: "#187bc0" }} transition="all 0.3s">
                        <Icon
                            as={FaInstagram}
                            color="white"
                            fontSize="32px"
                            _hover={{ transform: "scale(1.1)" }}
                            transition="all 0.3s"
                            onClick={() => window.open('https://www.instagram.com/legal_titan_llc______/', '_blank')}
                        />
                    </Link>
                </HStack>
            </VStack>

            <VStack align="flex-start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>Արագ Հղումներ</Text>
                <RouterLink to="/">
                    <Text _hover={{ color: "white" ,textShadow: "0 0 10px rgba(255,255,255,0.5)"}} transition="all 0.3s" color="white">Գլխավոր</Text>
                </RouterLink>
                <RouterLink to="/about">
                    <Text _hover={{ color: "white" ,textShadow: "0 0 10px rgba(255,255,255,0.5)"}} transition="all 0.3s" color="white">Մեր Մասին</Text>
                </RouterLink>
                <RouterLink to="/services">
                    <Text _hover={{ color: "white",textShadow: "0 0 10px rgba(255,255,255,0.5)" }} transition="all 0.3s" color="white">Ծառայություններ</Text>
                </RouterLink>

                <RouterLink to="/contact">
                    <Text _hover={{ color: "white" ,textShadow: "0 0 10px rgba(255,255,255,0.5)"}} transition="all 0.3s" color="white">Կապ</Text>
                </RouterLink>
            </VStack>

            <VStack align="flex-start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>Կապի Տվյալներ</Text>
                <HStack>
                    <Icon as={FaPhone} color="#187bc0"  />
                    <Text>
                        +374-77-53-13-09 <br />
                        +374-55-67-30-01
                    </Text>
                </HStack>
                <HStack>
                    <Icon as={FaEnvelope} color="#187bc0" />
                    <Text>Titanlegal66@gmail.com</Text>
                </HStack>
                <HStack>
                    <Icon as={FaMapMarkerAlt} color="#187bc0" />
                    <Text>4 Ավան-Առինջ 1-ին միկրոշրջան</Text>
                </HStack>
            </VStack>

            <VStack align="flex-start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>Աշխատանքային Ժամեր</Text>
                <Text>Երկուշաբթի - Ուրբաթ</Text>
                <Text>09:00 - 18:00</Text>

            </VStack>
        </Flex>

        <Flex
            justify="center"
            mt={12}
            pt={6}
            borderTop="1px solid rgba(255,255,255,0.1)"
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={2}
        >
            <Text textAlign="center">
                © {new Date().getFullYear()} LegalTitan Իրավաբանական Ընկերություն. Բոլոր իրավունքները պաշտպանված են.
            </Text>
            <Flex align="center">
                <Text>Ստեղծված է</Text>
                <Icon as={FaHeart} color="red.500" mx={2} />
                <Text>Հայաստանում</Text>
            </Flex>
        </Flex>
    </Box>
);

export default Footer;