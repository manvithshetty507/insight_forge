// packages/shared/src/types/database.ts

// User Management
export interface User {
  id: string;
  email: string;
  password_hash: string;
  tier: 'free' | 'paid';
  monthly_usage: number;
  usage_limit: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserSession {
  id: string;
  user_id: string;
  token: string;
  expires_at: Date;
  created_at: Date;
}

// Content Management
export interface ContentSource {
  id: string;
  user_id: string;
  name: string;
  type: 'api' | 'file_upload' | 'webhook';
  config: Record<string, any>;
  created_at: Date;
}

export interface RawContent {
  id: string;
  source_id: string;
  user_id: string;
  content: string;
  metadata: Record<string, any>;
  status: 'pending' | 'processing' | 'processed' | 'failed';
  created_at: Date;
}

export interface ProcessedContent {
  id: string;
  raw_content_id: string;
  user_id: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  sentiment_score: number;
  toxicity_score: number;
  topics: string[];
  summary?: string;
  moderation_flags: string[];
  processed_at: Date;
}