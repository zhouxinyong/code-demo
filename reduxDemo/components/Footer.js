'use strict'
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
	<p>
		show
		{' '}
		<FilterLink filter="SHOW_ALL">
			ALL
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_ACTIVE">
			ACTIVE
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_COMPLETED">
			COMPLETED
		</FilterLink>
	</p>
)

export default Footer
