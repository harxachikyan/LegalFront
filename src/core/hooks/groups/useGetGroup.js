import { groupUseCase } from '../../factories'
import {useQuery} from "@tanstack/react-query";

const useGetGroup = (id) => {
    const {
        refetch, isLoading, data, error,
    } = useQuery({
        queryKey: ['group', id],
        queryFn: () => groupUseCase.getGroup(id),
        enabled: !!id,
    })

    return {
        refetch,
        isLoading,
        error,
        data,
    }
}

export default useGetGroup