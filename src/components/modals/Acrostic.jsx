import { Box, VStack, Text, Divider } from "@chakra-ui/react";

const Acrostic = () => {
    return (
        <Box
            bgImage="url('assets/images/homePage/acrostik.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            p={10}
            borderRadius="lg"
        >
            <Box bg="transparent" p={6} borderRadius="lg">
                <VStack spacing={4} align="start">
                    {["Լավագույն լուծումներ", "Երախտապարտ վստահորդներ", "Գրագետ գործելաոճ", "Անհատական մոտեցումներ", "Լիարժեք նվիրվածություն"].map((word, index) => (
                        <Text
                            key={index}
                            fontSize="2xl"
                            color="transparent"
                            style={{ WebkitTextStroke: "1.5px rgb(80 196 255 / 55%)" }}
                        >
                            <b style={{ fontSize: "34px", WebkitTextStroke: "3.5px #2180c1", color: "transparent", marginRight: "3px" }}>
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
                            fontSize="2xl"
                            color="transparent"
                            style={{ WebkitTextStroke: "1.5px rgb(80 196 255 / 55%)" }}
                        >
                            <b style={{ fontSize: "34px", WebkitTextStroke: "2.5px #2180c1", color: "transparent", marginRight: "3px" }}>
                                {word[0]}
                            </b>
                            {word.slice(1)}
                        </Text>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
};

export default Acrostic;
