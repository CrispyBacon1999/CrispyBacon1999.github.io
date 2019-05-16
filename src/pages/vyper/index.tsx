import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  FontWeights,
  loadTheme,
  PrimaryButton,
  Stack,
} from "office-ui-fabric-react"
import React, { Component } from "react"
import { Colors } from "../../colors"
import Card from "../../components/Card"
import { Layout } from "../../components/Layout"
import Title from "../../components/Title"
import InstallationCard from "../../components/InstallationCard"
import "../index.css"
import { GradientBackdrop } from "../../components/GradientBackdrop"

import { TelegramPlane, PlanePose } from "../../components/picture/Plane"

loadTheme({
  palette: Colors,
})

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

class App extends Component<
  {},
  {
    loading: boolean
    visible: number
    lifted: boolean
  }
> {
  loadIn: NodeJS.Timer

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      visible: 0,
      lifted: false,
    }
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 10)
    setTimeout(() => {
      this.setState({
        lifted: true,
      })
    }, 750)
  }

  render() {
    return (
      <Layout>
        <GradientBackdrop
          style={{
            width: "100%",
            marginBottom: -400,
          }}
          pose={[
            this.state.loading ? "loading" : "loaded",
            this.state.lifted ? "lifted" : "flat",
          ]}
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
            <Card
              visible={!this.state.loading}
              lifted={this.state.lifted}
              index={0}
              headline="Quick."
            >
              Have your bot up and running in less than 5 minutes.
            </Card>
            <Card
              visible={!this.state.loading}
              lifted={this.state.lifted}
              index={1}
              headline="Simple."
            >
              Designed to be easy to use with very little learning curve.
            </Card>
            <Card
              visible={!this.state.loading}
              lifted={this.state.lifted}
              index={2}
              headline="Extensible."
            >
              Extend with plugins to handle the toughest of tasks.
            </Card>
          </Stack>
          <InstallationCard />

          <AniLink paintDrip hex={Colors.themePrimary} to="/vyper/docs">
            <PrimaryButton>Read the docs</PrimaryButton>
          </AniLink>
        </Stack>
      </Layout>
    )
  }
}

export default App
