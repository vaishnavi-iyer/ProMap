import React from 'react'
import UserList from './UserList'
import TaskList from './TaskList'
import AddForm from './AddForm'
import Modal from 'react-modal'

export default React.createClass({
  getInitialState: function () {
    return ({ modalIsOpen: false, activeUser: { name: undefined } })
  },

  openModal: function (user) {
    this.setState({ modalIsOpen: true, activeUser: user })
  },

  afterOpenModal: function () {
  },

  closeModal: function () {
    this.setState({ modalIsOpen: false, activeUser: { name: 'null' } })
  },

  addUser: function (name) {
    if (name === '') return
    this.props.store.dispatch({
      type: 'ADD USER',
      state: this.props.appState,
      name: name
    })
  },

  deleteUser: function (index) {
    this.props.store.dispatch({
      type: 'DELETE USER',
      state: this.props.appState,
      index: index
    })
  },

  addTask: function (name) {
    if (name === '') return
    this.props.store.dispatch({
      type: 'ADD TASK',
      state: this.props.appState,
      name: name
    })
  },

  deleteTask: function (index) {
    this.props.store.dispatch({
      type: 'DELETE TASK',
      state: this.props.appState,
      index: index
    })
  },

  render () {
    return (
      <div className='app'>
        <h1>shortstraw</h1>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={Modal.defaultStyles}>
          <h2 ref="subtitle">{this.state.activeUser.name}'s Preferred Tasks</h2>
          <button onClick={this.closeModal}> Close </button>
        </Modal>

        <UserList
          users={this.props.appState.users}
          deleteUser={this.deleteUser}
          openModal={this.openModal}
        />
        <AddForm addItem={this.addUser} type='User' />
        <TaskList
          tasks={this.props.appState.tasks}
          deleteTask={this.deleteTask}
        />
        <AddForm addItem={this.addTask} type='Task'/>
      </div>
    )
  }
})
