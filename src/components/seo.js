import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ title }) {

  return (
    <Helmet
      title={title}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
