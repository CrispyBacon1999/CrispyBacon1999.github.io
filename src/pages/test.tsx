import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default class Test extends Component {
  render() {
    return (
      <AniLink fade to="/">
        Test
      </AniLink>
    )
  }
}
