import {useState, useEffect} from 'react'
import {UserContext} from '../contexts'
import {userUseCase} from '../factories'

function UserProvider(props) {
    const [user, setUser] = useState()
    const {children} = props

    useEffect(() => {
        userUseCase
            .getSignedInUser()
            .then((e) => {
                setUser(e.data.data)
            })
            .catch(() => {
                setUser(null)
                localStorage.removeItem('token')
            })
    }, [])

    return (
        <UserContext.Provider value={{user, setUser,}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider