import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import ThemeRegistry from '../utils/ThemeRegistry'
 
export default function Layout({ children }: any) {
  return (
    <>
        <Head>
            <title>MTGaiden - Magic Deckbuilder Powered By AI</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        </Head>
        <body className="homepage is-preload">
          <ThemeRegistry options={{ key: 'mui-theme' }}>
            <div id="page-wrapper">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
          </ThemeRegistry>
        </body>
    </>
  )
};