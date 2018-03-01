import React from 'react'
import filterReducer from '../reducers/filterReducer'
import {filterChange} from '../reducers/filterReducer'
import {connect} from 'react-redux'
class Filter extends React.Component {
    constructor(props){
    super(props)
        this.state={
            filter:''
        }
    }
  
    handleChange = async(event) => {
     await this.setState({filter:event.target.value})
      this.filterAnecdotes(event)
    }
filterAnecdotes=(event)=>{
    this.props.filterChange(this.state.filter)
}

    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          Filter <input value={this.state.filter} onChange={this.handleChange}/>
        </div>
      )
    }
  }

  const mapStateToProps=(state)=>{
    return{
      filter: state.filter
    }
  }

  const connectedFilter=connect(
    mapStateToProps, {filterChange}
  )(Filter)
  export default connectedFilter