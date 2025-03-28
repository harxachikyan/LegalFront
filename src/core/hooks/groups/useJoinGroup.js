import { groupUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useJoinGroup = () => {
    const {
        mutate: joinGroup, isPending: isPendingJoin, data, error,
    } = useMutation({ mutationFn: groupUseCase.joinGroup})

    return {
        joinGroup,
        isPendingJoin,
        error,
        data,
    }
}

export default useJoinGroup