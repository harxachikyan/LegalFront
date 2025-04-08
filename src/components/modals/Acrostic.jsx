import {Box, VStack, Text, Divider, Image} from "@chakra-ui/react";
import logo from "../../assets/images/legalLogo.jpg";
import React from "react";
const Acrostic = () => {
    return (
        <Box
            // bgImage="url('assets/images/homePage/acrostik.jpg')"
            bg="linear-gradient(to right, #1a365d, #1a365d)"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            p={10}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
        >
            <Box bg="transparent" p={6} borderRadius="lg">
                <VStack spacing={4} align="start">
                    {["Լավագույն լուծումներ", "Երախտապարտ վստահորդներ", "Գրագետ գործելաոճ", "Անհատական մոտեցումներ", "Լիարժեք նվիրվածություն"].map((word, index) => (
                        <Text
                            key={index}
                            fontSize="18px"
                            color="transparent"
                            style={{ WebkitTextStroke: "1.5px white" }}
                        >
                            <b style={{ fontSize: "38px", WebkitTextStroke: " 3.5px rgb(255 255 255)", color: "transparent", marginRight: "3px" }}>
                                {word[0]}
                            </b>
                            {word.slice(1)}
                        </Text>
                    ))}
                </VStack>

                <Divider my={6} borderColor="#2180c1" width="300px" />

                <VStack spacing={3} align="start">
                    {["Տարիների փորձ", "Իրավական գիտելիքներ", "Տարբերվող մոտեցումներ", "Անհրաժեշտ հմտություններ", "Նախանձելի արդյունքներ"].map((word, index) => (
                        <Text
                            key={index}
                            fontSize="18px"
                            color="transparent"
                            style={{ WebkitTextStroke: "1.5px white" }}
                        >
                            <b style={{ fontSize: "38px", WebkitTextStroke: "2.5px rgb(255 255 255)", color: "transparent", marginRight: "3px" }}>
                                {word[0]}
                            </b>
                            {word.slice(1)}
                        </Text>
                    ))}
                </VStack>
            </Box>
            <Box>
                <Image src={logo} alt="LegalTitan Logo" w="75%" h="75%" mr={3} />
                <Box marginTop="40px">
                    <Text color="white" fontSize="20px"  fontWeight="bold">
                        Իրավունքի նպատակը խաղաղության ապահովումն է, նրան, հասնելու միջոցոը՝ պայքարը:
                        <Text textAlign="center" fontSize="20px" fontWeight="bold">
                            Իրվինգ
                        </Text>
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Acrostic;
