// components/modals/HeroCarousel.jsx
import React from "react";
import {Box, Heading, Text, Container, Icon, Button} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

const HeroCarousel = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const carouselItems = [
        {
            title: "Պրոֆեսիոնալ Իրավաբանական Ներկայացում",
            description: "20 տարուց ավելի փորձ բարդ իրավական հարցերում",
            bgImage: "/assets/images/homePage/car_back.jpg",
        },
        {
            title: "Կորպորատիվ Իրավունքի Մասնագետներ",
            description: "Լուծումներ ձեր բիզնեսի բոլոր իրավական հարցերի համար",
            bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            title: "Անհատական Մոտեցում",
            description: "Առաջնահերթություն ենք տալիս յուրաքանչյուր հաճախորդի անհատական պահանջներին",
            bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        }
    ];

    return (
        <Box as="section" position="relative" height={{ base: "400px", md: "500px" }} overflow="hidden">
            <Slider {...sliderSettings}>
                {carouselItems.map((item, index) => (
                    <Box
                        key={index}
                        position="relative"
                        height={{ base: "400px", md: "500px" }}
                        backgroundImage={`url(${item.bgImage})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                    >
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bg="rgba(0, 0, 0, 0.5)"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Container maxW="container.xl" textAlign="center">
                                <Heading
                                    as="h1"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    color="white"
                                    mb={4}
                                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                                >
                                    {item.title}
                                </Heading>
                                <Text
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="white"
                                    maxW="800px"
                                    mx="auto"
                                    textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
                                >
                                    {item.description}
                                </Text>
                                <Button
                                    bg="#187bc0"
                                    color="white"
                                    border="none"
                                    padding="10px"
                                    borderRadius="5px"
                                    size="lg"
                                    _hover={{ bg: "#1565a3", transform: "translateY(-2px)" }}
                                    leftIcon={<Icon as={FontAwesomeIcon} icon={faCommentDots} />}
                                >
                                    Խորհրդատվության
                                </Button>
                            </Container>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HeroCarousel;