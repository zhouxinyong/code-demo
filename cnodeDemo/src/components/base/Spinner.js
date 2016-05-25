import React, {
	ActivityIndicatorIOS,
	ProgressBarAndroid,
	Component,
	PropTypes,
	Platform
} from 'react-native'

class Spinner extends Component {
	static defaultProps={
		//rgba(241,196,15, 1.0)
		color: 'rgba(148, 14, 241, 1)'
	}

	render() {
		if (Platform.OS === 'android') {
			return (
				<ProgressBarAndroid
					{...this.props}/>
			)
		}
		return (
			<ActivityIndicatorIOS
				animating={true}
				{...this.props}/>
		)
	}
}


export default Spinner
