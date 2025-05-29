import {
    Box,
    Flex,
    Text,
    Link,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useDisclosure,
    Collapse,
    Image,
    VStack
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram,  FaBars,FaEnvelope } from "react-icons/fa";
import React from "react";

const Nav = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: isLegislationMenuOpen, onOpen: onOpenLegislationMenu, onClose: onCloseLegislationMenu } = useDisclosure();

    return (
        <Box
            bg="#1a365d"
            padding={{ base: "10px 15px", md: "10px 20px" }}
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
            position="relative"
            top={0}
            zIndex={10}
            width='100%'
        >
            <Flex justify="space-between" align="center" maxW="1600px" mx="auto">
                <Flex direction="column">
                    <Flex align="center">
                        <Link href="/" _hover={{ textDecoration: 'none' }}>
                        <Text
                            fontSize={{ base: "2xl", md: "32px" }}
                            fontWeight="bold"
                            color="white"
                            ml={3}
                            lineHeight="1"
                        >
                            LegalTitan
                        </Text>
                        </Link>
                        <Box
                            bg="white"
                            color="#1a365d"
                            p={{ base: 2, md: 3 }}
                            marginLeft={{ base: "3px", md: "5px" }}
                            borderRadius="lg"
                            fontWeight="bold"
                            fontSize={{ base: "md", md: "xl" }}
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "rotate(-5deg)",
                                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
                            }}
                        >
                            LLC
                        </Box>
                    </Flex>
                </Flex>

                <HStack spacing={{ base: 2, md: 8 }} align="center">
                    {/*<HStack spacing={{ base: 1, md: 4 }} display={{ base: "none", sm: "flex" }}>*/}
                    {/*    {["ՀԱՅ", "ENG", "РУՍ"].map((lang) => (*/}
                    {/*        <Text*/}
                    {/*            key={lang}*/}
                    {/*            fontSize={{ base: "sm", md: "20px" }}*/}
                    {/*            fontWeight="bold"*/}
                    {/*            color="rgba(255,255,255,0.8)"*/}
                    {/*            cursor="pointer"*/}
                    {/*            transition="all 0.3s ease"*/}
                    {/*            _hover={{*/}
                    {/*                color: "white",*/}
                    {/*                transform: "scale(1.1)",*/}
                    {/*                textShadow: "0 0 10px rgba(255,255,255,0.5)"*/}
                    {/*            }}*/}
                    {/*            px={{ base: 1, md: 2 }}*/}
                    {/*            py={{ base: 0.5, md: 1 }}*/}
                    {/*        >*/}
                    {/*            {lang}*/}
                    {/*        </Text>*/}
                    {/*    ))}*/}
                    {/*</HStack>*/}

                    <HStack spacing={{ base: 2, md: 5 }} display={{ base: "none", md: "flex" }}>
                        <Box
                            as={FaFacebook}
                            size="28px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.3)",
                                color: "#4267B2"
                            }}
                            onClick={() => window.open('https://www.facebook.com/profile.php?id=61557661694303', '_blank')}
                        />
                        <Box
                            as={FaInstagram}
                            size="28px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.3)",
                                color: "#E1306C"
                            }}
                            onClick={() => window.open('https://www.instagram.com/legal_titan_llc______/', '_blank')}

                        />
                        <Box
                            as={FaEnvelope}
                            size="28px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.3)",
                                color: "#D44638"
                            }}
                            onClick={() => window.open('https://mail.google.com/')}
                        />
                    </HStack>

                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onToggle}
                        icon={<FaBars />}
                        variant="ghost"
                        aria-label="Open navigation"
                        color="white"
                        _hover={{ bg: "whiteAlpha.200" }}
                        size={{ base: "sm", sm: "md" }}
                    />
                </HStack>
            </Flex>

            <Flex
                justify="center"
                gap={{ base: 4, lg: 10 }}
                mt={8}
                maxW="1600px"
                mx="auto"
                display={{ base: "none", md: "flex" }}
            >
                {["/", "/about", "/services", "/works", "/contact"].map((path) => (
                    <Link
                        key={path}
                        href={path}
                        color="white"
                        fontWeight="semibold"
                        fontSize="lg"
                        textDecoration="none"
                        position="relative"
                        _hover={{
                            _after: {
                                content: '""',
                                position: "absolute",
                                bottom: "-5px",
                                left: "0",
                                width: "100%",
                                height: "2px",
                                bg: "white",
                                borderRadius: "full",
                            },
                            transform: "translateY(-3px)",
                            textShadow: "0 0 10px rgba(255,255,255,0.7)",
                        }}
                        transition="all 0.3s ease"
                    >
                        {path === "/" && "Գլխավոր էջ"}
                        {path === "/about" && "Մեր մասին"}
                        {path === "/services" && "Ծառայություններ"}
                        {path === "/works" && "Դատական գործեր"}
                        {path === "/contact" && "Կապ"}
                    </Link>
                ))}


                <Menu isLazy closeOnSelect={false}>
                    <Box position="relative">
                        <MenuButton
                            as={Link}
                            color="white"
                            fontWeight="semibold"
                            fontSize="lg"
                            textDecoration="none"
                            position="relative"
                            _hover={{
                                _after: {
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-5px",
                                    left: "0",
                                    width: "100%",
                                    height: "2px",
                                    bg: "white",
                                    borderRadius: "full",
                                },
                                transform: "translateY(-3px)",
                                textShadow: "0 0 10px rgba(255,255,255,0.7)",
                            }}
                            transition="all 0.3s ease"
                            onMouseEnter={(e) => e.currentTarget.click()}
                            onMouseLeave={(e) => e.currentTarget.blur()}
                        >
                            Օրենսդրություն
                        </MenuButton>
                        <MenuList
                            bg="#1a365d"
                            borderColor="whiteAlpha.300"
                            minW="200px"
                            py={0}
                            boxShadow="lg"
                            onMouseLeave={(e) => e.currentTarget.parentElement?.querySelector('button')?.blur()}
                        >
                            <MenuItem
                                _hover={{ bg: "whiteAlpha.100" }}
                                px={4}
                                py={2}
                                onClick={() => document.querySelector('[aria-haspopup="menu"]')?.blur()}
                            >
                                <Box px={3} as={Link} href="/documents" bg="darkcyan.200" borderLeft="2px solid" borderColor="blue.300">
                                    <Text fontSize="sm" fontWeight="bold" color="blue.300" >Գրադարան</Text>
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Box>
                </Menu>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    p={4}
                    color="white"
                    mt={4}
                    bg="#1a365d"
                    rounded="md"
                    shadow="md"
                    display={{ base: "block", md: "none" }}
                >
                    <VStack spacing={3} align="stretch">
                        {["/", "/about", "/services", "/works", "/contact"].map((path) => (
                            <Link
                                key={path}
                                href={path}
                                py={2}
                                onClick={onToggle}
                                _hover={{ bg: "whiteAlpha.200" }}
                                fontSize="md"
                                fontWeight="semibold"
                            >
                                {path === "/" && "Գլխավոր էջ"}
                                {path === "/about" && "Մեր մասին"}
                                {path === "/services" && "Ծառայություններ"}
                                {path === "/works" && "Դատական գործեր"}
                                {path === "/contact" && "Կապ"}
                            </Link>
                        ))}
                        <Menu isLazy isOpen={isLegislationMenuOpen} onClose={onCloseLegislationMenu}>
                            <MenuButton
                                as={Link}
                                py={2}
                                _hover={{ bg: "whiteAlpha.200" }}
                                fontSize="md"
                                fontWeight="semibold"
                                textAlign="left"
                                onClick={(e) => {
                                    e.preventDefault();
                                    isLegislationMenuOpen ? onCloseLegislationMenu() : onOpenLegislationMenu();
                                }}
                            >
                                Օրենսդրություն
                            </MenuButton>
                            <MenuList bg="#1a365d" borderColor="whiteAlpha.300" py={0} boxShadow="lg">
                                <MenuItem
                                    _hover={{ bg: "whiteAlpha.100" }}
                                    px={4}
                                    py={2}
                                    onClick={() => {
                                        onCloseLegislationMenu();
                                        onToggle();
                                        window.location.href = "/documents"
                                    }}
                                >
                                    <Box px={3} as={Link} bg="darkcyan.200" borderLeft="2px solid" borderColor="blue.300">
                                        <Text fontSize="sm" fontWeight="bold" color="blue.300">Գրադարան</Text>
                                    </Box>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </VStack>
                    <HStack spacing={4} justify="center" mt={6}>
                        <Box
                            as={FaFacebook}
                            size="24px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.2)",
                                color: "#4267B2"
                            }}
                            onClick={() => window.open('https://www.facebook.com/profile.php?id=61557661694303', '_blank')}
                        />
                        <Box
                            as={FaInstagram}
                            size="24px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.2)",
                                color: "#E1306C"
                            }}
                            onClick={() => window.open('https://www.instagram.com/legal_titan_llc______/', '_blank')}
                        />
                        <Box
                            as={FaEnvelope}
                            size="28px"
                            color="rgba(255,255,255,0.8)"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.3)",
                                color: "#D44638"
                            }}
                            onClick={() => window.open('https://mail.google.com/')}
                        />
                    </HStack>
                    <HStack spacing={4} justify="center" mt={4} display={{ base: "flex", sm: "none" }}>
                        {["ՀԱՅ", "ENG", "РУՍ"].map((lang) => (
                            <Text
                                key={lang}
                                fontSize="sm"
                                fontWeight="bold"
                                color="rgba(255,255,255,0.8)"
                                cursor="pointer"
                                transition="all 0.3s ease"
                                _hover={{
                                    color: "white",
                                    transform: "scale(1.1)",
                                    textShadow: "0 0 10px rgba(255,255,255,0.5)"
                                }}
                                px={1}
                                py={0.5}
                            >
                                {lang}
                            </Text>
                        ))}
                    </HStack>
                </Box>
            </Collapse>
        </Box>
    );
};

export default Nav;