import React from 'react'
import {
    FormControl,
    FormLabel, Textarea,
} from '@chakra-ui/react'

const TextareaLabel = React.forwardRef((props, ref) => {
    const {
        label,
        placeholder,
        name,
        onChange,
        value,
        disabled,
        isInvalid,
        type,
        ...rest
    } = props
    return (
        <FormControl>
            <FormLabel
                fontWeight="600"
                fontSize="md">
                {label}
            </FormLabel>
            <Textarea
                type={type}
                isInvalid={isInvalid}
                value={value}
                onChange={onChange}
                name={name}
                ref={ref}
                isDisabled={disabled}
                placeholder={placeholder}
                {...rest}/>
        </FormControl>

    )
})

export default TextareaLabel
