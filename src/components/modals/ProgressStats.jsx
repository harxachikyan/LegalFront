import { Box, Heading, Flex, Text, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ProgressStats = () => {
    const successStats = [
        { label: "Գործերի հաջողություն", value: 95 },
        { label: "Հաճախորդների գոհունակություն", value: 98 },
        { label: "Տարիների փորձ", value: 15 }
    ];

    const [progressValues, setProgressValues] = useState(successStats.map(() => 0));

    useEffect(() => {
        setProgressValues(successStats.map(() => 0));

        const animationDuration = 1500;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);

            setProgressValues(
                successStats.map(stat => Math.floor(stat.value * progress))
            );

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animate);
    }, []);

    return (
        <Box width="100%" mb={{ base: 8, md: 16 }} px={{ base: 4, md: 0 }}>
            <Heading
                as="h2"
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                mb={{ base: 6, md: 8 }}
                textAlign="center"
                color="blue.800"
            >
                Մեր Հաջողությունները
            </Heading>
            <Flex
                justify="center"
                gap={{ base: 8, sm: 10, md: 12 }}
                flexWrap="wrap"
                direction={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "flex-start" }}
            >
                {successStats.map((stat, index) => (
                    <Box
                        key={index}
                        textAlign="center"
                        width={{ base: "100%", sm: "auto" }}
                        maxW={{ base: "200px", sm: "200px" }}
                        mb={{ base: 4, sm: 0 }}
                    >
                        <CircularProgress
                            value={progressValues[index]}
                            size={{ base: "150px", sm: "180px", md: "200px" }}
                            thickness={{ base: "6px", md: "8px" }}
                            color="blue.500"
                            capIsRound
                            mb={{ base: 2, md: 3 }}
                        >
                            <CircularProgressLabel fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="bold">
                                {stat.label === "Տարիների փորձ" ? `${progressValues[index]}+` : `${progressValues[index]}%`}
                            </CircularProgressLabel>
                        </CircularProgress>
                        <Text
                            fontWeight="semibold"
                            mt={{ base: 1, md: 2 }}
                            fontSize={{ base: "sm", md: "md", lg: "lg" }}
                        >
                            {stat.label}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ProgressStats;