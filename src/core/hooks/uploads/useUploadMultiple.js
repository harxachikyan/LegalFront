import {uploadUseCase} from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useUploadMultiple = () => {
    const {
        mutate: upload,
        isLoading,
        data,
        error
    } = useMutation(uploadUseCase.uploadMultiple)
    return {
        upload,
        isLoading,
        error,
        data
    }
}

export default useUploadMultiple