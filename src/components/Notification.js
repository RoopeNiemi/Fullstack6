import React from 'react'
import {connect} from 'react-redux'
class Notification extends React.Component {
  render() {
    const notificationToShow=()=>{
      const{notification}=this.props
      return notification
    }
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div style={style}>
       {notificationToShow()}
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    notification: state.notification
  }
}

const connectedNotification=connect(
  mapStateToProps
)(Notification)

export default connectedNotification
