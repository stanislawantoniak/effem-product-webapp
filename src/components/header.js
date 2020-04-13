import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header>
		<div>
			<h1>
				{siteTitle}
			</h1>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
	activeItem: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
	activeItem: `0`,
}

export default Header
