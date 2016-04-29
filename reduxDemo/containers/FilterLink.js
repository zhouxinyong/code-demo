'use strict';

import {
	connect
} from 'react-redux';
import {
	setVisibilityFilter
} from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownPros) => {
	return {
		active: ownPros.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownPros) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownPros.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

export default FilterLink;