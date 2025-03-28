const groupUseCase = (groupRepo) => {
    const createGroup = (input) => groupRepo.createGroup(input)

    const joinGroup = (id) => groupRepo.joinGroup(id)

    const deleteGroup = (id) => {
        if (!id) {
            throw Error('ID is required')
        }
        return groupRepo.deleteGroup(id)
    }

    const getGroup = (id) => {
        if (!id) {
            throw Error('ID is required')
        }
        return groupRepo.getGroup(id)
    }

    const groupList = (variables) => groupRepo.groupList(variables)

    return {
        createGroup,
        deleteGroup,
        getGroup,
        groupList,
        joinGroup,
    }
}

export default groupUseCase