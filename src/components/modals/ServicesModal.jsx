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
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="blue.700">Մեր Իրավաբանական Ծառայությունները</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4} align="stretch">
                        {services.map((service, index) => (
                            <Box key={index} p={3} borderBottomWidth="1px" borderColor="gray.100">
                                <HStack>
                                    <FaBalanceScale color="#3182ce" />
                                    <Text>{service}</Text>
                                </HStack>
                            </Box>
                        ))}
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Փակել
                    </Button>
                    <Button variant="outline" onClick={() => {
                        onClose();
                        setFormData(prev => ({ ...prev, caseType: "Ընդհանուր հարցում" }));
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Կապնվել ծառայությունների վերաբերյալ
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ServicesModal;