import { groupUseCase } from '../../factories'
import {useQuery} from "@tanstack/react-query";

const useGroupList = (variables) => {
    const {
        refetch, isLoadingGroups, data, error,
    } = useQuery({
        queryKey: ['groups', variables],
        queryFn: () => groupUseCase.groupList(variables),
        enabled: !!variables?.id,
    })

    return {
        refetch,
        isLoadingGroups,
        error,
        data,
    }
}

export default useGroupList