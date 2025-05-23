// components/modals/HeroCarousel.jsx
import React from "react";
import {Box, Heading, Text, Container, Icon, Button} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // KEPT AS IS
import "slick-carousel/slick/slick-theme.css"; // KEPT AS IS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

const HeroCarousel = () => {
    // KEPT AS IS: Slider settings
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
            title: "Պրոֆեսիոնալ Իրավաբանական և փաստաբանական ծառայություններ",
            description: "Տարիների փորձ իրավաբանության ոլորտում",
            bgImage:"assets/images/homePage/hero.webp",
        },
        {
            title: "Բարձրակարգ կորպորատիվ սպասարկման ծառայություններ",
            description: "Ձեր բիզնեսի իրավական խնդիրների նախականխում, կանխում և լուծում",
            bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            title: "Անհատական մոտեցում յուրաքանչյուր վստահորդին",
            description: "Առաջնահերթություն ենք տալիս յուրաքանչյուր վստահորդի անհատական պահանջներին",
            bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        }
    ];

    return (
        <Box
            as="section"
            position="relative"
            // Responsive height
            height={{ base: "300px", sm: "350px", md: "450px", lg: "550px", xl: "600px" }}
            overflow="hidden"
        >
            <Slider {...sliderSettings}>
                {carouselItems.map((item, index) => (
                    <Box
                        key={index}
                        position="relative"
                        height={{ base: "300px", sm: "350px", md: "450px", lg: "550px", xl: "600px" }}
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
                            px={{ base: 4, md: 8 }}
                        >
                            <Container maxW={{ base: "90%", md: "container.lg", xl: "container.xl" }} textAlign="center">
                                <Heading
                                    as="h1"

                                    fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
                                    color="white"
                                    mb={{ base: 2, md: 4 }}
                                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                                >
                                    {item.title}
                                </Heading>
                                <Text

                                    fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
                                    color="white"
                                    maxW={{ base: "90%", md: "800px" }}
                                    mx="auto"
                                    textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
                                    mb={{ base: 4, md: 6 }}
                                >
                                    {item.description}
                                </Text>
                                <Button
                                    bg="#187bc0"
                                    color="white"
                                    border="none"
                                    borderRadius="5px"

                                    size={{ base: "md", md: "lg" }}
                                    px={{ base: 6, md: 10 }}
                                    py={{ base: 2, md: 3 }}
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