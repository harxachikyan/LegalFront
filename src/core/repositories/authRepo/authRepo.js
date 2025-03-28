const authRepo = (authService) => {
  const signIn = (input) => authService.signIn(input)

  const signOut = () => authService.signOut()

  const changePassword = ({ oldPassword, newPassword }) => authService.changePassword({
    oldPassword,
    newPassword,
  })

  return {
    signIn,
    signOut,
    changePassword,
  }
}

export default authRepo
