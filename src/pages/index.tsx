import React, { Component } from "react"
import {
  Stack,
  Text,
  Link,
  FontWeights,
  Shimmer,
  PrimaryButton,
} from "office-ui-fabric-react"
import "./index.css"

import { NeutralColors } from "@uifabric/fluent-theme/lib/fluent/FluentColors"
import Card from "../components/Card"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

class App extends Component<{}, { loading: boolean }> {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  render() {
    return (
      <div>
        Joshbacon.com
        <AniLink fade to="/vyper">
          <PrimaryButton>Vyper</PrimaryButton>
        </AniLink>
      </div>
    )
  }
}

export default App
