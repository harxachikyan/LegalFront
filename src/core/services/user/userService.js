import HttpRequest from "../api/httpRequest";

const userService = () => {
    const {post, get} = HttpRequest()

    const createUser = (input) => {
        return post('user/register',input)
    }

    const updateUser = (input) => {
        return post(`user/update/${input.uuid}`,input)
    }

    const getUser = () => {
        return get('user/user')
    }

    const listUsers = (variables) => {
        return post('user/list',variables)
    }

    return {
        createUser,
        updateUser,
        getUser,
        listUsers,
    }
}

export default userService