import { authUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useChangePassword = () => useMutation(authUseCase.changePassword)

export default useChangePassword
