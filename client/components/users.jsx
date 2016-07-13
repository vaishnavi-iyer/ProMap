import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Users = (props) => (
  <div className='users'>
    <button onClick={ () => {
      props.requestData('users')
    }}>
      Moar
    </button>
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
    requestData: (query) => { dispatch(actions.requestData(query)) }
  }

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
