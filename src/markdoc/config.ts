import { Config as MarkdocConfig } from '@markdoc/markdoc'

export const config: MarkdocConfig = {
  tags: {
    callout: {
      attributes: {
        type: {
          type: String,
          default: 'info',
          matches: ['info', 'warning', 'tip', 'danger'],
        },
        title: {
          type: String,
        },
      },
    },
    relatedPosts: {
      attributes: {
        category: {
          type: String,
          required: true,
        },
        limit: {
          type: Number,
          default: 3,
        },
      },
    },
    link: {
      attributes: {
        href: {
          type: String,
          required: true,
        },
        title: {
          type: String,
        },
      },
    },
  },
}
