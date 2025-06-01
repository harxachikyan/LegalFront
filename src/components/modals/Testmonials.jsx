import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Box py={{ base: 10, md: 20 }} bg="blue.50">
            <Container
                maxW={{ base: "95%", md: "container.lg", xl: "container.xl" }}
                textAlign="center"
                px={{ base: 4, sm: 6, md: 8 }}
            >
                <Heading
                    color="#1565a3"
                    mb={{ base: 8, md: 12 }}
                    fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                >
                    Վստահորդների Կարծիքներ
                </Heading>
                <Slider {...sliderSettings}>
                    <Box p={{ base: 4, md: 8 }}>
                        <Text
                            fontSize={{ base: "md", sm: "lg", md: "xl" }}
                            fontStyle="italic"
                            mb={{ base: 2, md: 4 }}
                            lineHeight="tall"
                        >
                            "LegalTitan-ի թիմը ապահովել է պատշաճ դատական ներկայացուցչություն , որի արդյունքում իմ սեփականության իրավունքը վերականգնվել է:"
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            - Աննա Ս.
                        </Text>
                    </Box>
                    <Box p={{ base: 4, md: 8 }}>
                        <Text
                            fontSize={{ base: "md", sm: "lg", md: "xl" }}
                            fontStyle="italic"
                            mb={{ base: 2, md: 4 }}
                            lineHeight="tall"
                        >
                            "Մեր ընկերությունը բազմիցս դիմել է "Լեգալ Տիտան" ՍՊԸ-ին հանրային իրավունքի /հարկային իրավունքի/ բնագավառում ծագած խնդրով և մշտապես ստացել է պատշաճ իրավական լուծումներ:"
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            - ... ՓԲԸ
                        </Text>
                    </Box>
                    <Box p={{ base: 4, md: 8 }}>
                        <Text
                            fontSize={{ base: "md", sm: "lg", md: "xl" }}
                            fontStyle="italic"
                            mb={{ base: 2, md: 4 }}
                            lineHeight="tall"
                        >
                            "Մենք մշտական համգործակցության նպատակով 2023թ-ին դիմել ենք "Լեգալ Տիտան" ՍՊԸ-ին և մինչ այժմ համագործակցում ենք ընկերության հետ , իսկ մեր իրավական խնդիրները պատշաճ լուծումներ են ստանում: "
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            - ... ՍՊԸ
                        </Text>
                    </Box>
                </Slider>
            </Container>
        </Box>
    );
};

export default Testimonials;