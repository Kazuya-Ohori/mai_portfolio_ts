import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

interface Props {}
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="stylesheet" type="text/css" href="https://use.typekit.net/xux2zlb.css" />
        </Head>
        <body id="app">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
