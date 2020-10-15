import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import Navbar from '../components/Navbar';
import { StateProvider } from '../store'

const TemplateWrapper = forwardRef((
  {
    className,
    children,
    ball,
    logo,
    initialized,
    currentIndex,
    logoName,
  },
  ref
) => {
  const { title, description } = useSiteMetadata()
  return (
    <StateProvider>
      <div ref={ref}>
        <Helmet>
          <html lang="en" className={className} />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />

          <script src="https://kit.fontawesome.com/b04f015872.js" crossorigin="anonymous" />

          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
          />

          <body className={className} />
        </Helmet>
        <Navbar
          ball={ball}
          logo={logo}
          initialized={initialized}
          currentIndex={currentIndex}
          logoName={logoName}
        />
        <div>{children}</div>
      </div>
    </StateProvider>
  )
});

export default TemplateWrapper
