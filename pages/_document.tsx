import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="my gallery of photos from thejobyouhate"
          />
          <meta property="og:site_name" content="thewoowon.gallery" />
          <meta
            property="og:description"
            content="my gallery of photos from thejobyouhate"
          />
          <meta property="og:title" content="thejobyouhate gallery" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
