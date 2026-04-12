import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <title>子远教育 - 专业留学咨询服务</title>
        <meta name="description" content="子远教育致力于为学生提供最优质的留学规划服务，帮助您实现海外名校梦想。" />
        <meta name="keywords" content="留学咨询,留学申请,语言培训,签证服务,背景提升" />
        <meta property="og:title" content="子远教育 - 专业留学咨询服务" />
        <meta property="og:description" content="子远教育致力于为学生提供最优质的留学规划服务" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}