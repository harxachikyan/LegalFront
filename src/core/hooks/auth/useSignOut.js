import { useEffect } from 'react'
import useUser from '../user/useUser'
import { authUseCase } from '../../factories'
import {useMutation} from "@tanstack/react-query";

const useSignOut = () => {
  const { setUser } = useUser()
  const {
    mutate: signOut, isLoading, data, error,
  } = useMutation({mutationFn: authUseCase.signOut})

  useEffect(() => {
    if (!data) return
    setUser(null)
  }, [data])

  return {
    signOut,
    isLoading,
    data,
    error,
  }
}

export default useSignOut
