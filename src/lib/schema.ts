export function generateBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://whichhealthshare.com${item.url}`
    }))
  }
}

export function generateReviewSchema(ministry: any) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Review', 'Product'],
    name: `${ministry.name} Review`,
    author: {
      '@type': 'Organization',
      name: 'WhichHealthShare'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: ministry.rating,
      bestRating: 5,
      worstRating: 1
    },
    description: ministry.aiSummary,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: ministry.plans[0]?.monthlyRange?.individual?.min || 0,
      highPrice: ministry.plans[0]?.monthlyRange?.individual?.max || 0
    }
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateArticleSchema(title: string, description: string, author: string = 'WhichHealthShare') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: author
    },
    datePublished: new Date().toISOString()
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WhichHealthShare',
    url: 'https://whichhealthshare.com',
    logo: 'https://whichhealthshare.com/logo.png',
    sameAs: ['https://twitter.com/whichhealthshare'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'hello@whichhealthshare.com'
    }
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://whichhealthshare.com',
    name: 'WhichHealthShare',
    description: 'Compare health sharing plans, CrowdHealth, and insurance alternatives',
    searchAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://whichhealthshare.com/search?q={search_term_string}'
      },
      query_input: 'required name=search_term_string'
    }
  }
}
