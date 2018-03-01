import React from 'react'
import {voting} from'../reducers/anecdoteReducer'
import {likeNotification, emptyNotification} from './../reducers/notificationReducer'
import Filter from '../components/Filter'
import {connect} from 'react-redux'
class AnecdoteList extends React.Component {
  constructor(props){
    super(props)
  }
  voteAnecdote=(anecdote)=>{
    this.props.voting(anecdote.id)
    this.props.likeNotification(anecdote.content)
    setTimeout(()=>{
      this.props.emptyNotification()
    },5000)
  }
  
  render() {
    const anecdotes = this.props.content
    return (
      <div>
        <h2>Anecdotes</h2>
         <Filter/>
        {this.props.visibleAnecdotes
        .sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes 
              <button value={anecdote} onClick={() => 
                {this.voteAnecdote(anecdote)}
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const anecdotesToShow=(anecdotes,filter)=>{
  return anecdotes.filter(a=> a.content.toLowerCase().includes
(filter.toLowerCase()))
}
const mapStateToProps=(state)=>{
  return{
  visibleAnecdotes:anecdotesToShow(state.content,state.filter)
  }
}

const connectedList=connect(
  mapStateToProps,{likeNotification,emptyNotification,voting}
)(AnecdoteList)

export default connectedList
