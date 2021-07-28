
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['nysyKGsi1K45a1qLZPNoXW'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  