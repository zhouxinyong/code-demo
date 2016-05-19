export const IncrementCounter = ({dispatch, state}) => {
  console.log('IncrementCounter start')
  console.log(dispatch)
  console.log(state)
  dispatch('INCREMENT', 1)
}
export const reduceNumber = ({dispatch, state}) => {
  dispatch('REDUCE', 1)
}
