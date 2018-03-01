import React from 'react'
import {anecdoteCreation} from './../reducers/anecdoteReducer'
import {createNotification, emptyNotification} from './../reducers/notificationReducer'
import {connect} from 'react-redux'
class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.anecdoteCreation(e.target.anecdote.value)
   this.props.createNotification(e.target.anecdote.value)
setTimeout(()=>{
  this.props.emptyNotification()
},5000)
    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}


export default connect(null,{createNotification,emptyNotification,anecdoteCreation})(AnecdoteForm)
