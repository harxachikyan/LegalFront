import { authUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useSignIn = () => {
  const {
    mutate: signIn, isPending, data, error,
  } = useMutation({mutationFn: authUseCase.signIn})

  return {
    signIn,
    isPending,
    data,
    error,
  }
}

export default useSignIn
