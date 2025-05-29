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
        lastname: "",
        surname: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Սխալ տեղի ունեցավ հարցումը ուղարկելու ժամանակ");
            }


            toast({
                title: "Հաղորդագրությունն ուղարկված է",
                description: "Մենք ստացել ենք Ձեր հաղորդագրությունը և կապ կհաստատենք Ձեզ հետ սեղմ ժամկետում:",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
            });

            setFormData({
                name: "",
                lastname: "",
                surname: "",
                email: "",
                phone: "",
                message: "",
                caseType: "",
            });

        } catch (error) {
            toast({
                title: "Սխալ",
                description: "Չհաջողվեց ուղարկել հաղորդագրությունը։ Խնդրում ենք փորձել ավելի ուշ։",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        } finally {
            setIsSubmitting(false);
        }

    };

    const practiceAreas = [
        { name: "Կորպորատիվ իրավունք", icon: FaUserTie },
        { name: "Ընտանեկան իրավունք", icon: MdOutlineMiscellaneousServices },
        { name: "Հողային և գույքային իրավունք", icon: FaMapMarkerAlt }
    ];

    return (
        <Box>
            <Box
                position="relative"
                width="100%"
                height={{ base: "400px", md: "500px", lg: "600px" }}
                mb={{ base: 6, md: 10 }}
            >
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
                    px={{ base: 4, md: 8 }}
                >
                    <Box maxW={{ base: "90%", md: "2xl" }}>
                        <Heading
                            as="h1"
                            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                            color="white"
                            mb={{ base: 3, md: 4 }}
                        >
                            Legal Titan իրավաբանական ընկերություն
                        </Heading>
                        <Text
                            fontSize={{ base: "md", md: "xl" }}
                            color="white"
                            mb={{ base: 4, md: 6 }}
                        >
                        </Text>
                        <Button
                            colorScheme="blue"
                            size={{ base: "md", md: "lg" }}
                            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Կապ մեզ հետ
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Container maxW={{ base: "95%", lg: "container.lg" }} py={{ base: 6, md: 10 }} centerContent>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 8, md: 10 }}
                    width="100%"
                >
                    <Box flex={1} bg="white" p={{ base: 6, md: 8 }} borderRadius="lg" boxShadow="md" id="contact-form">
                        <Heading
                            as="h2"
                            fontSize={{ base: "xl", md: "2xl" }}
                            mb={{ base: 5, md: 6 }}
                            color="blue.700"
                        >
                            Կապ մեզ հետ
                        </Heading>

                        <form onSubmit={handleSubmit}>
                            <VStack spacing={{ base: 4, md: 5 }}>
                                <FormControl isRequired>
                                    <FormLabel fontSize={{ base: "sm", md: "md" }}>Անուն </FormLabel>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ձեր անունը"
                                        size={{ base: "md", md: "lg" }}
                                        focusBorderColor="blue.500"
                                    />
                                    <FormLabel fontSize={{ base: "sm", md: "md" }} mt={3}> Ազգանուն</FormLabel>
                                    <Input
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        placeholder="Ձեր ազգանունը"
                                        size={{ base: "md", md: "lg" }}
                                        focusBorderColor="blue.500"
                                    />
                                    <FormLabel fontSize={{ base: "sm", md: "md" }} mt={3}>Հայրանուն</FormLabel>
                                    <Input
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        placeholder="Ձեր հայրանունը"
                                        size={{ base: "md", md: "lg" }}
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel fontSize={{ base: "sm", md: "md" }}>Էլեկտրոնային հասցե</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Ձեր էլ. փոստի հասցեն"
                                        size={{ base: "md", md: "lg" }}
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize={{ base: "sm", md: "md" }}>Հեռախոսահամար</FormLabel>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Ձեր հեռախոսահամարը"
                                        size={{ base: "md", md: "lg" }}
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize={{ base: "sm", md: "md" }}>Հարցի տեսակը</FormLabel>
                                    <Input
                                        name="caseType"
                                        value={formData.caseType}
                                        onChange={handleChange}
                                        placeholder="Իրավական հարցի տեսակը"
                                        size={{ base: "md", md: "lg" }}
                                        focusBorderColor="blue.500"
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel fontSize={{ base: "sm", md: "md" }}>Ձեր հաղորդագրությունը</FormLabel>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Նկարագրեք Ձեր հարցը..."
                                        size={{ base: "md", md: "lg" }}
                                        focusBorderColor="blue.500"
                                        rows={6}
                                    />
                                </FormControl>

                                <Button
                                    leftIcon={<FaEnvelope />}
                                    colorScheme="blue"
                                    size={{ base: "md", md: "lg" }}
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

                    <Box flex={1} bg="blue.50" p={{ base: 6, md: 8 }} borderRadius="lg">
                        <Heading
                            as="h2"
                            fontSize={{ base: "xl", md: "2xl" }}
                            mb={{ base: 5, md: 6 }}
                            color="blue.700"
                        >
                            Կոնտակտային տվյալներ
                        </Heading>

                        <VStack spacing={{ base: 5, md: 6 }} align="flex-start">
                            <Box>
                                <HStack spacing={{ base: 3, md: 4 }} mb={2}>
                                    <Icon as={FaMapMarkerAlt} color="blue.600" boxSize={{ base: 4, md: 5 }} />
                                    <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>Գրասենյակի հասցե</Text>
                                </HStack>
                                <Text pl={{ base: 7, md: 9 }} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                                    ՀՀ, ք. Երևան, Ավան, Մարշալ Բաբաջանյան 2-րդ նրբ./ընտանեկան այգու հարևանությամբ/ <br />
                                    Երևան
                                </Text>
                                <Button
                                    mt={2}
                                    size={{ base: "sm", md: "md" }}
                                    variant="link"
                                    colorScheme="blue"
                                    onClick={onMapOpen}
                                >
                                    Տեսնել քարտեզում
                                </Button>
                            </Box>

                            <Box>
                                <HStack spacing={{ base: 3, md: 4 }} mb={2}>
                                    <Icon as={FaPhone} color="blue.600" boxSize={{ base: 4, md: 5 }} />
                                    <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>Հեռախոսահամարներ</Text>
                                </HStack>
                                <Text pl={{ base: 7, md: 9 }} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                                    +374 77 531309<br/>
                                    +374 55 673001<br/>
                                    +374 43 134362
                                </Text>
                            </Box>

                            <Box>
                                <HStack spacing={{ base: 3, md: 4 }} mb={2}>
                                    <Icon as={FaEnvelope} color="blue.600" boxSize={{ base: 4, md: 5 }} />
                                    <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>Էլեկտրոնային հասցե</Text>
                                </HStack>
                                <Text pl={{ base: 7, md: 9 }} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                                    Titanlegal66@gmail.com<br />
                                </Text>
                            </Box>

                            <Box>
                                <HStack spacing={{ base: 3, md: 4 }} mb={2}>
                                    <Icon as={FaClock} color="blue.600" boxSize={{ base: 4, md: 5 }} />
                                    <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>Աշխատանքային օրեր</Text>
                                </HStack>
                                <Text pl={{ base: 7, md: 9 }} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                                    Երկուշաբթի - Ուրբաթ<br />
                                </Text>
                                <HStack spacing={{ base: 3, md: 4 }} mb={2} mt={{ base: 1, md: 2 }}>
                                    <Icon as={FaClock} color="blue.600" boxSize={{ base: 4, md: 5 }} />
                                    <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }}>Աշխատանքային ժամեր</Text>
                                </HStack>
                                <Text pl={{ base: 7, md: 9 }} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                                    09:00 - 18:00<br />
                                </Text>
                            </Box>

                            <Divider borderColor="gray.300" width="100%" />
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