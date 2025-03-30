import React, { useState } from "react";
import {
    Box, Heading, Text, Input, Textarea, Button, VStack,
    FormControl, FormLabel, Container, useToast, Flex,
    Icon, Divider, HStack, Image, useDisclosure
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUserTie } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import ProgressStats from "../../components/modals/ProgressStats";
import ServicesModal from "../../components/modals/ServicesModal";
import MapModal from "../../components/modals/MapModal";

const ConnectPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        caseType: ""
    });

    const toast = useToast();
    const { isOpen: isServicesOpen, onOpen: onServicesOpen, onClose: onServicesClose } = useDisclosure();
    const { isOpen: isMapOpen, onOpen: onMapOpen, onClose: onMapClose } = useDisclosure();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Հաղորդագրությունն ուղարկված է",
                description: "Մենք ստացել ենք Ձեր հաղորդագրությունը և կապ կհաստատենք կարճ ժամանակում:",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                caseType: ""
            });
        }, 2000);
    };

    const practiceAreas = [
        { name: "Կորպորատիվ իրավունք", icon: FaUserTie },
        { name: "Ընտանեկան իրավունք", icon: MdOutlineMiscellaneousServices },
        { name: "Հողային և գույքային իրավունք", icon: FaMapMarkerAlt }
    ];

    return (
        <Box>
            <Box position="relative" width="100%" height="600px" mb={10}>
                <Image
                    src="/assets/images/contact-wrapper.jpg"
                    alt="Law Firm Banner"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    opacity="0.8"
                />
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.5)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    px={4}
                >
                    <Box maxW="2xl">
                        <Heading as="h1" size="2xl" color="white" mb={4} fontStyle="italic">
                            LegalTitan իրավաբանական ընկերություն
                        </Heading>
                        <Text fontSize="xl" color="white" mb={6} fontStyle="italic">
                            Մասնագիտական իրավաբանական ծառայություններ բարձր որակով:
                            Մենք ապահովում ենք մեր հաճախորդների իրավական անվտանգությունը 5 տարվա փորձով:
                        </Text>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Կապ մեզ հետ
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Container maxW="container.lg" py={10} centerContent>
                <ProgressStats />

                <Flex direction={{ base: "column", md: "row" }} gap={10} width="100%">
                    <Box flex={1} bg="white" p={8} borderRadius="lg" boxShadow="md" id="contact-form">
                        <Heading as="h2" size="lg" mb={6} color="blue.700">
                            Կապ մեզ հետ
                        </Heading>

                        <form onSubmit={handleSubmit}>
                            <VStack spacing={5}>
                                <FormControl isRequired>
                                    <FormLabel>Անուն Ազգանուն</FormLabel>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ձեր անունը և ազգանունը"
                                        size="lg"
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Էլեկտրոնային հասցե</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Ձեր էլ. փոստի հասցեն"
                                        size="lg"
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Հեռախոսահամար</FormLabel>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Ձեր հեռախոսահամարը"
                                        size="lg"
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Հարցի տեսակը</FormLabel>
                                    <Input
                                        name="caseType"
                                        value={formData.caseType}
                                        onChange={handleChange}
                                        placeholder="Իրավական հարցի տեսակը"
                                        size="lg"
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Ձեր հաղորդագրությունը</FormLabel>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Նկարագրեք Ձեր հարցը..."
                                        size="lg"
                                        focusBorderColor="blue.500"
                                        rows={6}
                                    />
                                </FormControl>

                                <Button
                                    leftIcon={<FaEnvelope />}
                                    colorScheme="blue"
                                    size="lg"
                                    width="full"
                                    type="submit"
                                    isLoading={isSubmitting}
                                    loadingText="Ուղարկվում է..."
                                >
                                    Ուղարկել հաղորդագրություն
                                </Button>
                            </VStack>
                        </form>
                    </Box>

                    <Box flex={1} bg="blue.50" p={8} borderRadius="lg">
                        <Heading as="h2" size="lg" mb={6} color="blue.700">
                            Կոնտակտային տվյալներ
                        </Heading>

                        <VStack spacing={6} align="flex-start">
                            <Box>
                                <HStack spacing={4} mb={2}>
                                    <Icon as={FaMapMarkerAlt} color="blue.600" boxSize={5} />
                                    <Text fontWeight="semibold">Գրասենյակի հասցե</Text>
                                </HStack>
                                <Text pl={9} color="gray.600">
                                    4 Ավան-Առինջ 1-ին միկրոշրջան <br />
                                    Երևան
                                </Text>
                                <Button
                                    mt={2}
                                    size="sm"
                                    variant="link"
                                    colorScheme="blue"
                                    onClick={onMapOpen}
                                >
                                    Տեսնել քարտեզում
                                </Button>
                            </Box>

                            <Box>
                                <HStack spacing={4} mb={2}>
                                    <Icon as={FaPhone} color="blue.600" boxSize={5} />
                                    <Text fontWeight="semibold">Հեռախոսահամարներ</Text>
                                </HStack>
                                <Text pl={9} color="gray.600">
                                    Հիմնական՝ +374 77 531309<br />
                                    Հիմնական՝ +374 55 673001
                                </Text>
                            </Box>

                            <Box>
                                <HStack spacing={4} mb={2}>
                                    <Icon as={FaEnvelope} color="blue.600" boxSize={5} />
                                    <Text fontWeight="semibold">Էլեկտրոնային հասցե</Text>
                                </HStack>
                                <Text pl={9} color="gray.600">
                                    Titanlegal66@gmail.com<br />
                                    contact@legaltitan.am
                                </Text>
                            </Box>

                            <Box>
                                <HStack spacing={4} mb={2}>
                                    <Icon as={FaClock} color="blue.600" boxSize={5} />
                                    <Text fontWeight="semibold">Աշխատանքային ժամեր</Text>
                                </HStack>
                                <Text pl={9} color="gray.600">
                                    Երկուշաբթի - Ուրբաթ՝ 09:00 - 18:00<br />
                                    Կիրակի՝ Փակ
                                </Text>
                            </Box>

                            <Divider borderColor="gray.300" />

                            <Box>
                                <Heading as="h3" size="md" mb={4} color="blue.700">
                                    Ծառայություններ
                                </Heading>
                                <VStack spacing={3} align="flex-start">
                                    {practiceAreas.map((area, index) => (
                                        <HStack key={index} spacing={3}>
                                            <Icon as={area.icon} color="blue.600" />
                                            <Text>{area.name}</Text>
                                        </HStack>
                                    ))}
                                </VStack>
                                <Button
                                    mt={4}
                                    variant="outline"
                                    colorScheme="blue"
                                    onClick={onServicesOpen}
                                >
                                    Դիտել բոլոր ծառայությունները
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </Flex>

                <ServicesModal
                    isOpen={isServicesOpen}
                    onClose={onServicesClose}
                    setFormData={setFormData}
                />

                <MapModal
                    isOpen={isMapOpen}
                    onClose={onMapClose}
                />
            </Container>
        </Box>
    );
};

export default ConnectPage;