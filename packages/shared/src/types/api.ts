// packages/shared/src/types/api.ts

import { User } from "./database-types";

// Authentication
export interface RegisterRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: Omit<User, 'password_hash'>;
  token: string;
  expires_in: number;
}

// User Management
export interface UserProfile {
  id: string;
  email: string;
  tier: 'free' | 'paid';
  monthly_usage: number;
  usage_limit: number;
}

export interface UpgradeRequest {
  tier: 'paid';
}

// Content Types
export interface ContentIngestRequest {
  content: string;
  source_type: string;
  metadata?: Record<string, any>;
}

export interface ContentAnalysisResult {
  id: string;
  sentiment: string;
  sentiment_score: number;
  toxicity_score: number;
  topics: string[];
  summary?: string;
  processed_at: Date;
}

// Generic API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}