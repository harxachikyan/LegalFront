const userUseCase = (userRepo) => {
    const createUser = (input) => userRepo.createUser(input)

    const updateUser = (input) => {
        if (!input?.uuid) {
            throw Error('ID is required')
        }
        return userRepo.updateUser(input)
    }

    const getUser = (id) => {
        if (!id) {
            throw Error('ID is required')
        }
        return userRepo.getUser(id)
    }

    const listUsers = (variables) => userRepo.listUsers(variables)

    const getSignedInUser = async () => {
        try {
            const token = localStorage.getItem('token')
            return await getUser(token)
        } catch (e) {
            return null
        }
    }
    return {
        createUser,
        updateUser,
        getUser,
        listUsers,
        getSignedInUser
    }
}

export default userUseCase