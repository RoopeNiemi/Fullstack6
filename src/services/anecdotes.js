import axios from "axios"
const url = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async content => {
  const response = await axios.post(url, { content, votes: 0 })
  return response.data
}

const likeAnecdote = async anecdote => {
  const id = anecdote.id
  const content = anecdote.content
  const votes = anecdote.votes + 1
  const itemUrl = `${url}/${id}`
  const response = await axios.put(itemUrl, { content, votes })
  return response.data
}

export default { getAll, createNew, likeAnecdote }
