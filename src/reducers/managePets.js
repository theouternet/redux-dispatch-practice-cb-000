export let state;


export function managePets(state = { pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] )
      case 'REMOVE_PET':
        return { pets: state.pets.filter(pet => pet.id !== action.id) }
       
        default:
        return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
document.body.textContent
}


      function dispatch(action){
      state = changeState(state, action)
      render()
    }
    function render(){
      document.body.textContent = state.count
    }
    dispatch({type: '@@INIT'})