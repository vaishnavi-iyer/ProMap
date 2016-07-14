const INITIAL_STATE ={

}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'GET_USERS':
      let newState = Object.assign({}, state, {
          users: action.users
        })
        console.log('newState', newState)
      return newState

    case 'GET_PROJECTS':
      let newS = Object.assign({}, state, {
          projects: action.projects
        })
        console.log('newState', newS)
      return newSt

    case 'DELETE_USER':

      return newState

    case 'ADD_TASK':

      return newState

    case 'DELETE_TASK':

      return newState

    default:
      return state
  }
}

