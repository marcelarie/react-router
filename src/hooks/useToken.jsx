import { useState} from 'react'

// export default function useToken() {

    // const getToken = () => {
        // const stringyToken = sessionStorage.getItem('token')
        // const token = JSON.parse(stringyToken)
        // return token?.token
    // }

    // const setTokenOnSession = (token) => {
        // sessionStorage.setItem('token', JSON.stringfy(token))
        // setToken(token)
    // }

    // const [token, setToken] = useState(getToken())


    // return {
        // setToken: setTokenOnSession(),
        // token
    // }
// }

export function useToken() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken(),
    token
  }
}
