import { userUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useUpdateUser = () => useMutation(userUseCase.updateUser)

export default useUpdateUser