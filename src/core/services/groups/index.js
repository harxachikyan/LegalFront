import HttpRequest from "../api/httpRequest";

function groupService() {
    const {post, get} = HttpRequest()

    const createGroup = (input) => {
        return post('group/create',input)
    }

    const deleteGroup = (id) => {
        return post(`group/del/${id}`)
    }

    const groupList = (variables) => {
        return post('group/list',variables)
    }

    const getGroup = (id) => {
        return get(`group/${id}`)
    }

    const joinGroup = (id) => {
        return post(`group/join/${id}`)
    }

    return {
        createGroup,
        deleteGroup,
        groupList,
        getGroup,
        joinGroup,
    }
}

export default groupService
