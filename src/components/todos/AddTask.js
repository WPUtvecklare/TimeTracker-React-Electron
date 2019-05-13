import React, { Component } from 'react'
import uuid from 'uuid'
import deleteIcon from '../images/delete.svg'


class AddTask extends Component {
  state = {
    id: '',
    title: '',
    parent: '',
    elapsed: 0,
    created: ''
  }

  componentWillUnmount () {
    this.setState({ error: null, success: null })
  }

  handleChange = e => {
    this.setState({ title: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const findTaskByName = this.props.tasks.some(task => this.state.title === task.title)

    if (!findTaskByName) {
      this.props.addTask({
        id: uuid(),
        title: this.state.title,
        parent: this.props.projectId,
        elapsed: this.state.elapsed,
        created: new Date().toString()
      })
      this.setState({ id: '', title: '', parent: '', created: '', elapsed: 0, success: 'Project successfully added', error: null })
    } else {
      this.setState({ success: null, error: 'A task with the same name already exists. Please change the name of your new task.' })
    }
  }

  hideMessage = () => {
    this.setState({success: null, error: null})
  }

  render () {
    const { error, success } = this.state
    
    const message = error || success ? (
      <div className="col s12 right-align">
        <span className={error ? 'error' : success ? 'success' : ''}>
          {error ? error : success ? success : ''}
        </span>
        <button className="btn-flat" onClick={this.hideMessage}><img src={deleteIcon} alt="Close"/></button>
      </div>
      ) : ''

    return (
      <React.Fragment>
      {message}
      <form className="col s12" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.title} placeholder="What are you working on?" minLength="1" required />
      </form>
      
      </React.Fragment>
    )
  }
}

export default AddTask
