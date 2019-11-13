import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Dynamic Time Component'

export default class AppTitle extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    )
  }
}