import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Heading,
    Badge,
    Box,
    Text,
    Stack,
    Divider,
    useColorModeValue, // KEPT AS IS
    Flex,
    Avatar // Avatar is not used in this component, but kept if it's meant for future use.
} from '@chakra-ui/react';

const CaseModal = ({ isOpen, onClose, caseData }) => {
    const modalBg = useColorModeValue('white', 'gray.800');
    const accentColor = useColorModeValue('blue.500', 'blue.300');

    if (!caseData) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", sm: "md", md: "xl" }}
            isCentered
            motionPreset="slideInBottom"
        >
            <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
            <ModalContent
                borderRadius={{ base: "none", sm: "2xl" }}
                overflow="hidden"
                bg={modalBg}
                maxW={{ base: '100%', sm: '95%', md: '800px' }}
                minH={{ base: "100vh", sm: "auto" }}
            >
                <ModalHeader pb={{ base: 2, md: 0 }}>
                    <Heading size={{ base: "md", md: "lg", lg: "xl" }} mb={{ base: 1, md: 2 }}>
                        {caseData.title}
                    </Heading>
                    <Badge
                        colorScheme="blue"
                        px={{ base: 2, md: 3 }}
                        py={{ base: 0.5, md: 1 }}
                        borderRadius="full"
                        fontSize={{ base: "xs", md: "sm" }}
                    >
                        {caseData.date}
                    </Badge>
                    <Divider my={{ base: 2, md: 4 }} borderColor={accentColor} opacity="0.5" />
                </ModalHeader>
                <ModalCloseButton
                    size={{ base: "md", md: "lg" }}
                    borderRadius="full"
                    top={{ base: 3, md: 4 }}
                    right={{ base: 3, md: 4 }}
                />
                <ModalBody py={{ base: 2, md: 4 }}>
                    <Stack spacing={4}>
                        <Text
                            whiteSpace="pre-line"
                            lineHeight="tall"
                            fontSize={{ base: "sm", md: "md", lg: "lg" }}
                            px={{ base: 2, md: 0 }}
                        >
                            {caseData.description}
                        </Text>
                    </Stack>
                </ModalBody>
                <ModalFooter pt={{ base: 2, md: 4 }}>
                    <Flex justify="center" width="100%">
                        <Button
                            colorScheme="blue"
                            size={{ base: "md", md: "lg" }}
                            borderRadius="full"
                            px={{ base: 8, md: 10 }}
                            onClick={onClose}
                            _hover={{
                                transform: 'scale(1.05)',
                                boxShadow: 'md'
                            }}
                        >
                            Փակել
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CaseModal;