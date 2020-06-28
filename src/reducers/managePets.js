export let state;


export function managePets(state = { pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] )
      case 'REMOVE_PET':
  }
}

export function dispatch(){
}

export function render(){

}


    let state;
    function changeState(state = { count: 0 }, action) {
        switch (action.type) {
          case 'INCREASE_COUNT':
            return { count: state.count + 1 }
          default:
            return state;
        }
      }
      function dispatch(action){
      state = changeState(state, action)
      render()
    }
    function render(){
      document.body.textContent = state.count
    }
    dispatch({type: '@@INIT'})