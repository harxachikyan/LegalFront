import { userUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useGetUser = () => {
    const {
        mutate: getUser, isLoading, data, error,
    } = useMutation({mutationFn: userUseCase.getUser})

    return {
        getUser,
        isLoading,
        error,
        data,
    }
}

export default useGetUser