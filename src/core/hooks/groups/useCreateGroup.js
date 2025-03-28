import { groupUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useCreateGroup = () => {
    const {
        mutate: createGroup, isLoading, data, error,
    } = useMutation({ mutationFn: groupUseCase.createGroup})

    return {
        createGroup,
        isLoading,
        error,
        data,
    }
}

export default useCreateGroup