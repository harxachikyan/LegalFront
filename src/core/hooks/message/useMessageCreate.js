import { messageUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useMessageCreate = () => {
    const {
        mutate: createMessage, isLoading, data, error,
    } = useMutation({ mutationFn: messageUseCase.createMessage})

    return {
        createMessage,
        isLoading,
        error,
        data,
    }
}

export default useMessageCreate