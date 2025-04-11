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
    useColorModeValue,
    Flex,
    Avatar
} from '@chakra-ui/react';

const CaseModal = ({ isOpen, onClose, caseData }) => {
    const modalBg = useColorModeValue('white', 'gray.800');
    const accentColor = useColorModeValue('blue.500', 'blue.300');

    if (!caseData) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="xl"
            isCentered
            motionPreset="slideInBottom"
        >
            <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
            <ModalContent
                borderRadius="2xl"
                overflow="hidden"
                bg={modalBg}
                maxW={{ base: '95%', md: '800px' }}
            >
                <ModalHeader pb={0}>
                    <Heading size="lg" mb={2}>
                        {caseData.title}

                    </Heading>
                    <Badge
                        colorScheme="blue"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                    >
                        {caseData.date}


                    </Badge>
                    <Divider my={4} borderColor={accentColor} opacity="0.5" />

                </ModalHeader>
                <ModalCloseButton
                    size="lg"
                    borderRadius="full"
                    top={4}
                    right={4}
                />
                <ModalBody>
                    <Stack spacing={4}>
                        <Text
                            whiteSpace="pre-line"
                            lineHeight="tall"
                            fontSize="md"
                        >
                            {caseData.description}
                        </Text>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Flex justify="center" width="100%">
                        <Button
                            colorScheme="blue"
                            size="md"
                            borderRadius="full"
                            px={10}
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