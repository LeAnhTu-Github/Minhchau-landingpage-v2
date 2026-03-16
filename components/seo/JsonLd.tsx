import React from 'react';

/**
 * Component to inject JSON-LD structured data for better SEO indexing.
 * @param {object} data - The structured data object to be stringified.
 */
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Minh Châu",
  "url": "https://minhchau.tech",
  "logo": "https://minhchau.tech/logo.png", // Replace with actual logo URL
  "description": "Cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA chuyên nghiệp.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84-xxx-xxx-xxx", // Replace with actual phone
    "contactType": "customer service",
    "areaServed": "VN",
    "availableLanguage": ["Vietnamese", "English"]
  },
  "sameAs": [
    "https://facebook.com/minhchau", // Replace with actual social links
    "https://linkedin.com/company/minhchau"
  ]
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development",
  "provider": {
    "@type": "Organization",
    "name": "Minh Châu"
  },
  "description": "Phát triển phần mềm, tích hợp viễn thông, và bảo trì SLA chuyên nghiệp."
};
