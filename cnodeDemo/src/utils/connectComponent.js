import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'

const options = {
      withRef: true
    }

const connectComponent = ({ mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponent }) => {
  return connect(
      mapStateToProps || {},
      mapDispatchToProps || ((dispatch) => {
        return {
          actions: bindActionCreators(actions,dispatch)
        }
      }),
      mergeProps,
      options
    )(LayoutComponent)
}

export default connectComponent
