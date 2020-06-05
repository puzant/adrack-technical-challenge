export default function(context) {

  //  get the user token from the localstorage
  let token = localStorage.getItem('userToken')

  if(!token) {
    //  if there's no token in the localstorage, redirct the user to the login page
    context.redirect('/login')
  }

}