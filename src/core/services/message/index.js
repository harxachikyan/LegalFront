import HttpRequest from "../api/httpRequest";

function messageService() {
    const {post, get} = HttpRequest()

    const createMessage = (input) => {
        console.log('input')
        console.log(input)
        return post('message/create',input)
    }

    const deleteMessage = (id) => {
        return post(`message/del/${id}`)
    }

    const messageList = (variables) => {
        console.log('variables', variables)
        return post('message/list',variables)
    }

    const getMessage = (id) => {
        return get(`message/${id}`)
    }

    return {
        createMessage,
        deleteMessage,
        messageList,
        getMessage,
    }
}

export default messageService
