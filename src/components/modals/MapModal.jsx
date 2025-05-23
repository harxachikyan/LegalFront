import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Box
} from "@chakra-ui/react";

const MapModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", sm: "lg", md: "xl" }}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                borderRadius={{ base: "none", sm: "md" }}
                overflow="hidden"
                maxW={{ base: "100%", sm: "90%", md: "xl" }}
                minH={{ base: "100vh", sm: "auto" }}
            >
                <ModalHeader
                    fontSize={{ base: "lg", md: "xl" }}
                    pb={{ base: 2, md: 4 }}
                >
                    Մեր գրասենյակի վայրը
                </ModalHeader>
                <ModalCloseButton
                    size={{ base: "md", md: "lg" }}
                    top={{ base: 2, md: 3 }}
                    right={{ base: 2, md: 3 }}
                />
                <ModalBody p={{ base: 0, sm: 2 }}>
                    <Box
                        h={{ base: "calc(100vh - 120px)", sm: "400px", md: "500px" }}
                        w="100%"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.886071477717!2d44.5126831!3d40.1873155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcb72d9b6261%3A0x7d06e3e56218e24c!2sMarshall%20Babajanyan%202nd%20Ln%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1716447814421!5m2!1sen!2sus"
                            allowFullScreen=""
                            width="100%"
                            style={{ border: 0 }}
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default MapModal;