// src/NewTabLink.tsx
import { jsx } from "react/jsx-runtime";
var NewTabLink = ({
  children,
  href,
  ...other
}) => {
  return /* @__PURE__ */ jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href,
    ...other,
    children
  });
};

// src/CounterButton.tsx
import * as React from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    style: {
      background: `rgba(0,0,0,0.05)`,
      borderRadius: `8px`,
      padding: "1.5rem",
      fontWeight: 500
    },
    children: [
      /* @__PURE__ */ jsxs("p", {
        style: { margin: "0 0 1.5rem 0" },
        children: [
          "This component is from",
          " ",
          /* @__PURE__ */ jsx2("code", {
            style: {
              padding: "0.2rem 0.3rem",
              background: `rgba(0,0,0,0.1)`,
              borderRadius: "0.25rem"
            },
            children: "ui 1"
          })
        ]
      }),
      /* @__PURE__ */ jsx2("div", {
        children: /* @__PURE__ */ jsxs("button", {
          style: {
            background: "black",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            display: "inline-block",
            cursor: "pointer"
          },
          type: "button",
          onClick: () => setCount((c) => c + 1),
          children: [
            "Count: ",
            count
          ]
        })
      })
    ]
  });
};
export {
  CounterButton,
  NewTabLink
};
