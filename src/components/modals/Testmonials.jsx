import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";

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
        <Box py={20} bg="blue.50">
            <Container maxW="container.xl" textAlign="center">
                <Heading color="#1565a3" mb={12}>Հաճախորդների Կարծիքներ</Heading>
                <Slider {...sliderSettings}>
                    <Box p={8}>
                        <Text fontSize="xl" fontStyle="italic" mb={4}>
                            "LegalTitan-ի թիմը ապահովել է բացառիկ իրավաբանական ներկայացուցչություն իմ բարդ ամուսնալուծության ընթացքում:
                            Նրանք կարեկից էին, բայց միաժամանակ պայքարում էին իմ իրավունքների համար:"
                        </Text>
                        <Text fontWeight="bold">- Աննա Ս.</Text>
                    </Box>
                    <Box p={8}>
                        <Text fontSize="xl" fontStyle="italic" mb={4}>
                            "Մեր կորպորացիան տարիներ է, ինչ օգտվում է նրանց բիզնես իրավունքի փորձագիտությունից:
                            Նրանք հասկանում են մեր ոլորտը և առաջարկում գործնական իրավական լուծումներ:"
                        </Text>
                        <Text fontWeight="bold">- Միքայել Թ.</Text>
                    </Box>
                </Slider>
            </Container>
        </Box>
    );
};

export default Testimonials;