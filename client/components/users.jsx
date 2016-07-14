import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Users = (props) => (
  <div className='users'>
    props.requestUserData('users')
    <div className='user-list'>
      {props.users.map((user, index)=>{return <div key={index}>{user.name}</div>})}
    </div>
  </div>
)


const mapStateToProps = (state) => {
  return {
    users: state.users || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestUserData: (query) => { dispatch(actions.requestUserData(query)) }
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
