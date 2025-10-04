
import {renderToString} from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";

export function render(_url) {
  const html = renderToString(
    <StaticRouter location={_url}>
      <App />
    </StaticRouter>
  )
  console.log("html", html)
  return { html }
}