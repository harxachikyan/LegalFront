import { userUseCase } from '../../factories'
import {useQuery} from "@tanstack/react-query";

const useListUsers = (variables) => {
    const {
        refetch, isLoadingUsers, data, error,
    } = useQuery('users', () => userUseCase.listUsers(variables))

    return {
        refetch,
        isLoadingUsers,
        error,
        data,
    }
}

export default useListUsers