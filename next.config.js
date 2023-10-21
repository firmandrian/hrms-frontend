/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  '@fullcalendar/list',
  '@fullcalendar/timegrid'
])

const env = require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}.local` })

console.log('Current Environment : ' + process.env.NODE_ENV)
module.exports = withTM({
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false
  },

  env: { ...env.parsed },
  webpack: config => {
    // config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
})
