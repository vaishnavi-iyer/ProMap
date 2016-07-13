import request from 'superagent'

export const GET_USERS = 'GET_USERS'

export const requestData = (query) => {
  return (dispatch) => {
    console.log('getting dragons')
    const target = 'http://localhost:3000/users'

    request.get(target, (err, data) => {
      if (err) console.log(err)
      const userinfo = JSON.parse(data.text)
    console.log('iam here', userinfo)
      dispatch(receiveUsers(userinfo))
    })

  }
}

export const receiveUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}
