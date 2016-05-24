'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	View,
	Image,
	ListView
} from 'react-native'

const MOVIE_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			loaded: false
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		fetch(MOVIE_URL)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
					loaded: true
				})
			})
			.catch(function(err) {
				alert(err)
			})
			.done()
		}
	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView()
		}
		
		return (
			<ListView
					style={styles.listView}
					dataSource={this.state.dataSource}
					renderRow={ this.renderMovie} />
		)
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>
					正在加载电影数据.....
				</Text>
			</View>
		)
	}

	renderMovie(movie) {
		return (
			<View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: movie.posters.thumbnail}} />
        <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
        </View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		paddingLeft: 20
	},
	rightContainer: {
		flex: 1
	},
	image: {
		width: 53,
		height: 81,
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center'
	},
	year: {
		textAlign: 'center'
	},
	listView: {
		paddingTop: 20,
		backgroundColor: "#F5FCFF"
	}
})

export default Movie