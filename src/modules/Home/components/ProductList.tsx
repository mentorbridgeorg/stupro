import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductData } from './ProductCard.types';

const productData: ProductData[] = [
  {
    id: '67920fe3ab5f975a3b78d09a',
    website:
      'https://www.producthunt.com/r/33MO2225PASGAU?utm_campaign=producthunt-api&utm_medium=api-v2&utm_source=Application%3A+testing+api+%28ID%3A+152698%29',
    tags: [
      {
        label: 'Developer Tools',
        slug: 'developer-tools',
      },
      {
        label: 'Artificial Intelligence',
        slug: 'artificial-intelligence',
      },
      {
        label: 'Development',
        slug: 'development',
      },
    ],
    thumbnail: {
      url: 'https://ph-files.imgix.net/c4d77076-9008-48e5-b10c-8a03297e3781.png?auto=format',
    },
    name: 'Trae',
    tagline: 'Adaptive AI IDE that helps you ship faster',
    description:
      'Trae is an adaptive AI IDE that transforms how you work, collaborating with you to run faster.',
    productHuntId: '799482',
    productHuntUrl:
      'https://www.producthunt.com/posts/trae?utm_campaign=producthunt-api&utm_medium=api-v2&utm_source=Application%3A+testing+api+%28ID%3A+152698%29',
    fetchedDate: '2025-01-23',
    isFavorite: true,
  },
  {
    id: '67920fe3ab5f975a3b78d09b',
    website:
      'https://www.producthunt.com/r/VPBRWT7QAWDJAL?utm_campaign=producthunt-api&utm_medium=api-v2&utm_source=Application%3A+testing+api+%28ID%3A+152698%29',
    tags: [
      {
        label: 'SaaS',
        slug: 'saas',
      },
      {
        label: 'Artificial Intelligence',
        slug: 'artificial-intelligence',
      },
      {
        label: 'Video',
        slug: 'video',
      },
    ],
    thumbnail: {
      url: 'https://ph-files.imgix.net/468cea6c-7213-4363-b4e2-14608e8229ab.gif?auto=format',
    },
    name: 'Zight Smart Actions',
    tagline: 'Turn videos into step-by-step guides',
    description:
      'Transform productivity by turning videos into AI-powered transcriptions, SOPs, bug reports, and more. With one-click sharing, smart categorization, and editing, it streamlines workflows. Try it free until 3/31/25 and experience the difference!',
    productHuntId: '793132',
    productHuntUrl:
      'https://www.producthunt.com/posts/zight-smart-actions?utm_campaign=producthunt-api&utm_medium=api-v2&utm_source=Application%3A+testing+api+%28ID%3A+152698%29',
    fetchedDate: '2025-01-23',
  },
];

export const ProductList = () => {
  return productData.map(data => <ProductCard key={data.id} data={data} />);
};
