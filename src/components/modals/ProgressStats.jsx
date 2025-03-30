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
        // Reset animation when component mounts
        setProgressValues(successStats.map(() => 0));

        const animationDuration = 1500; // 1.5 seconds
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
        <Box width="100%" mb={16}>
            <Heading as="h2" size="xl" mb={8} textAlign="center" color="blue.800">
                Մեր Հաջողությունները
            </Heading>
            <Flex justify="center" gap={{ base: 6, md: 10 }} flexWrap="wrap">
                {successStats.map((stat, index) => (
                    <Box key={index} textAlign="center" width={{ base: "200px", md: "200px" }}>
                        <CircularProgress
                            value={progressValues[index]}
                            size="100%"
                            thickness="8px"
                            color="blue.500"
                            capIsRound
                            mb={3}
                        >
                            <CircularProgressLabel fontSize="xl" fontWeight="bold">
                                {progressValues[index]}%
                            </CircularProgressLabel>
                        </CircularProgress>
                        <Text fontWeight="semibold" mt={2} fontSize={{ base: "sm", md: "md" }}>
                            {stat.label}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ProgressStats;