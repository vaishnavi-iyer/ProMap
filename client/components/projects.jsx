import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Projects = (props) => (
  <div className='projects'>
  	<h1>Projects </h1>
    <button onClick={ () => {
      props.requestProjectData('projects')
    }}>
      Moar
    </button>
    <div className='project-list'>
      {props.projects.map((project, index)=>{return <div key={index}>{project.name}</div>})}
    </div>
  </div>
)


const mapStateToProps = (state) => {
  return {
    projects: state.projects || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestProjectData: (query) => { dispatch(actions.requestProjectData(query)) }
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)