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
import { useNavigate } from 'react-router-dom';
import { FaBalanceScale, FaGavel, FaHandshake, FaUserTie } from "react-icons/fa";
import { GiScales } from "react-icons/gi";
import ArenImg from "../../assets/images/Aren.png";
import AshotImg from "../../assets/images/Ashot.png";
import officePhoto from "../../assets/images/office.jpeg";

const MotionBox = motion(Box);

const AboutPage = () => {
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
    const navigate = useNavigate();
    return (
        <Box bg="gray.50">
            <Box
                bg="linear-gradient(rgba(26, 32, 44, 0.9), rgba(26, 32, 44, 0.9)), url('../../assets/images/about-back.jpg')"
                bgSize="cover"
                bgPosition="center"
                color="white"
                py={{ base: 20, md: 32 }}
                textAlign="center"
            >
                <Container maxW={{ base: "90%", md: "container.lg" }}>
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                            mb={{ base: 4, md: 6 }}
                            fontWeight="bold"
                        >
                            Մեր Իրավաբանական Գրասենյակի Մասին
                        </Heading>
                        <Text
                            fontSize={{ base: "md", md: "xl" }}
                            maxW="2xl"
                            mx="auto"
                        >
                            2005 թվականից մենք ապահովում ենք բարձրորակ իրավաբանական ծառայություններ՝ հիմնված արդարադատության, գերազանցության և հավատարմության վրա:
                        </Text>
                    </MotionBox>
                </Container>
            </Box>

            <Container maxW={{ base: "90%", md: "container.lg" }} py={{ base: 12, md: 20 }}>
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    alignItems="center"
                >
                    <MotionBox
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                            mb={{ base: 4, md: 6 }}
                            color="blue.800"
                        >
                            Մեր Պատմությունը
                        </Heading>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            mb={{ base: 3, md: 4 }}
                        >
                            Հիմնադրվելով 2005 թվականին՝ մեր իրավաբանական գրասենյակը փոքրիկ պրակտիկայից վերածվել է տարածաշրջանի ամենահարգված իրավաբանական թիմերից մեկի:
                        </Text>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            mb={{ base: 3, md: 4 }}
                        >
                            Այն, ինչ սկսվել էր որպես երկու մարդու գրասենյակ, վերածվել է բազմաբնույթ ծառայություններ մատուցող գրասենյակի՝ նվիրված իրավաբանների թիմով:
                        </Text>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                        >
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
                            h={{ base: "250px", sm: "300px", md: "100%" }}
                            minH={{ base: "250px", sm: "300px", md: "300px" }}
                            width="100%"
                        />
                    </MotionBox>
                </SimpleGrid>
            </Container>

            <Box bg="blue.800" color="white" py={{ base: 10, md: 16 }}>
                <Container maxW={{ base: "90%", md: "container.lg" }}>
                    <SimpleGrid
                        columns={{ base: 2, sm: 2, md: 4 }}
                        spacing={{ base: 6, md: 10 }}
                        textAlign="center"
                    >
                        {stats.map((stat, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                textAlign="center"
                                p={{ base: 4, md: 6 }}
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
                                    fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                                    mb={{ base: 1, md: 2 }}
                                    color="blue.600"
                                    sx={{ transition: "all 0.3s ease" }}
                                    _hover={{ color: "blue.500" }}
                                >
                                    {stat.value}
                                </Heading>
                                <Text
                                    fontSize={{ base: "sm", md: "lg" }}
                                    fontWeight="medium"
                                    color="white.600"
                                    _hover={{ color: "blue.400" }}
                                >
                                    {stat.label}
                                </Text>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            <Container maxW={{ base: "90%", md: "container.lg", lg: "90%" }} py={{ base: 12, md: 20 }}>
                <Heading
                    as="h2"
                    fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                    mb={{ base: 8, md: 12 }}
                    textAlign="center"
                    color="blue.800"
                >
                    Մեր Արժեքները
                </Heading>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 4 }}
                    spacing={{ base: 8, md: 10 }}
                    mb={{ base: 8, md: 10 }}
                    justifyContent={"center"}

                >
                    {values.map((value, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            bg="white"
                            p={{ base: 6, md: 8 }}
                            borderRadius="xl"
                            boxShadow="lg"
                            textAlign="center"
                            _hover={{
                                boxShadow: "2xl",
                                transform: "translateY(-8px)",
                                transition: "all 0.3s ease"
                            }}
                            minH={{ base: "300px", md: "350px" }}
                            display="flex"
                            flexDirection="column"
                        >
                            <Icon
                                as={value.icon}
                                boxSize={{ base: 10, md: 14 }}
                                margin="auto"
                                color="blue.600"
                                mb={{ base: 4, md: 6 }}
                            />
                            <Heading
                                as="h3"
                                fontSize={{ base: "lg", md: "xl" }}
                                mb={{ base: 2, md: 4 }}
                                color="blue.800"
                            >
                                {value.title}
                            </Heading>
                            <Text
                                fontSize={{ base: "sm", md: "md" }}
                                color="gray.600"
                                px={{ base: 2, md: 4 }}
                            >
                                {value.description}
                            </Text>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>

            <Box bg="gray.100" py={{ base: 12, md: 20 }}>
                <Container maxW={{ base: "90%", md: "container.lg" }}>
                    <Heading
                        as="h2"
                        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                        mb={{ base: 8, md: 12 }}
                        textAlign="center"
                        color="blue.800"
                    >
                        Մեր լավագույն փաստաբանները
                    </Heading>
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, md: 2 }}
                        spacing={{ base: 8, md: 8 }}
                        justifyContent="center"
                    >
                        {teamMembers.map((member, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                bg="white"
                                p={{ base: 4, md: 6 }}
                                borderRadius="lg"
                                boxShadow="md"
                                textAlign="center"
                                _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
                                transition="all 0.3s ease"
                                maxW={{ base: "300px", sm: "400px", md: "400px" }}
                                mx="auto"
                            >
                                <Avatar size={{ base: "lg", md: "xl" }} name={member.name} mb={{ base: 3, md: 4 }} src={member.photo} />
                                <Heading
                                    as="h3"
                                    fontSize={{ base: "md", md: "lg" }}
                                    mb={{ base: 0.5, md: 1 }}
                                    color="blue.800"
                                >
                                    {member.name}
                                </Heading>
                                <Text
                                    fontWeight="bold"
                                    color="blue.600"
                                    mb={{ base: 1, md: 2 }}
                                    fontSize={{ base: "sm", md: "md" }}
                                >
                                    {member.role}
                                </Text>
                                <Text
                                    fontSize={{ base: "xs", md: "sm" }}
                                    color="gray.600"
                                    mb={{ base: 0.5, md: 1 }}
                                >
                                    <strong>Մասնագիտացում:</strong> {member.specialization}
                                </Text>
                                <Text
                                    fontSize={{ base: "xs", md: "sm" }}
                                    color="gray.600"
                                >
                                    <strong>Փորձ:</strong> {member.experience}
                                </Text>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            <Box bg="blue.800" color="white" py={{ base: 12, md: 20 }}>
                <Container maxW={{ base: "90%", md: "container.lg" }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Icon as={GiScales} boxSize={{ base: 10, md: 12 }} mb={{ base: 4, md: 6 }} color="yellow.300" />
                        <Heading
                            as="h2"
                            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                            mb={{ base: 4, md: 6 }}
                        >
                            Պատրաստ եք քննարկել Ձեր իրավաբանական հարցերը?
                        </Heading>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            maxW="2xl"
                            mx="auto"
                            mb={{ base: 6, md: 8 }}
                        >
                            Մեր փորձառու իրավաբանների թիմը պատրաստ է Ձեզ ապահովել մասնագիտական իրավաբանական աջակցությամբ:
                        </Text>
                        <Button
                            bg="black"
                            size={{ base: "md", md: "lg" }}
                            px={{ base: 8, md: 10 }}
                            color="white"
                            _hover={{ transform: "scale(1.05)" }}
                            transition="all 0.3s ease"
                            onClick={() => navigate('/contact')}

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