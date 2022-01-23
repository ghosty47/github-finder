import { createContext, useReducer } from "react"
import githubReducer from './GithubReducer'

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get initial users for testing purposes
  // const fetchUsers = async () => {
  //   setLoading()

  //   const res = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     }
  //   })

  //   const data = await res.json()

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data
  //   })
  // }

  // to search users
 

  // get a single user
  

  // const clearUsers = () => dispatch({
  //   type: 'CLEAR_USERS'
  // })

  // const setLoading = () => dispatch({
  //   type: 'SET_LOADING',
  // })

  return <GithubContext.Provider value={{
    ...state,
    dispatch,
    // searchUsers,
    // clearUsers,
    // getUser,
    // getUserRepos,
  }} >
    {children}
  </GithubContext.Provider>
}

export default GithubContext
