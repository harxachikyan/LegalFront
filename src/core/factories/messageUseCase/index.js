const messageUseCase = (messageRepo) => {
    const createMessage = (input) => messageRepo.createMessage(input)

    const deleteMessage = (id) => {
        if (!id) {
            throw Error('ID is required')
        }
        return messageRepo.deleteMessage(id)
    }

    const getMessage = (id) => {
        if (!id) {
            throw Error('ID is required')
        }
        return messageRepo.getMessage(id)
    }

    const messageList = (variables) => messageRepo.messageList(variables)

    return {
        createMessage,
        deleteMessage,
        getMessage,
        messageList,
    }
}

export default messageUseCase