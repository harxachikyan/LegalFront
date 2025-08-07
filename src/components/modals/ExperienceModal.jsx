import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Text
} from "@chakra-ui/react";


const infoByName = {
    "Արեն Անտոնյան": (
        <>
            <p><strong>2016–2022թ․թ․</strong> – սովորել է <u>ԵՊՀ Իրավագիտության ֆակուլտետում</u>։</p>
            <p><strong>2021-2023թ․թ․</strong> – աշխատել է <span style={{ color: "#2B6CB0" }}>«Վիրտուլեքս» ՍՊԸ</span>-ում՝ որպես իրավաբան։</p>
            <p><strong>2022-2023թ․թ․</strong> – սովորել է ՀՀ Փաստաբանական ակադեմիայում։</p>
            <p><strong>2023-2024թ․թ․</strong> – աշխատել է <span style={{ color: "#2B6CB0" }}>«Ասպեկտուս» ՍՊԸ</span>-ում՝ որպես իրավաբան։
            </p>
            <p>2023թ․-ից՝ աշխատում է <span style={{ color: "#2B6CB0" }}>«Երևան բժշկագիտական կենտրոն» ՓԲԸ-</span>ում՝ որպես իրավաբան։</p>
            <p>2024թ․-ից՝ համահիմնադիր-փաստաբան <span style={{ color: "#2B6CB0" }}> «Լեգալ Տիտան» ՍՊԸ</span>-ում։</p>

            <p><strong>Մասնագիտացում՝</strong></p>
            <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
                <li>Քաղաքացիական իրավունք</li>
                <li>Կորպորատիվ իրավունք</li>
                <li>Պայմանագրային իրավունք</li>
                <li>Վարչական իրավունք</li>
                <li>Սնանկություն</li>
                <li>Գնումների հետ կապված վեճեր</li>
            </ul>

            <p style={{ marginTop: "1em" }}>
                <strong style={{ textDecoration: "underline" }}>Փաստաբան է</strong> և հանդիսանում է ՀՀ Փաստաբանների պալատի անդամ։
            </p>
        </>
    ),

    "Աշոտ Գրիգորյան": (
        <>
            <p>2016-2022թ․թ․ – սովորել է <u>Երևանի պետական համալսարանի</u> իրավագիտության ֆակուլտետում։</p>
            <p>2022-2023թ․թ․ – սովորել է ՀՀ Փաստաբանական ակադեմիայում։</p>
            <p>2022-2023թ․թ․ – աշխատել է <span style={{ color: "#2B6CB0" }}>«Վիտուլեքս» ՍՊԸ</span>-ում՝ որպես իրավաբան։</p>
            <p>2023-2024թ․թ․ – աշխատել է <span style={{ color: "#2B6CB0" }}>«Ասպեկտուս» ՍՊԸ</span>-ում՝ որպես իրավաբան։</p>
            <p>2024թ․-ից՝ համահիմնադիր-տնօրեն<span style={{color: "#2B6CB0"}}> «Լեգալ Տիտան» ՍՊԸ</span>-ում։</p>

            <p><strong>Մասնագիտացում՝</strong></p>
            <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
                <li>Վարչական իրավունք</li>
                <li>Քաղաքացիական իրավունք</li>
                <li>Մտավոր սեփականության իրավունք</li>
                <li>Աշխատանքային իրավունք</li>
                <li>Ֆինանսական իրավունք</li>
                <li>Ապահովագրական հարաբերություններ</li>
            </ul>

            <p style={{ marginTop: "1em" }}>
                <strong style={{ textDecoration: "underline" }}>Փաստաբան է</strong> և հանդիսանում է ՀՀ Փաստաբանների պալատի անդամ։
            </p>
        </>
    )
};
const ExperienceModal = ({isOpen,onClose,member}) =>{
    if(!member) return null;
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{member.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {infoByName[member.name] || <Text>Մանրամասն տեղեկություն։</Text>}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Փակել</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default ExperienceModal;