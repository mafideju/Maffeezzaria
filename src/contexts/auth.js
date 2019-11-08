import React, {
  createContext,
  useState
} from 'react'
import PropTypes from 'prop-types'
import firebase from './../service/firebase'

export const AuthContext = createContext()

function Auth ({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })
  const githubLogin = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithRedirect(provider)
  }

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithRedirect(provider)
  }

  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log(' <= NÃO HÁ LOGIN =>')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

  return (
    <AuthContext.Provider value={{
      githubLogin,
      googleLogin,
      logout,
      userInfo,
      setUserInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: PropTypes.node
}

export default Auth
