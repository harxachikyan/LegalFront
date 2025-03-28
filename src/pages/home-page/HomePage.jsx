import React from "react";
import { useToast } from '@chakra-ui/react'
import {
    Box,
    Button,
    Text,
    VStack,
    HStack,
    Icon,
    Link,
    Flex,
    Heading,
    Image,
    useBreakpointValue,
    Stack,
    Container
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faCommentDots, faGavel, faBalanceScale, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../../components/modals/Testmonials";
import HeroCarousel from "../../components/modals/HeroCarousel";

const HomePage = () => {
    const toast = useToast();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };



    const practiceAreas = [
        { icon: faGavel, title: "Քրեական Իրավունք", description: "Ագրեսիվ պաշտպանություն բոլոր տեսակի քրեական գործերում" },
        { icon: faBalanceScale, title: "Ընտանեկան Իրավունք", description: "Կարեկցանք և պրոֆեսիոնալիզմ ընտանեկան բոլոր իրավական հարցերում" },
        { icon: faHandshake, title: "Բիզնես Իրավունք", description: "Կորպորատիվ կառուցվածք և պայմանագրերի մշակում" },
    ];

    return (
        <Box maxW="100vw" overflowX="hidden">

            <HeroCarousel />

            <Box py={20} bg="gray.50">
                <Container maxW="container.xl" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Heading textAlign="center" mb={12} color="#187bc0">Ծառայությունների Ոլորտները</Heading>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify={{ base: "center", md: "space-between" }}
                        align="center"
                        gap={8}
                        flexWrap="wrap"
                        width="100%"
                    >
                        {practiceAreas.map((area, index) => (
                            <Box
                                key={index}
                                bg="white"
                                p={8}
                                borderRadius="lg"
                                boxShadow="lg"
                                textAlign="center"
                                flex="1"
                                minW={{ base: "100%", md: "300px" }}
                                maxW={{ base: "100%", md: "calc(33% - 32px)" }}
                                transition="all 0.3s ease"
                                _hover={{background:"#80808042", transform: "translateY(-5px)", boxShadow: "xl",borderRadius:"10px" }}
                            >
                                <Icon
                                    as={FontAwesomeIcon}
                                    icon={area.icon}
                                    fontSize="38px"
                                    color="#187bc0"
                                    mb={4}
                                />
                                <Heading fontSize="xl" color="#187bc0" mb={4}>{area.title}</Heading>
                                <Text>{area.description}</Text>
                                <Button
                                    mt={4}
                                    variant="outline"
                                    color="#187bc0"
                                    padding="5px"
                                    border="none"
                                    borderRadius="5px"
                                    borderColor="#187bc0"
                                    _hover={{ bg: "#187bc0", color: "white" }}
                                >
                                    Ավելին
                                </Button>
                            </Box>
                        ))}
                    </Flex>
                </Container>
            </Box>

            <Box py={20}>
                <Container maxW="container.xl">
                    <HStack spacing={12} align="center" flexWrap={{ base: "wrap", md: "nowrap" }}>
                        <Box flex={{ base: "1 0 100%", md: "1" }} mb={{ base: 8, md: 0 }}>
                            <Image
                                src="assets/images/homePage/about_seck.jpg"
                                borderRadius="lg"
                                boxShadow="lg"
                                width="100%"
                            />
                        </Box>
                        <Box flex={{ base: "1 0 100%", md: "1" }}>
                            <Text color="#187bc0" fontWeight="bold" mb={2}>Մեր Մասին</Text>
                            <Heading mb={6} fontStyle="italic">Տարիների Փորձ Իրավաբանության Բնագավառում</Heading>
                            <Text mb={4} fontStyle="italic">
                                1995 թվականից ի վեր մեր ընկերությունը մասնագիտացած է իրավաբանական ծառայությունների
                                ոլորտում՝ ապահովելով ինչպես անհատների, այնպես էլ կազմակերպությունների իրավական պահանջները:
                            </Text>
                            <Text mb={6} fontStyle="italic">
                                Մենք հպարտանում ենք մեր ավանդական արժեքներով և նորարարական մոտեցումներով, որոնք
                                ապահովում են լավագույն արդյունքները մեր հաճախորդների համար:
                            </Text>
                            <Button
                                bg="#187bc0"
                                color="white"
                                border="none"
                                padding="10px"
                                borderRadius="5px"
                                _hover={{ bg: "#1565a3", transform: "translateY(-2px)" }}
                                leftIcon={<Icon fontSize="28px" as={FontAwesomeIcon} icon={faPagelines} />}
                            >
                                Իմանալ Ավելին
                            </Button>
                        </Box>
                    </HStack>
                </Container>
            </Box>

            <Testimonials />

            <Box py={20} bg="#187bc085" color="white" marginTop="40px">
                <Container maxW="container.xl" textAlign="center">
                    <Heading mb={6} fontSize="3xl" fontWeight="bold">
                        Պատրաստ եք քննարկել Ձեր իրավական հարցերը?
                    </Heading>
                    <Text fontSize="xl" mb={8} opacity={0.9}>
                        Կապ հաստատեք մեզ հետ՝ անվճար խորհրդատվության համար:
                    </Text>
                    <HStack justify="center" spacing={6} flexWrap="wrap">
                        <Button
                            background="linear-gradient(to right, #ffffff, #e6f7ff)"
                            color="#187bc0"
                            size="lg"
                            px={8}
                            border="none"
                            padding="10px"
                            borderRadius="5px"
                            fontWeight="bold"
                            boxShadow="md"
                            onClick={() =>
                                toast({
                                    title: "Զանգահարեք մեզ",
                                    description: "Հեռախոսահամար՝ +374 77 53 13 09",
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                            transition="all 0.3s"
                            _hover={{ transform: "scale(1.07)", boxShadow: "xl" }}
                            leftIcon={<Icon as={FontAwesomeIcon} icon={faHeadset} />}
                            mb={{ base: 4, md: 0 }}
                        >
                            Զանգահարել Հիմա
                        </Button>
                        <Button
                            background="linear-gradient(to right, #ffffff, #e6f7ff)"
                            color="#187bc0"
                            size="lg"
                            px={8}
                            border="none"
                            padding="10px"
                            borderRadius="5px"
                            fontWeight="bold"
                            boxShadow="md"
                            transition="all 0.3s"
                            _hover={{
                                bg: "white",
                                color: "#187bc0",
                                transform: "scale(1.07)",
                                boxShadow: "xl"
                            }}
                            leftIcon={<Icon as={FontAwesomeIcon} icon={faCommentDots} />}
                        >
                            Ուղարկել Հաղորդագրություն
                        </Button>
                    </HStack>
                </Container>
            </Box>
        </Box>
    );
};

export default HomePage;