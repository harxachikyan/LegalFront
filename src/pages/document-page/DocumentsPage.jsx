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
    Badge
} from "@chakra-ui/react";
import { DownloadIcon, InfoIcon, StarIcon } from "@chakra-ui/icons";

const DocumentsPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentPdf, setCurrentPdf] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const documents = [
        {
            title: "ՀՀ Սահմանադրություն",
            file: "constitution.pdf"
        },
        {
            title: "ՀՀ Քաղաքացիական օրենսգիրք",
            file: "qax-orensgirq.pdf"
        },
        {
            title: "ՀՀ Քրեական օրենսգիրք",
            file: "criminal-code.pdf"
        },
        {
            title: "ՀՀ Քաղաքացիական դատավարության օրենսգիրք",
            file: "civil-procedure.pdf"
        },
        {
            title: "ՀՀ Քրեական դատավարության օրենսգիրք",
            file: "criminal-procedure.pdf"
        },
        {
            title: "Վարչական իրավախախտումների վերաբերյալ ՀՀ օրենսգիրք",
            file: "administrative-offenses.pdf"
        },
        {
            title: "ՀՀ Վարչական դատավարության օրենսգիրք",
            file: "administrative-procedure.pdf"
        },
        {
            title: "ՀՀ Աշխատանքային օրենսգիրք",
            file: "labor-code.pdf"
        },
        {
            title: "ՀՀ Հողային օրենսգիրք",
            file: "land-code.pdf"
        },
        {
            title: "ՀՀ Մաքսային օրենսգիրք",
            file: "customs-code.pdf"
        },
        {
            title: "Հարկերի մասին ՀՀ օրենք",
            file: "tax-law.pdf"
        },
        {
            title: "Փաստաբանության մասին ՀՀ օրենք",
            file: "advocacy-law.pdf"
        }
    ];

    const openPdf = (filename) => {
        setIsLoading(true);
        setCurrentPdf(`/documents/${filename}`);
        onOpen();
    };

    return (
        <Box maxW="1400px" mx="auto" marginTop="50px">
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                bgGradient="linear-gradient(to right, #183968, #020f1f, #000205)"
                color="white"
                paddingLeft="20px"
                borderRadius="lg"
                mb={8}
                boxShadow="xl"
            >
                <Box flex={1} textAlign={{ base: "center", md: "left" }} p={4}>
                    <Text fontSize="3xl" fontWeight="bold" mb={2}>
                        Հայաստանի Հանրապետության Օրենսդրություն
                    </Text>
                    <Text fontSize="lg" mb={4}>
                        Բոլոր գործող օրենքներն ու նորմատիվ ակտերը մեկ տեղում
                    </Text>
                    <Stack direction="row" spacing={4} justify={{ base: "center", md: "flex-start" }}>
                        <Badge colorScheme="green" p={2} borderRadius="md">
                            <Icon as={StarIcon} mr={1} /> Վերջին թարմացումը՝ 01.07.2023
                        </Badge>
                        <Badge colorScheme="yellow" p={2} borderRadius="md">
                            <Icon as={InfoIcon} mr={1} /> Պաշտոնական տեքստեր
                        </Badge>
                    </Stack>
                </Box>
                <Box  justifyContent="center" height="100%" >
                    <Image
                        src="/assets/images/document-page.jpg"
                        alt="Law Books"
                        maxH="450px"
                        height="100%"
                        objectFit="cover"
                        fallbackSrc="https://via.placeholder.com/300x200?text=Law+Books"
                    />
                </Box>
            </Flex>

            <Box bg="blue.50" p={6} borderRadius="lg" mb={8} boxShadow="md">
                <Text fontSize="xl" fontWeight="bold" mb={4} color="blue.700">
                    Օգտակար տեղեկատվություն
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    <Box>
                        <Text fontWeight="bold">Ինչպես օգտվել</Text>
                        <Text fontSize="sm">Ընտրեք ցանկալի օրենսգիրքը և կարդացեք առցանց</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">Ներբեռնում</Text>
                        <Text fontSize="sm">Սեղմեք «Կարդալ» կոճակը փաստաթղթերը դիտելու համար</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">Թարմացումներ</Text>
                        <Text fontSize="sm">Օրենսգրքերը պարբերաբար թարմացվում են</Text>
                    </Box>
                </Grid>
            </Box>

            <Box p={4}>
                <Text fontSize="2xl" fontWeight="bold" mb={6} color="blue.700" textAlign="center">
                    Գործող Օրենսգրքեր
                </Text>
                <Divider mb={8} />

                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
                    {documents.map((doc, index) => (
                        <Box
                            key={index}
                            p={6}
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
                            <Text fontSize="lg" fontWeight="semibold" mb={4}>
                                {doc.title}
                            </Text>
                            <Flex justify="space-between">
                                <Button
                                    onClick={() => openPdf(doc.file)}
                                    colorScheme="blue"
                                    variant="outline"
                                    size="sm"
                                >
                                    Կարդալ․․․
                                </Button>
                            </Flex>
                        </Box>
                    ))}
                </Grid>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Document Viewer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={0}>
                        <Box h="calc(100vh - 100px)" w="100%" position="relative">
                            {isLoading && (
                                <Flex position="absolute" inset={0} align="center" justify="center">
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