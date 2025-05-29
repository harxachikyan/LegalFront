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
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faCommentDots, faGavel, faBalanceScale, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../../components/modals/Testmonials";
import HeroCarousel from "../../components/modals/HeroCarousel";
import Acrostic from "../../components/modals/Acrostic";
import Marquee from "../../components/modals/Marquee";
import GerbIcon from "../../assets/images/gerb.png";

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
        { icon: faGavel, title: "Քաղաքացիական իրավունք", description: "Ձեր իրավունքների և օրինական շահերի պաշտպանություն մասնավոր իրավունքին առնչվող ցանկացած գործով" },
        { icon: faBalanceScale, title: "Վարչական Իրավունք", description: "Ձեր իրավունքի պաշտպանը պետական մարմինների հետ հարաբերություններում" },
        { icon: faHandshake, title: "Կորպորատիվ Իրավունք", description: "Ընկերություններ կորպորատիվ իրավաբանական սպասարկում և ցանկացած իրավական խնդրի լուծում" },
    ];
    const navigate = useNavigate();
    return (
        <Box maxW="100vw" overflowX="hidden">
            <HeroCarousel height={{ base: "60vh", md: "70vh", lg: "80vh" }} />

            <Marquee
                icon={GerbIcon}
                title="Մեր Հաջողված Գործերը"
                subtitle="Մեր իրավաբանական թիմի կողմից իրականացված ամենանշանակալի դատական գործերը"
                bgColor="#1a365d"
                speed={20}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "sm", md: "md" }}
            />

            <Box py={{ base: 12, md: 20 }} bg="gray.50">
                <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
                    <Heading
                        textAlign="center"
                        mb={{ base: 8, md: 12 }}
                        color="#187bc0"
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    >
                        Ծառայությունների Ոլորտները
                    </Heading>

                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="center"
                        align="stretch"
                        gap={{ base: 6, md: 8 }}
                        flexWrap="wrap"
                    >
                        {practiceAreas.map((area, index) => (
                            <Box
                                key={index}
                                bg="white"
                                p={{ base: 6, md: 8 }}
                                borderRadius="lg"
                                boxShadow="md"
                                textAlign="center"
                                flex={{ base: "1 0 100%", sm: "1 0 calc(50% - 16px)", md: "1" }}
                                minW={{ base: "100%", sm: "300px" }}
                                maxW={{ base: "100%", md: "400px" }}
                                transition="all 0.3s ease"
                                _hover={{
                                    transform: "translateY(-5px)",
                                    boxShadow: "xl",
                                }}
                            >
                                <Icon
                                    as={FontAwesomeIcon}
                                    icon={area.icon}
                                    fontSize={{ base: "32px", md: "38px" }}
                                    color="#187bc0"
                                    mb={4}
                                />
                                <Heading
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="#187bc0"
                                    mb={4}
                                    lineHeight="tall"
                                >
                                    {area.title}
                                </Heading>
                                <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                                    {area.description}
                                </Text>
                                <Link to="/services">
                                    <Button
                                        variant="outline"
                                        color="#187bc0"
                                        size={{ base: "sm", md: "md" }}
                                        width="fit-content"
                                        borderWidth="2px"
                                        borderRadius="md"
                                        _hover={{
                                            bg: "#187bc0",
                                            color: "white",
                                            transform: "scale(1.05)"
                                        }}
                                        onClick={() => navigate('/services')}
                                    >
                                        Ավելին
                                    </Button>
                                </Link>

                            </Box>
                        ))}
                    </Flex>
                </Container>
            </Box>

            <Box py={{ base: 12, md: 20 }} bg="white">
                <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={{ base: 8, md: 12 }}
                        align="center"
                    >
                        <Box
                            flex={{ base: "1 0 100%", md: "1" }}
                            order={{ base: 2, md: 1 }}
                        >
                            <Image
                                src="assets/images/homePage/about_seck.jpg"
                                borderRadius="lg"
                                boxShadow="lg"
                                width="100%"
                                maxH={{ base: "300px", md: "400px" }}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </Box>
                        <Box
                            flex={{ base: "1 0 100%", md: "1" }}
                            order={{ base: 1, md: 2 }}
                            textAlign={{ base: "center", md: "left" }}
                        >
                            <Heading
                                mb={{ base: 4, md: 6 }}
                                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                                fontStyle="italic"
                                color="gray.800"
                            >
                                Ինչու՞ ընտրել մեզ
                            </Heading>
                            <Text
                                mb={4}
                                fontSize={{ base: "md", md: "lg" }}
                                fontStyle="italic"
                                color="gray.600"
                            >
                                Մեր թիմի իրավաբանները և փաստաբանները
                            </Text>
                            <Text
                                mb={6}
                                fontSize={{ base: "sm", md: "md" }}
                                fontStyle="italic"
                                color="gray.600"
                                lineHeight="tall"
                            >
                                Մենք հպարտանում ենք մեր ավանդական արժեքներով և նորարարական մոտեցումներով, որոնք
                                ապահովում են լավագույն արդյունքները մեր հաճախորդների համար:
                            </Text>
                            <Button
                                bg="#187bc0"
                                color="white"
                                size={{ base: "md", md: "lg" }}
                                borderRadius="md"
                                px={8}
                                _hover={{
                                    bg: "#1565a3",
                                    transform: "translateY(-2px)",
                                    boxShadow: "md"
                                }}
                                leftIcon={
                                    <Icon
                                        as={FontAwesomeIcon}
                                        icon={faPagelines}
                                        fontSize={{ base: "24px", md: "28px" }}
                                    />
                                }
                                onClick={() => navigate('/about')}
                            >
                                Իմանալ Ավելին
                            </Button>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Testimonials />
            <Acrostic />

            <Box py={{ base: 12, md: 20 }} bg="#ebf8ff">
                <Container maxW="container.xl" px={{ base: 4, md: 6 }} textAlign="center">
                    <Heading
                        mb={{ base: 6, md: 8 }}
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        color="#1565a3"
                        lineHeight="tall"
                    >
                        Պատրաստ եք քննարկել Ձեր իրավական հարցերը?
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "xl" }}
                        mb={{ base: 6, md: 8 }}
                        opacity={0.9}
                        color="#1565a3"
                    >
                        Կապ հաստատեք մեզ հետ՝ անվճար խորհրդատվության համար:
                    </Text>
                    <Stack
                        direction={{ base: "column", sm: "row" }}
                        justify="center"
                        spacing={{ base: 4, sm: 6 }}
                        width="100%"
                    >
                        <Button
                            bg="white"
                            color="#187bc0"
                            size={{ base: "md", md: "lg" }}
                            width={{ base: "100%", sm: "auto" }}
                            px={8}
                            borderRadius="md"
                            fontWeight="bold"
                            boxShadow="md"
                            borderWidth="2px"
                            borderColor="#187bc0"
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
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: "xl",
                                bg: "#187bc0",
                                color: "white"
                            }}
                            leftIcon={
                                <Icon
                                    as={FontAwesomeIcon}
                                    icon={faHeadset}
                                    fontSize={{ base: "20px", md: "24px" }}
                                />
                            }
                        >
                            Զանգահարել Հիմա
                        </Button>
                        <Button
                            bg="white"
                            color="#187bc0"
                            size={{ base: "md", md: "lg" }}
                            width={{ base: "100%", sm: "auto" }}
                            px={8}
                            borderRadius="md"
                            fontWeight="bold"
                            boxShadow="md"
                            borderWidth="2px"
                            borderColor="#187bc0"
                            transition="all 0.3s"
                            onClick={() => navigate('/contact')}
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: "xl",
                                bg: "#187bc0",
                                color: "white"
                            }}
                            leftIcon={
                                <Icon
                                    as={FontAwesomeIcon}
                                    icon={faCommentDots}
                                    fontSize={{ base: "20px", md: "24px" }}
                                />
                            }
                        >
                            Ուղարկել Հաղորդագրություն
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default HomePage;