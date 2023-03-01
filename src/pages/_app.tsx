import '@styles/globals.scss'
import type { AppProps } from 'next/app'
// Next.js allows you to import CSS directly in .js files.
// It handles optimization and all the necessary Webpack configuration to make this work.
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SSRProvider } from 'react-bootstrap'
import { ProgressBar } from '@components/ProgressBar'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }: AppProps) => {
  // In server-side rendered applications, a SSRProvider must wrap the application in order
  // to ensure that the auto-generated ids are consistent between the server and client.
  // https://react-bootstrap.github.io/getting-started/server-side-rendering/
  return (
    <SSRProvider>
      <ProgressBar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </SSRProvider>
  )
};

export default MyApp
