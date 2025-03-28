import { messageUseCase } from '../../factories'
import {useQuery} from "@tanstack/react-query";

const useGroupList = (variables) => {
    const {
        refetch, isLoadingMessages, data, error,
    } = useQuery({
        queryKey: ['groups',  variables?.groupId],
        queryFn: () => messageUseCase.messageList(variables),
        enabled: !!variables?.isJoined,
    })

    return {
        refetch,
        isLoadingMessages,
        error,
        data,
    }
}

export default useGroupList