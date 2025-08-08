import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export function SEOHead({
  title = "Yoakin Construction - Premier Construction Services in Ethiopia",
  description = "Leading construction company in Ethiopia specializing in residential, commercial, and infrastructure projects. 20+ years of excellence with 500+ completed projects across Ethiopia.",
  keywords = "construction Ethiopia, building contractor Addis Ababa, residential construction, commercial construction, infrastructure projects, Yoakin Construction",
  image = "/og-image.jpg",
  url = "https://yoakinconstruction.com",
  type = "website"
}: SEOHeadProps) {
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`
  const fullUrl = url

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Yoakin Construction" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme Colors */}
      <meta name="theme-color" content="#8B4513" />
      <meta name="msapplication-TileColor" content="#8B4513" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Yoakin Construction" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Yoakin Construction - Building Ethiopia's Future" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@yoakinconstruction" />
      <meta name="twitter:site" content="@yoakinconstruction" />
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Yoakin Construction",
  "description": "Premier construction services delivering exceptional residential, commercial, and infrastructure projects across Ethiopia",
  "url": "https://yoakinconstruction.com",
  "logo": "https://yoakinconstruction.com/logo_big.png",
  "image": "https://yoakinconstruction.com/og-image.jpg",
  "telephone": "+251 911 66-02-79",
  "email": "info@yoakinconstruction.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "CMC Michael Ethiopain Economic Association",
    "addressLocality": "Addis Ababa",
    "addressCountry": "ET"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.0054",
    "longitude": "38.7636"
  },
  "priceRange": "$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  }
})}
</script>
    </Helmet>
  )
}
