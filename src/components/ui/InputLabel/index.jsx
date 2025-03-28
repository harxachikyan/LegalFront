import React from 'react'
import {
    FormControl,
    FormLabel,
    Box,
    Flex,
    Input, Text,
} from '@chakra-ui/react'

const InputLabel = React.forwardRef((props, ref) => {
    const {
        label,
        defaultValue,
        name,
        value,
        type,
        leftAddon,
        isInvalid,
        errormessage,
        disabled,
        onChange,
        pattern,
        maxW,
        ...rest
    } = props
    return (
        <FormControl
            maxW={maxW}
            alignItems="center"
            position="relative">
            <FormLabel
                fontWeight="600"
                fontSize="md">
                {label}
            </FormLabel>
            <Flex
                alignItems="center">
                {
                    leftAddon
                    && (
                        <Box
                            zIndex="10"
                            left="5px"
                            position="absolute"
                            as="span">
                            {leftAddon}
                        </Box>
                    )
                }
                <Input
                    type={type}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    isInvalid={isInvalid}
                    value={value}
                    pattern={pattern}
                    isDisabled={disabled}
                    name={name}
                    ref={ref}
                    {...rest}/>
            </Flex>
            {errormessage && (
                <Text position={'absolute'} bottom={'-20px'} left={'0'} fontSize="xs" color="red.400">
                    {errormessage}
                </Text>
            )}
        </FormControl>

    )
})

export default InputLabel
