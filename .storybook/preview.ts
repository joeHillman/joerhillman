import type { Preview } from "@storybook/react";
import '!style-loader!css-loader!sass-loader!../development/stylesheets/global.scss';

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
