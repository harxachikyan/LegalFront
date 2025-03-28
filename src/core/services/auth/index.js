import HttpRequest from "../api/httpRequest";

function authService() {
    const {post} = HttpRequest()

    const signIn = ({ email, password }) => {
        return post('login_check',{email,password})
    }

    const signOut = () => {
    }

    const changePassword = ({oldPassword, newPassword}) => {
        return post('change-password',{oldPassword, newPassword})
    }

    return {
        signIn,
        changePassword,
        signOut,
    }
}

export default authService
