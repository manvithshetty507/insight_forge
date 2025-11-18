// packages/shared/src/constants/index.ts

export const USER_TIERS = {
  FREE: {
    name: 'free' as const,
    monthly_limit: 1000, // 1000 content items per month
    features: ['basic_analysis', '7_day_retention']
  },
  PAID: {
    name: 'paid' as const, 
    monthly_limit: 50000, // 50,000 content items per month
    features: ['advanced_analysis', 'real_time', '30_day_retention', 'priority_support']
  }
} as const;

export const SENTIMENT_LABELS = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative', 
  NEUTRAL: 'neutral'
} as const;

export const CONTENT_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  PROCESSED: 'processed',
  FAILED: 'failed'
} as const;

export const JWT_CONFIG = {
  EXPIRES_IN: '24h',
  ALGORITHM: 'HS256' as const
};