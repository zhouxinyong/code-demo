import React, {
	StyleSheet,
	View,
	Text,
	Component,
	Dimensions,
	Platform,
	TouchableOpacity,
	Vibration
} from 'react-native'
import BarcodeScanner from 'react-native-barcodescanner'
import Icon from 'react-native-vector-icons/Ionicons'
import OverlayButton from '../components/base/OverlayButton'
//import Camera from 'react-native-camera'


const {height, width} = Dimensions.get('window')
const cameraSize = 250
const borderColor = 'rgba(255,255,255,0.6)'
const borderBoxSize = 35


class QRCode extends Component {
	constructor(props) {
		super(props)
		this.succesed = false
	}


	_onBarCodeRead(result) {
		const {router, actions} = this.props
		if (this.succesed) return

		this.succesed = true
		Vibration.vibrate()
		actions.checkToken(result.data, ()=> {
			router.pop()
			actions.toast('登陆成功')
		});
		router.pop()
	}


	_onClosePress() {
		this.props.router.pop()
	}


	render() {
		const closeIcon = (
			<OverlayButton
				position={{ right: 60, top: 60 }}
				onPress={this._onClosePress.bind(this)}>
				<View style={styles.iconWrapper}>
					<Icon
						name='ios-close-empty'
						size={35}
						color='rgba(255,255,255,0.7)'
						style={styles.closeIcon}/>
				</View>
			</OverlayButton>
		)


		// for android
		if (Platform.OS === 'android') {
			return (
				<View style={styles.cameraWrapper}>
					<BarcodeScanner
						onBarCodeRead={this._onBarCodeRead.bind(this)}
						style={styles.camera}/>
					{ closeIcon }
				</View>
			)
		}


		// for ios
		
	}
}


const styles = StyleSheet.create({
	cameraWrapper: {
		width,
		height
	},
	camera: {
		width: width,
		height: height,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cameraView: {
		height: cameraSize,
		width: cameraSize,
	},
	container: {
		height: 350
	},
	borderBox: {
		position: 'absolute',
		borderWidth: 2,
		height: borderBoxSize,
		width: borderBoxSize
	},
	borderLeftTop: {
		borderColor: 'transparent',
		borderLeftColor: borderColor,
		borderTopColor: borderColor,
		left: 0,
		top: 0
	},
	borderRightTop: {
		borderColor: 'transparent',
		borderRightColor: borderColor,
		borderTopColor: borderColor,
		right: 0,
		top: 0
	},
	borderLeftBottom: {
		borderColor: 'transparent',
		borderLeftColor: borderColor,
		borderBottomColor: borderColor,
		left: 0,
		bottom: 0
	},
	borderRightBottom: {
		borderColor: 'transparent',
		borderRightColor: borderColor,
		borderBottomColor: borderColor,
		right: 0,
		bottom: 0
	},
	infoText: {
		color: 'rgba(255,255,255,0.7)',
		textAlign: 'center',
		marginTop: 40,
		fontSize: 24
	},
	iconWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		width: 45
	},
	closeIcon: {
		flex: 1,
		textAlign: 'center'
	},
	buttonWrapper: {
		width: 35,
		height: 35,
		position: 'absolute',
		right: 30,
		top: 0
	}
})


export const LayoutComponent = QRCode
