import type { Preview } from "@storybook/react";

import "../src/styles/common.css";  //
import "../src/styles/globals.css"; //

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;