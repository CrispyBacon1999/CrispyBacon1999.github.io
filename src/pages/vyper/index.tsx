import React, { Component } from "react"
import {
  Stack,
  Text,
  FontWeights,
  Shimmer,
  PrimaryButton,
} from "office-ui-fabric-react"
import "../index.css"

import { Colors } from "../../colors"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  NeutralColors,
  CommunicationColors,
} from "@uifabric/fluent-theme/lib/fluent/FluentColors"
import Card from "../../components/Card"
import Title from "../../components/Title"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

import posed from "react-pose"

import { loadTheme } from "office-ui-fabric-react"
import { Layout } from "../../components/Layout"

loadTheme({
  palette: Colors,
})

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

class App extends Component<{}, { loading: boolean; visible: number }> {
  loadIn: NodeJS.Timer

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      visible: 0,
    }
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 500)
  }

  render() {
    return (
      <Layout>
        <div
          style={{
            height: 400,
            width: "100%",
            marginBottom: -400,
            background: `linear-gradient(to top, ${Colors.themePrimary}, ${
              Colors.themeTertiary
            })`,
            boxShadow: Depths.depth8,
          }}
        />
        <Stack
          horizontalAlign="center"
          verticalAlign="center"
          verticalFill
          styles={{
            root: {
              width: "960px",
              margin: "0 auto",
              textAlign: "center",
              color: "#605e5c",
              fontFamily:
                "Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,sans-serif",
            },
          }}
          className="App"
          gap={15}
        >
          <Title visible={!this.state.loading}>vyper</Title>
          <Stack horizontal gap={25}>
            <Card visible={!this.state.loading} index={0} headline="Quick.">
              Have your bot up and running in less than 5 minutes.
            </Card>
            <Card visible={!this.state.loading} index={1} headline="Simple.">
              Designed to be easy to use with very little learning curve.
            </Card>
            <Card
              visible={!this.state.loading}
              index={2}
              headline="Extensible."
            >
              Extend with plugins to handle the toughest of tasks.
            </Card>
          </Stack>
          <div
            style={{
              boxShadow: Depths.depth8,
              paddingBottom: 20,
              width: 500,
            }}
          >
            <h2
              style={{
                fontFamily: "Lobster, cursive",
                fontSize: "2rem",
              }}
            >
              Installation
            </h2>
            <span
              style={{
                fontFamily: "Ubuntu Mono, monospace",
                fontSize: "1.2rem",
              }}
            >
              pip install vyper-bot
            </span>
          </div>
          <AniLink paintDrip hex={Colors.themePrimary} to="/vyper/docs">
            <PrimaryButton>Read the docs</PrimaryButton>
          </AniLink>
        </Stack>
      </Layout>
    )
  }
}

export default App
