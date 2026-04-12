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
        
        {/* Structured Data - Organization Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "深圳市子远教育咨询有限公司",
              "description": "专业留学咨询服务，帮助学生实现海外名校梦想",
              "url": "https://ziyuanyu.com",
              "telephone": "400-123-4567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "深圳市",
                "addressRegion": "南山区",
                "streetAddress": "科技园南区深圳湾科技生态园"
              },
              "logo": "https://ziyuanyu.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/ziyuanyu",
                "https://www.instagram.com/ziyuanyu",
                "https://www.linkedin.com/company/ziyuanyu"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}