import {
    Box, Heading, Text, Button, Container,
    Flex, Grid, Icon, Stack, useColorModeValue,
    ScaleFade, Fade, SlideFade, Badge, List, ListItem,
    ListIcon, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, useDisclosure
} from "@chakra-ui/react";
import { FaBalanceScale, FaUserTie, FaHandshake, FaFileContract, FaBuilding, FaLandmark, FaHome } from "react-icons/fa";
import { GiFamilyHouse, GiMoneyStack } from "react-icons/gi";
import { motion } from "framer-motion";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import {useState} from "react";

const MotionBox = motion(Box);

const ServicesPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const serviceCategories = [
        {
            title: "Իրավաբանական խորհրդատվություն",
            icon: FaBalanceScale,
            color: "blue",
            services: [
                "1.Բանավոր Իրավաբանական խորհրդատվության տրամադրում,",
                "2.Գրավոր Իրավաբանական խորհրդատվության տրամադրում:"
            ]
        },
        {
            title: "Կորպորատիվ իրավունք",
            icon: FaBuilding,
            color: "teal",
            services: [
                "Իրավաբանական անձանց հիմնադրում, վերակազմակերպում և լուծարում (ներառյալ օտարերկրյա իրավաբանական անձինք),",
                "Իրավաբանական անձանց կորպորատիվ սպասարկում:"
            ]
        },


        {
            title: "Պայմանագրային իրավունք",
            icon: FaFileContract,
            color: "black",
            services: [
                "1. Բանակցությունների վարում (նաև օտարերկրյա կազմակերպությունների հետ),",
                "2. Պայմանագրերի կազմում,",
                "3. Պայմանագրերի վավերացման գործընթացի կազմակերպում:"

            ]
        },
        {
            title: "Վարչական իրավունք",
            icon: FaLandmark,
            color: "blue",
            services: [
                "Վարչական ակտերի բողոքարկում (տուգանքներ, տույժեր և այլն),",
                "Վարչական մարմինների գործողությունների և անգործությունների բողոքարկում:"
            ]
        },
        {
            title: "Սնանկություն",
            icon: FaHandshake,
            color: "teal",
            services: [
                "1.Կամավոր սնանկության դիմումների կազմում, ",
                "2.Հարկադրված սնանկության դիմումներ կազմում,",
                "3.Ներկայացուցչություն սնանկության վարույթում:",
            ]
        },
        {
            title: "Աշխատանքային",
            icon: MdOutlineRealEstateAgent,
            color: "black",
            services: [
                "1.Մինչդատական ներկայացուցչություն աշխատանքային իրավահարաբերություններում  ,",
                "2.Դատական ներկայացուցչություն աշխատանքային իրավահարաբերություններում :"
            ]
        },
        {
            title: "Գնումներ",
            icon: FaBalanceScale,
            color: "blue",
            services: [
                "Ներկայացուցչություն գնումների հետ կապված վեճերով:"
            ]
        },
        {
            title: "Ապահովագրություն",
            icon: FaHandshake,
            color: "teal",
            services: [
                "Ապահովագրական հարաբերություններ:"
            ]
        },
        {
            title: "Կատարողական վարույթ",
            icon: GiMoneyStack,
            color: "black",
            services: [
                "Կատարողական վարույթի սպասարկում:"
            ]
        },
        {
            title: "Արբիտրաժային վարույթ",
            icon: FaBalanceScale,
            color: "blue",
            services: [
                "Ներկայացուցչություն արբիտրաժային վարույթում:"
            ]
        },
        {
            title: "Կառուցապատում",
            icon: MdOutlineRealEstateAgent,
            color: "teal",
            services: [
                "Կառուցապատման հարաբերություններ:"
            ]
        },
        {
            title: "Դատական ներկայացուցչություն",
            icon: FaUserTie,
            color: "black",
            services: [
                "Ներկայացուցչություն սեփականության իրավունքի պաշտպանության գործերով,",
                "Ներկայացուցչություն հողային իրավունքի պաշտպանության գործերով,",
                "Ներկայացուցչություն մտավոր սեփականության իրավունքի պաշտպանության գործերով,",
                "Ներկայացուցչություն ընտանեկան իրավունքի պաշտպանության գործերով,",
                "Ներկայացուցչություն ժառանգության իրավունքի պաշտպանության գործերով,",
                "Ներկայացուցչություն բոլոր տեսակի քաղաքացիական, վարչական և սնանկության գործերով :"
            ]
        },

    ];

    const cardBg = useColorModeValue("white", "gray.800");
    const cardHoverBg = useColorModeValue("gray.50", "gray.700");

    const handleCategoryClick = (category) => {
        if (category.services.length > 3) {
            setSelectedCategory(category);
            onOpen();
        }
    };

    return (
        <Box>

            <Box
                position="relative"
                height="700px"
                bgImage="url('/assets/images/services_back.jpg')"
                bgSize="cover"
                bgPosition="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                textAlign="center"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(0, 0, 0, 0.6)"
                />
                <Container maxW="container.lg" position="relative" zIndex={1}>
                    <SlideFade in={true} offsetY={20}>
                        <Heading as="h1" size="2xl" mb={4} fontStyle="italic">
                            Պրոֆեսիոնալ Իրավաբանական և փաստաբանական ծառայություններ
                        </Heading>

                        <Button
                            colorScheme="blue"
                            size="lg"
                            onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Դիտել ծառայությունները
                        </Button>
                    </SlideFade>
                </Container>
            </Box>


            <Container maxW="container.lg" py={16} id="services-section">
                <Box textAlign="center" mb={12}>
                    <Badge colorScheme="blue" fontSize="lg" px={4} py={1} borderRadius="full" mb={4}>
                         Ծառայություններ
                    </Badge>
                    {/*<Heading as="h2" size="xl" mb={4}>*/}
                    {/*    Իրավաբանական աջակցության ոլորտներ*/}
                    {/*</Heading>*/}
                    {/*<Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">*/}
                    {/*    Մենք ապահովում ենք բազմաբնույթ իրավաբանական ծառայություններ՝ հաճախորդների բոլոր պահանջմունքները բավարարելու համար*/}
                    {/*</Text>*/}
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={6}
                >
                    {serviceCategories.map((category, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <ScaleFade in={true} delay={index * 0.1}>
                                <Box
                                    bg={cardBg}
                                    p={6}
                                    borderRadius="lg"
                                    boxShadow="md"
                                    height="100%"
                                    minHeight="350px" // Set a fixed minimum height
                                    display="flex"
                                    flexDirection="column"
                                    borderLeft="4px solid"
                                    borderColor={`${category.color}.500`}
                                    _hover={{
                                        boxShadow: "xl",
                                        bg: cardHoverBg,
                                        transform: "translateY(-5px)",
                                        transition: "all 0.3s ease"
                                    }}
                                    onClick={() => handleCategoryClick(category)}
                                    cursor="pointer"
                                    position="relative" // For absolute positioning of button
                                >
                                    <Flex align="center" mb={4}>
                                        <Icon
                                            as={category.icon}
                                            boxSize={8}
                                            color={`${category.color}.500`}
                                            mr={3}
                                        />
                                        <Heading as="h3" size="md" color={`${category.color}.600`}>
                                            {category.title}
                                        </Heading>
                                    </Flex>

                                    <Box flex="1" overflow="hidden" mb={4}>
                                        <List spacing={2}>
                                            {category.services.slice(0, 3).map((service, i) => (
                                                <ListItem key={i} display="flex" alignItems="flex-start">
                                                    <ListIcon
                                                        as={FaBalanceScale}
                                                        color={`${category.color}.400`}
                                                        mt={1}
                                                    />
                                                    <Text noOfLines={2}>{service}</Text>
                                                </ListItem>
                                            ))}
                                        </List>

                                        {category.services.length > 3 && (
                                            <Text mt={2} color={`${category.color}.500`} fontWeight="medium">
                                                + {category.services.length - 3} այլ ծառայություններ...
                                            </Text>
                                        )}
                                    </Box>
                                    {category.services.length > 3 && (

                                        <Button
                                            mt="auto"
                                            size="sm"
                                            variant="outline"
                                            colorScheme={category.color}
                                            alignSelf="flex-start"
                                        >
                                            Տեսնել ավելին
                                        </Button>
                                    )}


                                </Box>
                            </ScaleFade>
                        </MotionBox>
                    ))}
                </Grid>
            </Container>


            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex align="center">
                            <Icon
                                as={selectedCategory?.icon}
                                boxSize={6}
                                color={`${selectedCategory?.color}.500`}
                                mr={3}
                            />
                            {selectedCategory?.title}
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <List spacing={3}>
                            {selectedCategory?.services.map((service, index) => (
                                <ListItem key={index} display="flex" alignItems="flex-start" py={2}>
                                    <ListIcon
                                        as={FaBalanceScale}
                                        color={`${selectedCategory?.color}.400`}
                                        mt={1}
                                    />
                                    <Text>{service}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </ModalBody>
                </ModalContent>
            </Modal>


            <Box bg="blue.50" py={16}>
                <Container maxW="container.lg" textAlign="center">
                    <Fade in={true}>
                        <Heading as="h2" size="xl" mb={4}>
                            Ունե՞ք իրավական խնդիր
                        </Heading>
                        <Text fontSize="lg" mb={8} maxW="2xl" mx="auto">
                            Կապ հաստատեք մեզ հետ և մենք կլուծենք այն:
                        </Text>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            leftIcon={<FaHandshake />}
                            as="a"
                            href="/contact"
                        >
                            Կապ մեզ հետ
                        </Button>
                    </Fade>
                </Container>
            </Box>
        </Box>
    );
};

export default ServicesPage;