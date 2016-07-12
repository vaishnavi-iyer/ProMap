
export default (state = {users: [], tasks: []}, action) => {
  let newState = state

  switch (action.type) {
    case 'ADD USER':
      newState.users.push({ name: action.name, happiness: 0 })
      return newState

    case 'DELETE USER':
      newState.users.splice(action.index, 1)
      return newState

    case 'ADD TASK':
      newState.tasks.push({ name: action.name })
      return newState

    case 'DELETE TASK':
      newState.tasks.splice(action.index, 1)
      return newState

    default:
      return state
  }
}
