import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    VStack,
    Box,
    HStack,
    Text
} from "@chakra-ui/react";
import { FaBalanceScale } from "react-icons/fa";

const ServicesModal = ({ isOpen, onClose, setFormData }) => {
    const services = [
        "Կորպորատիվ իրավունք և բիզնեսի կազմակերպում",
        "Պայմանագրերի մշակում և վերանայում",
        "Հողային և գույքային իրավունք",
        "Ընտանեկան իրավունք և ամուսնալուծություն",
        "Պետական գրանցումներ և լիցենզավորում",
        "Հարկային իրավունք և խորհրդատվություն",
        "Աշխատանքային իրավունք",
        "Միջազգային իրավունք"
    ];

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", sm: "lg", md: "xl" }}
            isCentered
            scrollBehavior="inside"
        >
            <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
            <ModalContent
                borderRadius={{ base: "none", sm: "md" }}
                overflow="hidden"
                maxW={{ base: "100%", sm: "90%", md: "xl" }}
                minH={{ base: "100vh", sm: "auto" }}
            >
                <ModalHeader
                    color="blue.700"
                    fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                    pb={{ base: 2, md: 4 }}
                >
                    Մեր Իրավաբանական Ծառայությունները
                </ModalHeader>
                <ModalCloseButton
                    size={{ base: "md", md: "lg" }}
                    top={{ base: 3, md: 4 }}
                    right={{ base: 3, md: 4 }}
                />
                <ModalBody py={{ base: 2, md: 4 }} px={{ base: 2, md: 6 }}>
                    <VStack spacing={{ base: 3, md: 4 }} align="stretch">
                        {services.map((service, index) => (
                            <Box
                                key={index}
                                p={{ base: 2, md: 3 }}
                                borderBottomWidth="1px"
                                borderColor="gray.100"
                                _last={{ borderBottomWidth: "0px" }}
                            >
                                <HStack spacing={{ base: 3, md: 4 }}>
                                    <FaBalanceScale color="#3182ce" size={20} />
                                    <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                                        {service}
                                    </Text>
                                </HStack>
                            </Box>
                        ))}
                    </VStack>
                </ModalBody>
                <ModalFooter
                    pt={{ base: 3, md: 4 }}
                    flexDirection={{ base: "column", sm: "row" }}
                    gap={{ base: 3, sm: 0 }}
                >
                    <Button
                        colorScheme="blue"
                        mr={{ base: 0, sm: 3 }}
                        mb={{ base: 3, sm: 0 }}
                        onClick={onClose}
                        size={{ base: "md", md: "lg" }}
                        width={{ base: "100%", sm: "auto" }}
                    >
                        Փակել
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => {
                            onClose();
                            setFormData(prev => ({ ...prev, caseType: "Ընդհանուր հարցում" }));
                            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        size={{ base: "md", md: "lg" }}
                        width={{ base: "100%", sm: "auto" }}
                    >
                        Կապնվել ծառայությունների վերաբերյալ
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ServicesModal;