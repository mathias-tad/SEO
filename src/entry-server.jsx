
import {renderToString} from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router";
import { StrictMode } from "react";

export function render(_url) {
  const html = renderToString(
    <StrictMode>
    <StaticRouter location={_url}>
      <App />
    </StaticRouter>
    </StrictMode>
  )
  return { html }
}