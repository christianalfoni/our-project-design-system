import { loadStories } from "./load-stories";
import { configure } from "@storybook/react";

configure(loadStories, module);
