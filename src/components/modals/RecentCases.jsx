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

const RecentCases = ({ cases, onCaseClick }) => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardBorderColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.300');

    return (
        <Box py={10} px={{ base: 4, md: 8, lg: 12 }}>
            <Heading as="h2" size="xl" mb={12} textAlign="center" position="relative">
                Վերջին Գործերը
                <Box
                    as="span"
                    display="block"
                    width="80px"
                    height="4px"
                    bg="blue.500"
                    mx="auto"
                    mt={4}
                    borderRadius="full"
                />
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
                            <CardHeader pb={0}>
                                <Heading size="md" minHeight="80px">

                                    {caseItem.title}

                                </Heading>
                                <Badge
                                    colorScheme="blue"
                                    mt={3}
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                    fontSize="sm"
                                >
                                    {caseItem.date}
                                </Badge>
                            </CardHeader>
                            <CardBody flex="1">
                                <Text noOfLines={4} color={textColor}>
                                    {caseItem.description}
                                </Text>
                            </CardBody>
                            <CardFooter pt={0}>
                                <Flex justify="center" width="100%">
                                    <Button
                                        colorScheme="blue"
                                        size="md"
                                        borderRadius="full"
                                        px={8}
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

export default RecentCases;