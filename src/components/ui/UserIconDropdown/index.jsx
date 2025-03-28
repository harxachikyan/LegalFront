import React, { useState } from "react";
import { Box, Menu, MenuButton, MenuList, MenuItem, Avatar, Button } from "@chakra-ui/react";
import { useSignOut } from "../../../core/hooks";
import { Link } from "react-router-dom";

const UserAvatarDropdown = () => {
    const [open, setOpen] = useState(false);
    const { signOut } = useSignOut();

    return (
        <Box
            position="relative">
            <Menu
                isOpen={open}>
                <MenuButton
                    as={Button}
                    variant="link"
                    onClick={() => setOpen(!open)}
                    padding="0"
                    minWidth="auto"
                    background="transparent">
                    <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/40"
                        alt="User Avatar" />
                </MenuButton>
                <MenuList
                    backgroundColor="white"
                    borderRadius="8px"
                    boxShadow="md"
                    onMouseLeave={() => setOpen(false)}>
                    <MenuItem as={Link} to="/profile">Profile</MenuItem>
                    <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

export default UserAvatarDropdown;
