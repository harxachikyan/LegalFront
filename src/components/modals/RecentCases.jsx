import {
    Box,
    Heading,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Badge,
    Fade,
    Text,
    Avatar,
    Flex,
    useColorModeValue
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const RecentCases = ({ cases, onCaseClick }) => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardBorderColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.300');

    return (
        <Box py={{ base: 6, md: 10 }} px={{ base: 4, sm: 6, md: 8, lg: 12 }}>
            <Heading
                as="h2"
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                mb={{ base: 8, md: 12 }}
                textAlign="center"
                position="relative"
            >
                Վերջին Գործերը
                <Box
                    as="span"
                    display="block"
                    width={{ base: "60px", md: "80px" }}
                    height="4px"
                    bg="blue.500"
                    mx="auto"
                    mt={{ base: 2, md: 4 }}
                    borderRadius="full"
                />
            </Heading>

            <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 6, md: 8 }}
            >
                {cases.map((caseItem) => (
                    <Fade in={true} key={caseItem.id}>
                        <Card
                            border="1px solid"
                            borderColor={cardBorderColor}
                            bg={cardBg}
                            borderRadius="xl"
                            overflow="hidden"
                            boxShadow="md"
                            height="100%"
                            display="flex"
                            flexDirection="column"
                            _hover={{
                                transform: 'translateY(-5px)',
                                boxShadow: 'xl',
                                transition: 'all 0.3s ease'
                            }}
                            transition="all 0.2s"
                        >
                            <CardHeader pb={{ base: 2, md: 0 }}>
                                <Heading
                                    size={{ base: "md", lg: "lg" }}
                                    minHeight={{ base: "60px", md: "80px" }}
                                    lineHeight="tight"
                                >
                                    {caseItem.title}
                                </Heading>
                                <Badge
                                    colorScheme="blue"
                                    mt={{ base: 2, md: 3 }}
                                    px={{ base: 2.5, md: 3 }}
                                    py={{ base: 0.5, md: 1 }}
                                    borderRadius="full"
                                    fontSize={{ base: "xs", md: "sm" }}
                                >
                                    {caseItem.date}
                                </Badge>
                            </CardHeader>
                            <CardBody flex="1" py={{ base: 3, md: 4 }}>
                                <Text noOfLines={4} color={textColor} fontSize={{ base: "sm", md: "md" }}>
                                    {caseItem.description}
                                </Text>
                            </CardBody>
                            <CardFooter pt={{ base: 0, md: 0 }}>
                                <Flex justify="center" width="100%">
                                    <Button
                                        colorScheme="blue"
                                        size={{ base: "md", md: "lg" }}
                                        borderRadius="full"
                                        px={{ base: 6, md: 8 }}
                                        onClick={() => onCaseClick(caseItem)}
                                        _hover={{
                                            transform: 'scale(1.05)',
                                            boxShadow: 'md'
                                        }}
                                    >
                                        Մանրամասներ
                                    </Button>
                                </Flex>
                            </CardFooter>
                        </Card>
                    </Fade>
                ))}
            </SimpleGrid>
        </Box>
    );
};

RecentCases.propTypes = {
    cases: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    onCaseClick: PropTypes.func.isRequired,
};

export default RecentCases;