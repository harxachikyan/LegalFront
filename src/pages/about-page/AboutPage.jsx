import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Flex,
    Image,
    Divider,
    SimpleGrid,
    Avatar,
    useBreakpointValue,
    Button,
    Icon,

} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { FaBalanceScale, FaGavel, FaHandshake, FaUserTie } from "react-icons/fa";
import { GiScales } from "react-icons/gi";
import ArenImg from "../../assets/images/Aren.png";
import AshotImg from "../../assets/images/Ashot.png";
import officePhoto from "../../assets/images/office.jpeg";

const MotionBox = motion(Box);

const AboutPage = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const stats = [
        { value: "5+", label: "Տարիների փորձ" },
        { value: "100+", label: "Դատական գործեր" },
        { value: "98%", label: "Հաջողված գործեր" },
        { value: "50+", label: "Կլիենտներ" },
    ];

    const values = [
        {
            icon: FaBalanceScale,
            title: "Արդարադատություն",
            description: "Մենք հետևում ենք բարձրագույն էթիկական սկզբունքներին բոլոր մեր գործերում։"
        },
        {
            icon: FaGavel,
            title: "Պրոֆեսիոնալիզմ",
            description: "Մենք ձգտում ենք իրավաբանական գերազանցության յուրաքանչյուր գործում։"
        },
        {
            icon: FaHandshake,
            title: "Հավատարմություն",
            description: "Մենք լիովին նվիրված ենք մեր կլիենտների լավագույն արդյունքներին։"
        },
        {
            icon: FaUserTie,
            title: "Պատասխանատվություն",
            description: "Մենք պահպանում ենք ամենաբարձր պրոֆեսիոնալիզմը մեր աշխատանքի բոլոր ասպեկտներում։"
        }
    ];

    const teamMembers = [
        {
            name: "Արեն Անտոնյան",
            role: "Ավագ գործընկեր",
            specialization: "Կորպորատիվ իրավունք",
            experience: "5 տարի",
            photo: ArenImg
        },
        {
            name: "Աշոտ Գրիգորյան",
            role: "Գործընկեր",
            specialization: "Դատական գործընթացներ",
            experience: "5 տարի",
            photo: AshotImg
        }
    ];

    return (
        <Box bg="gray.50">

            <Box
                bg="linear-gradient(rgba(26, 32, 44, 0.9), rgba(26, 32, 44, 0.9)), url('../../assets/images/about-back.jpg')"
                bgSize="cover"
                bgPosition="center"
                color="white"
                py={32}
                textAlign="center"
            >
                <Container maxW="container.lg">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Heading as="h1" size="2xl" mb={6} fontWeight="bold">
                            Մեր Իրավաբանական Գրասենյակի Մասին
                        </Heading>
                        <Text fontSize="xl" maxW="2xl" mx="auto">
                            2005 թվականից մենք ապահովում ենք բարձրորակ իրավաբանական ծառայություններ՝ հիմնված արդարադատության, գերազանցության և հավատարմության վրա:
                        </Text>
                    </MotionBox>
                </Container>
            </Box>


            <Container maxW="container.lg" py={20}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                    <MotionBox
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading as="h2" size="xl" mb={6} color="blue.800">
                            Մեր Պատմությունը
                        </Heading>
                        <Text fontSize="lg" mb={4}>
                            Հիմնադրվելով 2005 թվականին՝ մեր իրավաբանական գրասենյակը փոքրիկ պրակտիկայից վերածվել է տարածաշրջանի ամենահարգված իրավաբանական թիմերից մեկի:
                        </Text>
                        <Text fontSize="lg" mb={4}>
                            Այն, ինչ սկսվել էր որպես երկու մարդու գրասենյակ, վերածվել է բազմաբնույթ ծառայություններ մատուցող գրասենյակի՝ նվիրված իրավաբանների թիմով:
                        </Text>
                        <Text fontSize="lg">
                            Մեր ողջ ճանապարհի ընթացքում մենք մնացել ենք հավատարիմ մեր հիմնական արժեքներին՝ արդարադատությանը, գերազանցությանը և կլիենտների վրա կենտրոնացված ծառայությանը:
                        </Text>
                    </MotionBox>
                    <MotionBox
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src={officePhoto}
                            alt="Մեր գրասենյակը"
                            borderRadius="lg"
                            boxShadow="xl"
                            objectFit="cover"
                            h="100%"
                            minH="300px"
                        />
                    </MotionBox>
                </SimpleGrid>
            </Container>


            <Box bg="blue.800" color="white" py={16}>
                <Container maxW="container.lg">
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10} textAlign="center">
                        {stats.map((stat, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                textAlign="center"
                                p={6}
                                borderRadius="lg"
                                _hover={{
                                    transform: "scale(1.05)",
                                    transition: "all 0.3s ease",
                                    bgGradient: "linear(to-b, blue.50, #084d727a)",
                                    boxShadow: "xl"

                                }}
                            >
                                <Heading
                                    as="h3"
                                    size="2xl"
                                    mb={2}
                                    color="blue.600"
                                    sx={{

                                        transition: "all 0.3s ease"
                                    }}
                                    _hover={{

                                        color: "blue.500"
                                    }}
                                >
                                    {stat.value}
                                </Heading>
                                <Text
                                    fontSize="lg"
                                    fontWeight="medium"
                                    color="white.600"
                                    _hover={{
                                        color: "blue.400"
                                    }}
                                >
                                    {stat.label}
                                </Text>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            <Container maxW="container.lg" py={20}>
                <Heading as="h2" size="xl" mb={12} textAlign="center" color="blue.800">
                    Մեր Արժեքները
                </Heading>


                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={10}
                    mb={10}
                >
                    {values.slice(0, 3).map((value, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            bg="white"
                            p={8}
                            borderRadius="xl"
                            boxShadow="lg"
                            textAlign="center"
                            _hover={{
                                boxShadow: "2xl",
                                transform: "translateY(-8px)",
                                transition: "all 0.3s ease"
                            }}
                            minH="350px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Icon
                                as={value.icon}
                                boxSize={14}
                                margin="auto"
                                color="blue.600"
                                mb={6}
                            />
                            <Heading as="h3" size="md" mb={4} color="blue.800">
                                {value.title}
                            </Heading>
                            <Text fontSize="md" color="gray.600" px={4}>
                                {value.description}
                            </Text>
                        </MotionBox>
                    ))}
                </SimpleGrid>

                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    bg="white"
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                    textAlign="center"
                    _hover={{
                        boxShadow: "2xl",
                        transform: "translateY(-8px)",
                        transition: "all 0.3s ease"
                    }}
                    minH="350px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    w="100%"
                    maxW="100%"
                >
                    <Icon
                        as={values[3].icon}
                        boxSize={14}
                        color="blue.600"
                        mb={6}
                        margin="auto"
                    />
                    <Heading as="h3" size="md" mb={4} color="blue.800">
                        {values[3].title}
                    </Heading>
                    <Text fontSize="md" color="gray.600" px={4}>
                        {values[3].description}
                    </Text>
                </MotionBox>
            </Container>

            <Box bg="gray.100" py={20}>
                <Container maxW="container.lg">
                    <Heading as="h2" size="xl" mb={12} textAlign="center" color="blue.800">
                        Մեր լավագույն փաստաբանները
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                bg="white"
                                p={6}
                                borderRadius="lg"
                                boxShadow="md"
                                textAlign="center"
                                _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
                                transition="all 0.3s ease"
                                maxW="400px"
                                mx="auto"
                            >
                                <Avatar size="xl" name={member.name} mb={4} src={member.photo} />
                                <Heading as="h3" size="md" mb={1} color="blue.800">
                                    {member.name}
                                </Heading>
                                <Text fontWeight="bold" color="blue.600" mb={2}>
                                    {member.role}
                                </Text>
                                <Text fontSize="sm" color="gray.600" mb={1}>
                                    <strong>Մասնագիտացում:</strong> {member.specialization}
                                </Text>
                                <Text fontSize="sm" color="gray.600">
                                    <strong>Փորձ:</strong> {member.experience}
                                </Text>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>


            <Box bg="blue.800" color="white" py={20}>
                <Container maxW="container.lg" textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Icon as={GiScales} boxSize={12} mb={6} color="yellow.300" />
                        <Heading as="h2" size="xl" mb={6}>
                            Պատրաստ եք քննարկել Ձեր իրավաբանական հարցերը?
                        </Heading>
                        <Text fontSize="lg" maxW="2xl" mx="auto" mb={8}>
                            Մեր փորձառու իրավաբանների թիմը պատրաստ է Ձեզ ապահովել մասնագիտական իրավաբանական աջակցությամբ:
                        </Text>
                        <Button
                            bg="black"
                            size="lg"
                            px={10}
                            color="white"
                            _hover={{ transform: "scale(1.05)" }}
                            transition="all 0.3s ease"
                        >
                            Կապ մեզ հետ
                        </Button>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutPage;