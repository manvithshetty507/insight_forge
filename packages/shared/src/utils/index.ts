// packages/shared/src/utils/index.ts

// JWT Utilities
export const generateTokenPayload = (user: User) => ({
  userId: user.id,
  email: user.email,
  tier: user.tier,
  exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
});

// Validation Utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

// API Response Utilities
export const createSuccessResponse = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  data,
  message
});

export const createErrorResponse = (error: string, message?: string): ApiResponse<null> => ({
  success: false,
  error,
  message
});

// Kafka Topic Names
export const KAFKA_TOPICS = {
  RAW_CONTENT: 'raw_content',
  PROCESSED_CONTENT: 'processed_content',
  USER_EVENTS: 'user_events'
} as const;