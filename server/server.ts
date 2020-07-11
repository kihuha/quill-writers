import express from "express"
import { createElement } from "react"
import { renderToNodeStream } from "react-dom/server"
import ServerApp from "../src/serverApp"
import fs from "fs"

const port = process.env.PORT || 3000

const server = express()
server.use(express.static("dist"))

const html = fs.readFileSync("dist/index.html", "utf8")
const parts = html.split("loading")

server.use((req, res) => {
  res.write(parts[0])
  const stream = renderToNodeStream(createElement(ServerApp, { req }))

  stream.pipe(res, { end: false })

  stream.on("end", () => {
    res.write(parts[1])
    res.end()
  })
})

console.log(`listening on port ${port}`)
server.listen(port)
