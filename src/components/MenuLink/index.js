import React from 'react'
import classNames from 'classnames';
import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom';

export default function MenuLink({ children, to }) {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={
        classNames(styles.link, {
          [styles.linkDestacado]: location.pathname === to
        })
      }>
      {children}
    </Link>
  )
}
