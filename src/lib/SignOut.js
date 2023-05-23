/** @format */

function SignOut() {
  console.log(2)
  localStorage.clear('LoggedUser')
  window.location.reload()
}
export default SignOut
