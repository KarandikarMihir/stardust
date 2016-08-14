import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function MenuItem(props) {
  const { active, children, className, header } = props
  const classes = cx(
    className,
    useKeyOnly(active, 'active'),
    useKeyOnly(header, 'header'),
    'item',
  )
  const rest = getUnhandledProps(MenuItem, props)

  return <a {...rest} className={classes}>{children}</a>
}

MenuItem._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuItem.propTypes = {
  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content of the MenuItem. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,
}

export default MenuItem
