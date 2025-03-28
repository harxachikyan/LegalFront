const validateEmail = (email) => {
  if (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      email,
    )
  ) {
    return true
  }
  return false
}

const authUseCase = (authRepo) => {
  const signIn = async ({ email, password }) => {
    if (!email || !password) {
      throw Error('Credentials cannot be empty')
    }

    if (!validateEmail(email)) {
      throw Error('Wrong email format')
    }

    return authRepo.signIn({
      email,
      password,
    })
  }

  const signOut = async () => {
    try {
      await authRepo.signOut()
      localStorage.removeItem('token')
      return true
    } catch (e) {
      return e
    }
  }

  const changePassword = ({ oldPassword, newPassword }) => {
    if (!oldPassword || !newPassword) {
      throw Error('Old and new passwords are required')
    }

    if (oldPassword === newPassword) {
      throw Error('Same password')
    }

    return authRepo.changePassword({
      oldPassword,
      newPassword,
    })
  }

  return {
    signIn,
    signOut,
    changePassword,
  }
}

export default authUseCase
