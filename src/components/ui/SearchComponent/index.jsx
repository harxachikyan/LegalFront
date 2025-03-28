import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchComponent = ({ onSearch }) => {

    return (
        <InputGroup maxW="400px">
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
                type="text"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
                focusBorderColor="blue.500"
                borderRadius="md"
            />
        </InputGroup>
    )
}

export default SearchComponent