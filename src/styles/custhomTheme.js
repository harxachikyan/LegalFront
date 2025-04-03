import {extendTheme} from '@chakra-ui/react'

const customTheme = extendTheme({
    styles: {
        global: {

            'html, body': {
                fontFamily: 'Arial, sans-serif',
                color: 'black',
                margin:'0',
                padding:'0'
            },
            '.nav-link': {
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none',
            },
            '.nav-link:hover': {
                color: '#ECC94B',
            },
            '.footer-link': {
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none',
            },
            '.footer-link:hover': {
                color: '#ECC94B',
            },
        },

    },

})

export default customTheme
