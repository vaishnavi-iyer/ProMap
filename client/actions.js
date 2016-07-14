import request from 'superagent'

export const GET_USERS = 'GET_USERS'

export const requestData = (query) => {
  return (dispatch) => {
    console.log('getting dragons')
    const target = 'http://localhost:3000/api/v1/users'

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

export const GET_PROJECTS = 'GET_PROJECTS'

export const requestProjectData = (query) => {
  return (dispatch) => {
    console.log('getting dragons')
    const target = 'http://localhost:3000/api/v1/projects'

    request.get(target, (err, data) => {
      if (err) console.log(err)
      const projectinfo = JSON.parse(data.text)
    console.log('iam here', projectinfo)
      dispatch(receiveProjects(projectinfo))
    })

  }
}

export const receiveProjects = (projects) => {
  return {
    type: GET_PROJECTS,
    projects
  }
}