const groupRepo = (groupService) => {
    const createGroup = (input) => groupService.createGroup(input)

    const deleteGroup = (input) => groupService.deleteGroup(input)

    const groupList = (variables) => groupService.groupList(variables)

    const getGroup = (id) => groupService.getGroup(id)

    const joinGroup = (id) => groupService.joinGroup(id)

    return {
        createGroup,
        deleteGroup,
        getGroup,
        groupList,
        joinGroup,
    }
}

export default groupRepo