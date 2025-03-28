import { uploadUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useUpload = () => {
    const {
        mutate: upload,
        isLoading,
        data,
        error,
    } = useMutation({mutationFn: uploadUseCase.uploadSingle})

    return {
        upload,
        isLoading,
        error,
        data,
    }
}

export default useUpload