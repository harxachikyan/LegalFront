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
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Մեր գրասենյակի վայրը</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Box h="500px" w="100%">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600.6574710488275!2d44.57120011336209!3d40.22210475029602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa30024ef7dbd%3A0xbaf55a8cbd1faadd!2z1LHVvtWh1bYg1LHVvNWr1bbVuyAxLzE0!5e1!3m2!1shy!2sam!4v1743327009818!5m2!1shy!2sam"
                            allowFullScreen=""
                            width="100%"
                            style={{border: 0}}
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default MapModal;