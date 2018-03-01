const initialState='No message'

export const createNotification=(content)=>{
  return {
    type:'CREATE_NOTIFICATION',
    content: `You created '${content}'`
  }
}

export const emptyNotification=()=>{
  return{
    type:'DEFAULT',
    content:'No message'
  }
}

export const likeNotification=(content)=>{
  return {
    type:'VOTE_NOTIFICATION',
    content: `You voted '${content}'`
  }
}

const notificationReducer=(state=initialState, action)=>{
  switch(action.type){
  case 'DEFAULT':
    state='No message'
    return state
  case'VOTE_NOTIFICATION':
    state=action.content
    return state
  case'CREATE_NOTIFICATION':
    state= action.content
    return state
  default:
    return state
  }
}

export default notificationReducer

