import React, { Component } from "react"
import { Stack } from "office-ui-fabric-react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Colors } from "../colors"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

export class Layout extends Component<{}, {}> {
  render() {
    return (
      <div
        className="layout"
        style={{
          background: Colors.neutralLighterAlt,
        }}
      >
        <div
          className="content"
          style={{
            minHeight: "100vh",
            boxShadow: Depths.depth8,
          }}
        >
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export class Footer extends Component<{}, {}> {
  render() {
    return (
      <div
        className="footer"
        style={{
          padding: 40,
        }}
      >
        <Stack horizontal gap={50}>
          <Stack>
            <h3>Josh Bacon</h3>
            <AniLink paintDrip hex={Colors.black} to="/">
              Home
            </AniLink>
          </Stack>
          <Stack>
            <h3>vyper</h3>
            <AniLink
              cover
              direction="left"
              bg={Colors.themePrimary}
              to="/vyper"
            >
              Home
            </AniLink>
          </Stack>
        </Stack>
      </div>
    )
  }
}
