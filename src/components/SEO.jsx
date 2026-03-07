import { Helmet } from 'react-helmet-async';
import { SITE_METADATA } from '../constants/seo';

/**
 * SEO Component for meta tags and Open Graph
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = SITE_METADATA.image,
  type = SITE_METADATA.type,
  canonicalUrl 
}) => {
  const fullTitle = title ? `${title} | Shreeram R` : 'Shreeram R - Full-Stack Developer';
  const siteUrl = canonicalUrl || SITE_METADATA.siteUrl + window.location.pathname;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_METADATA.author} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SITE_METADATA.siteUrl + image} />
      <meta property="og:locale" content={SITE_METADATA.locale} />
      <meta property="og:site_name" content="Shreeram R Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={SITE_METADATA.siteUrl + image} />
      {SITE_METADATA.twitterHandle && (
        <meta property="twitter:creator" content={SITE_METADATA.twitterHandle} />
      )}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};

export default SEO;
