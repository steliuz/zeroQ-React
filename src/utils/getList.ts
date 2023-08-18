export const getApi = async () => {
  const url = `http://localhost:4000/api/offices`
  const resp = await fetch(url)

  return resp
}
