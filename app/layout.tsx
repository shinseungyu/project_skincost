import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

const SITE_NAME = '피부미용학원수강료비교';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://skinacademy.kr';
const TITLE = '피부미용학원 수강료 비교사이트 | 피부관리사·에스테틱·국비지원 가격 총정리 (2026)';
const DESC = '피부미용학원 수강료 비교 사이트. 피부미용학원비용·피부미용학원가격·국비지원 피부미용학원 정보를 2026년 최신 기준으로 총정리했습니다. 피부관리사 자격증·홈에스테틱·트러블 스킨케어·성장인자 전문가 과정 수강료까지 한눈에 비교하고 무료 상담으로 확인하세요.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  keywords: [
    '피부미용학원',
    '피부미용학원수강료',
    '피부미용학원비용',
    '피부미용학원가격',
    '피부관리사자격증',
    '국비지원피부미용학원',
    '에스테틱학원수강료',
    '홈에스테틱학원',
    '트러블스킨케어학원',
    '성장인자전문가과정',
    '피부미용학원비교사이트',
    '피부미용수강료비교',
    '피부관리사학원비',
    '피부미용자격증취득',
    '내일배움카드피부미용',
    '피부미용국비지원',
    '에스테틱자격증',
    '피부미용취업학원',
    '피부미용1인샵창업',
    '피부트러블케어학원',
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_NAME,
    title: TITLE,
    description: DESC,
  },
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, date: false, address: false, email: false },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
    'NaverBot': 'all',
    'Yeti': 'all',
    'googlebot': 'all',
    'subject': '피부미용학원수강료비교사이트',
    'title': TITLE,
    'publisher': SITE_NAME,
    'author': SITE_NAME,
    'location': 'South Korea',
    'distribution': 'global',
    'rating': 'general',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = SITE_URL;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: SITE_NAME,
        inLanguage: 'ko-KR',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/qna?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: `${siteUrl}/`,
        description: '피부미용학원 수강료·국비지원·자격증·취업 정보를 비교 제공하는 피부미용 전문 정보 사이트입니다.',
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        name: SITE_NAME,
        serviceType: '피부미용학원 수강료 비교 및 상담 서비스',
        areaServed: { '@type': 'Country', name: 'KR' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: TITLE,
        inLanguage: 'ko-KR',
        description: DESC,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['피부미용학원수강료', '피부관리사자격증', '국비지원피부미용학원', '홈에스테틱학원', '트러블스킨케어', '성장인자전문가'],
        mainEntity: { '@id': `${siteUrl}/#service` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: '과정 안내', item: `${siteUrl}/guide` },
          { '@type': 'ListItem', position: 3, name: 'FAQ', item: `${siteUrl}/qna` },
          { '@type': 'ListItem', position: 4, name: '정보게시판', item: `${siteUrl}/board` },
        ],
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} strategy="beforeInteractive" />
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="NaverBot" content="all" />
        <meta name="Yeti" content="all" />
        <meta httpEquiv="content-language" content="ko-KR" />
        <meta name="geo.region" content="KR" />
        <meta name="geo.country" content="KR" />
        <meta name="geo.placename" content="South Korea" />
        <meta name="classification" content="교육, 뷰티, 피부미용" />
        <meta name="category" content="피부미용학원 교육" />
        <meta name="copyright" content={SITE_NAME} />
        <meta name="revisit-after" content="7 days" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
        </Script>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className={geist.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
