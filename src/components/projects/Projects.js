import React from 'react'
import { Link } from 'react-router-dom'
import deleteIcon from '../images/delete.svg'
import { Modal } from 'react-materialize'

const Projects = ({ projects, deleteProject }) => {
  const projectList = projects.length ? (
    projects.map(project => {
      return (
        <div className='collection-item' key={project.id}>
          <Link to={'/' + project.name}>
            <span>{project.name}</span>
          </Link>

          <div className='rate'>
            <span>{project.rate}</span>
          </div>

          <div className='actions'>
            <Modal trigger={<span className='remove-icon'><img src={deleteIcon} className='delete-icon' alt='Delete project' /></span>}>
              <p>Are you sure that you want to remove this project? All tasks related to it will be removed.</p>
              <span className='btn red' onClick={() => { deleteProject(project) }}>DELETE</span>
            </Modal>

          </div>
        </div>
      )
    })
  ) : (
    <p className='center'>You have no projects yet</p>
  )

  return (
    <div className='projects collection'>
      {projectList}
    </div>
  )
}

export default Projects

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import deleteIcon from '../images/delete.svg'
// import { Modal } from 'react-materialize'

// class Projects extends Component {
//   render () {
//     const projectList = this.props.projects.length ? (
//       this.props.projects.map(project => {
//         return (
//           <div className='collection-item' key={project.id}>
//             <Link to={'/' + project.name}>
//               <span>{project.name}</span>
//             </Link>

//             <div className='rate'>
//               <span>{project.rate}</span>
//             </div>

//             <div className='actions'>
//               <Modal trigger={<span className='remove-icon'><img src={deleteIcon} className='delete-icon' alt='Delete project' /></span>}>
//                 <p>Are you sure that you want to remove this project? All tasks related to it will be removed.</p>
//                 <span className='btn red' onClick={() => { this.props.deleteProject(project) }}>DELETE</span>
//               </Modal>

//             </div>
//           </div>
//         )
//       })
//     ) : (
//       <p className='center'>You have no projects yet</p>
//     )

//     return (
//       <div className='projects collection'>
//         {projectList}
//       </div>
//     )
//   }
// }

// export default Projects
