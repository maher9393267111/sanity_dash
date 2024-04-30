

// module.exports = {
//   webpack: (config, {
//       buildId,
//       dev,
//       isServer,
//       defaultLoaders,
//       webpack
//   }) => {
//       // Note: we provide webpack above so you should not `require` it
//       // Perform customizations to webpack config
//       config.plugins.push(
//           new webpack.ProvidePlugin({
//               $: "jquery",
//               jQuery: "jquery",
//               "window.jQuery": "jquery"
//           })
//       );
//       // Important: return the modified config
//       return config;
//   } ,
//   images: {
//     domains: ['i.imgur.com', 'cdn.sanity.io'],
//   },
//   experimental: {
//     appDir: true,
//   },
// }


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgur.com', 'cdn.sanity.io'],
  },
  experimental: {
    appDir: true,
  },

  webpack: (config, {
          buildId,
          dev,
          isServer,
          defaultLoaders,
          webpack
      }) => {
          // Note: we provide webpack above so you should not `require` it
          // Perform customizations to webpack config
          config.plugins.push(
              new webpack.ProvidePlugin({
                  $: "jquery",
                  jQuery: "jquery",
                  "window.jQuery": "jquery"
              })
          );
          // Important: return the modified config
          return config;
      } ,



};

module.exports = nextConfig;