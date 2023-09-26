import process from "node:process";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  application: {
    mongodbUrl: process.env.MONGO_URL,
  },

  /**
   * Plug-ins
   *
   * See: https://getindiekit.com/configuration/#plugins
   */
  plugins: [
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
  ],

  /**
   * Publication options
   *
   * See: https://getindiekit.com/configuration/#publication
   */
  publication: {
    me: process.env.PUBLICATION_URL,
  },

  /**
   * GitHub content store options
   *
   * See: https://getindiekit.com/plugins/stores
   */
  "@indiekit/store-github": {
    user: process.env.GITHUB_USER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH,
  },

  /**
   * Mastodon syndicator options
   *
   * See: https://getindiekit.com/plugins/syndicators
   */
  "@indiekit/syndicator-mastodon": {
    checked: true,
    url: process.env.MASTODON_URL,
    user: process.env.MASTODON_USER,
  },
};

export default config;
