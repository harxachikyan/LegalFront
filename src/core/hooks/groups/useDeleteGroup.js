import { groupUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useDeleteGroup = () => {
    const {
        mutate: deleteGroup, isLoading, data, error,
    } = useMutation({ mutationFn: groupUseCase.deleteGroup})

    return {
        deleteGroup,
        isLoading,
        error,
        data,
    }
}

export default useDeleteGroup