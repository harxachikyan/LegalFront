import React, { useState } from "react";
import {
    Box,
    Text,
    Grid,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Flex,
    Spinner,
    Image,
    Stack,
    Icon,
    Divider,
    Badge,
    Container
} from "@chakra-ui/react";
import { DownloadIcon, InfoIcon, StarIcon } from "@chakra-ui/icons";

const DocumentsPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentPdf, setCurrentPdf] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const documents = [
        {
            title: "ՀՀ Սահմանադրություն",
            file: "ՀՀ Սահմանադրություն.pdf"
        },
        {
            title: "ՀՀ քաղաքացիական օրենսգիրք",
            file: "ՀՀ քաղաքացիական օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Քաղաքացիական դատավարության օրենսգիրք",
            file: "ՀՀ քաղաքացիական դատավարության օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Քրեական օրենսգիրք",
            file: "ՀՀ Քրեական օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Քրեական դատավարության օրենսգիրք",
            file: "ՀՀ քրեական դատավարության օրենսգիրք.pdf"
        },
        {
            title: "Վարչական իրավախախումների վերաբերյալ ՀՀ օրենսգիրք",
            file: "Վարչական իրավախախումների վերաբերյալ ՀՀ օրենսգիրք.pdf"
        },
        {
            title: "Վարչարարության հիմունքների և վարչական վարույթի մասին ՀՀ օրենք",
            file: "Վարչարարության հիմունքների և վարչական վարույթի մասին ՀՀ օրենք.pdf"
        },
        {
            title: "ՀՀ Վարչական դատավարության օրենսգիրք",
            file: "ՀՀ Վարչական դատավարության օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ աշխատանքային օրենսգիրք",
            file: "ՀՀ աշխատանքային օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Անտառային օրենսգիրք",
            file: "ՀՀ Անտառային օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Հողային օրենսգիրք",
            file: "ՀՀ Հողային օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Գնումների մասին օրենք",
            file: "ՀՀ Գնումների մասին օրենք.pdf"
        },
        {
            title: "ՀՀ Ընդերքի մասին օրենսգիրք",
            file: "ՀՀ Ընդերքի մասին օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Ընտանեկան օրենսգիրք",
            file: "ՀՀ Ընտանեկան օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ Սնանկության մասին օրենք",
            file: "ՀՀ Սնանկության մասին օրենք.pdf"
        },

        {
            title: "ՀՀ Ջրային օրենսգիրք",
            file: "Ջրային Օրենսգիրք.pdf"
        },
        {
            title: "ՀՀ օրենքը բաժնետիրական ընկերությունների մասին",
            file: "ՀՀ օրենքը բաժնետիրական ընկերությունների մասին.pdf"
        },
        {
            title: "ՀՀ օրենքը սահմանափակ պատասխանատվությամբ ընկերություների մասին",
            file: "ՀՀ օրենքը սահմանափակ պատասխանատվությամբ ընկերություների մասին.pdf"
        },
    ];

    const openPdf = (filename) => {
        setIsLoading(true);
        setCurrentPdf(`/documents/${filename}`);
        onOpen();
    };

    return (
        <Box>
            {/* Hero Section */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                bgGradient="linear-gradient(to right, #183968, #020f1f, #000205)"
                color="white"

                py={{ base: 6, md: 8, lg: 10 }}
                px={{ base: 4, md: 6, lg: 8 }}
                borderRadius="lg"
                mb={{ base: 6, md: 8 }}
                boxShadow="xl"
                maxW="1400px"
                mx="auto"
                marginTop={{ base: "30px", md: "50px" }}
            >
                <Box flex={1} textAlign={{ base: "center", md: "left" }} p={{ base: 2, md: 4 }}>
                    <Text
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                        fontWeight="bold"
                        mb={{ base: 2, md: 3 }}
                    >
                        Հայաստանի Հանրապետության Օրենսդրություն
                    </Text>
                    <Text
                        fontSize={{ base: "md", md: "lg" }} e
                        mb={{ base: 3, md: 4 }}
                    >
                        Բոլոր գործող օրենքներն ու նորմատիվ ակտերը մեկ տեղում
                    </Text>
                    <Stack
                        direction={{ base: "column", sm: "row" }}
                        spacing={{ base: 2, sm: 4 }}
                        justify={{ base: "center", md: "flex-start" }}
                    >
                        <Badge
                            colorScheme="green"
                            p={{ base: 1.5, md: 2 }}
                            borderRadius="md"
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            <Icon as={StarIcon} mr={1} /> Վերջին թարմացումը՝ 01.07.2023
                        </Badge>
                        <Badge
                            colorScheme="yellow"
                            p={{ base: 1.5, md: 2 }}
                            borderRadius="md"
                            fontSize={{ base: "sm", md: "md" }}
                        >
                            <Icon as={InfoIcon} mr={1} /> Պաշտոնական տեքստեր
                        </Badge>
                    </Stack>
                </Box>
                <Box
                    justifyContent="center"
                    height={{ base: "200px", sm: "250px", md: "300px", lg: "450px" }}
                    width={{ base: "100%", md: "auto" }}
                    py={{ base: 4, md: 0 }}
                    display="flex"
                    alignItems="center"
                >
                    <Image
                        src="/assets/images/document-page.jpg"
                        alt="Law Books"
                        maxH="100%"
                        objectFit="cover"
                        fallbackSrc="https://via.placeholder.com/300x200?text=Law+Books"
                        borderRadius="lg"
                        boxShadow="lg"
                    />
                </Box>
            </Flex>

            <Container maxW={{ base: "90%", md: "container.lg" }} py={{ base: 6, md: 8 }}>
                {/* Useful Information Section */}
                <Box bg="blue.50" p={{ base: 4, md: 6 }} borderRadius="lg" mb={{ base: 6, md: 8 }} boxShadow="md">
                    <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="bold"
                        mb={{ base: 3, md: 4 }}
                        color="blue.700"
                    >
                        Օգտակար տեղեկատվություն
                    </Text>
                    <Grid
                        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
                        gap={{ base: 4, md: 6 }}
                    >
                        <Box>
                            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Ինչպես օգտվել</Text>
                            <Text fontSize={{ base: "sm", md: "md" }}>Ընտրեք ցանկալի օրենսգիրքը և կարդացեք առցանց</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Ներբեռնում</Text>
                            <Text fontSize={{ base: "sm", md: "md" }}>Սեղմեք «Կարդալ» կոճակը փաստաթղթերը դիտելու համար</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Թարմացումներ</Text>
                            <Text fontSize={{ base: "sm", md: "md" }}>Օրենսգրքերը պարբերաբար թարմացվում են</Text>
                        </Box>
                    </Grid>
                </Box>


                <Box p={{ base: 0, md: 4 }}>
                    <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="bold"
                        mb={{ base: 4, md: 6 }}
                        color="blue.700"
                        textAlign="center"
                    >
                        ՀՀ Օրենսդրություն
                    </Text>
                    <Divider mb={{ base: 6, md: 8 }} />

                    <Grid
                        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                        gap={{ base: 4, md: 6 }}
                    >
                        {documents.map((doc, index) => (
                            <Box
                                key={index}
                                p={{ base: 4, md: 6 }}
                                border="1px solid"
                                borderColor="gray.200"
                                borderRadius="lg"
                                boxShadow="md"
                                transition="all 0.3s ease"
                                _hover={{
                                    transform: "translateY(-5px)",
                                    boxShadow: "xl",
                                    borderColor: "blue.300"
                                }}
                            >
                                <Text
                                    fontSize={{ base: "md", md: "lg" }}
                                    fontWeight="semibold"
                                    mb={{ base: 3, md: 4 }}
                                >
                                    {doc.title}
                                </Text>
                                <Flex justify="space-between" alignItems="center">
                                    <Button
                                        onClick={() => openPdf(doc.file)}
                                        colorScheme="blue"
                                        variant="outline"
                                        size={{ base: "sm", md: "md" }}
                                    >
                                        Կարդալ․․․
                                    </Button>
                                </Flex>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* PDF Viewer Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Document Viewer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={0}>
                        <Box h={{ base: "calc(100vh - 80px)", md: "calc(100vh - 100px)" }} w="100%" position="relative">
                            {isLoading && (
                                <Flex position="absolute" inset={0} align="center" justify="center" bg="whiteAlpha.700" zIndex={1}>
                                    <Spinner size="xl" />
                                </Flex>
                            )}
                            <iframe
                                src={`${currentPdf}#toolbar=1&navpanes=0`}
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                                title="PDF Viewer"
                                onLoad={() => setIsLoading(false)}
                            />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default DocumentsPage;