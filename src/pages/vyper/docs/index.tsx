import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default class Docs extends Component {
  render() {
    return (
      <div>
        <AniLink paintDrip to="/vyper">
          Home
        </AniLink>
      </div>
    )
  }
}
