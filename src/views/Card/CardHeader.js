import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  META,
} from '../../lib'

function CardHeader(props) {
  const { className, children, content, ...rest } = props
  const classes = cx(className, 'header')

  return <div {...rest} className={classes}>{children || content}</div>
}

CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.every([
    customPropTypes.disallow(['header']),
    PropTypes.node,
  ]),
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardHeader
