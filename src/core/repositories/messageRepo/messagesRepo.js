const messageRepo = (messageService) => {
    const createMessage = (input) => messageService.createMessage(input)

    const deleteGroup = (input) => messageService.deleteMessage(input)

    const messageList = (variables) => messageService.messageList(variables)

    const getMessage = (id) => messageService.getMessage(id)

    return {
        createMessage,
        deleteGroup,
        getMessage,
        messageList,
    }
}

export default messageRepo