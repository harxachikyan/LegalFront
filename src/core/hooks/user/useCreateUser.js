import { userUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";
import {useState} from "react";

const useCreateUser = () => {
    const [errorMessage, setErrorMessage] = useState(null);

    const {
        mutate: createUser, isPending, data, error,
    } = useMutation({ mutationFn: userUseCase.createUser,
        onError: (error) => {
            const message = error?.response?.data?.errorMessage || "An error occurred";
            setErrorMessage(message);
        } })

    return {
        createUser,
        isPending,
        error,
        errorMessage,
        data,
    }
}

export default useCreateUser