import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../components/Button";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("with nothing", () => <Button>other change</Button>);
