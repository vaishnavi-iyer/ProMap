import React,{Component}  from 'react'

class AddForm extends Component {
  // function getInitialState {
  //   return {
  //     name: ''
  //   }
  // }

  function handleNameField = (e) =>{
    this.setState({
      name: e.target.value
    })
  }

  function handleSubmit = (e)=>{
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({name: ''})
  }

  render () {
    return (
      <div className='add-form'>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label>{this.props.type} Name:</label>
            <input
              className='add-form-input'
              type='text'
              onChange={this.handleNameField}
              value={this.state.name}>
            </input>
            <button
              onClick={this.handleSubmit}>
              Add
            </button>
          </span>
        </form>
      </div>
    )
  }

}

export default AddForm;

