import { ServerLocation } from "@reach/router"
import React from "react"
import App from "../src/App"

interface IServerApp {
  req: Request
}

const ServerApp = (props: IServerApp): JSX.Element => {
  return (
    <ServerLocation url={props.req.url}>
      <App />
    </ServerLocation>
  )
}

export default ServerApp
