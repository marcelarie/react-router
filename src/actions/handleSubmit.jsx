
export default async event => {
    event.preventDefault()
    const token = await login({ username, password })
    setToken(token);
}
