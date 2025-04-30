/**
 * @file messages.ts
 * @description A comprehensive error message management file for TypeScript applications.
 * @version 1.0.0
 * @license MIT
 *
 * This file provides:
 * - Standardized error message formats across your application
 * - Human-friendly error messages for end-users
 * - Categorized error codes for easier debugging
 * - Severity levels for appropriate UI treatment
 * - Utility functions for error handling
 *
 * Organized by domain/category for easier reference and maintainability.
 */

declare global {
  interface ErrorConstructor {
    /**
     * Create a .stack property on a target object
     * @param targetObject The object to create the stack trace on
     * @param constructorOpt The function to be used as the constructor for the stack frames
     */
    captureStackTrace?(targetObject: object, constructorOpt?: Function): void;
  }
}

export type ErrorSeverity = "info" | "warning" | "error" | "critical";

/**
 * Standard error message interface that all errors conform to
 */
export interface ErrorMessage {
  /** Unique error code identifier (e.g., "AUTH001") */
  code: string;
  /** Technical error message for logs and developers */
  message: string;
  /** Human-friendly message suitable for displaying to end-users */
  userFriendlyMessage?: string;
  /** Error severity level - determines UI treatment and logging priority */
  severity: ErrorSeverity;
  /** Optional suggested action to resolve the error */
  suggestedAction?: string;
  /** Optional metadata for additional context (useful for logging or analytics) */
  metadata?: Record<string, unknown>;
}

// ===== AUTHENTICATION ERRORS =====
export const AuthErrors = {
  INVALID_CREDENTIALS: {
    code: "AUTH001",
    message: "Invalid email or password provided.",
    userFriendlyMessage: "The email or password you entered is incorrect. Please try again.",
    severity: "error",
    suggestedAction: 'Verify your credentials or use the "Forgot Password" option.',
  },
  ACCOUNT_LOCKED: {
    code: "AUTH002",
    message: "Account has been locked due to multiple failed login attempts.",
    userFriendlyMessage: "Your account has been temporarily locked for security reasons.",
    severity: "error",
    suggestedAction: "Please wait 30 minutes or contact support to unlock your account.",
  },
  SESSION_EXPIRED: {
    code: "AUTH003",
    message: "User session has expired.",
    userFriendlyMessage: "Your session has expired. Please log in again.",
    severity: "info",
    suggestedAction: "Log in again to continue.",
  },
  UNAUTHORIZED_ACCESS: {
    code: "AUTH004",
    message: "User does not have permission to access this resource.",
    userFriendlyMessage: "You don't have permission to access this feature.",
    severity: "error",
    suggestedAction: "Contact your administrator for access.",
  },
  TOKEN_EXPIRED: {
    code: "AUTH005",
    message: "Authentication token has expired.",
    userFriendlyMessage: "Your session has timed out. Please log in again.",
    severity: "info",
    suggestedAction: "Log in again to continue.",
  },
  INVALID_TOKEN: {
    code: "AUTH006",
    message: "Invalid or malformed authentication token.",
    userFriendlyMessage: "There was a problem with your login session.",
    severity: "error",
    suggestedAction: "Please log out and log in again.",
  },
  ACCOUNT_NOT_VERIFIED: {
    code: "AUTH007",
    message: "Account email has not been verified.",
    userFriendlyMessage: "Please verify your email address before logging in.",
    severity: "warning",
    suggestedAction: "Check your email for a verification link or request a new one.",
  },
  PASSWORD_RESET_REQUIRED: {
    code: "AUTH008",
    message: "Password reset is required before continuing.",
    userFriendlyMessage: "You need to change your password before continuing.",
    severity: "warning",
    suggestedAction: "Set a new password to proceed.",
  },
  MFA_REQUIRED: {
    code: "AUTH009",
    message: "Multi-factor authentication is required.",
    userFriendlyMessage: "Please enter your verification code to continue.",
    severity: "info",
    suggestedAction: "Check your authentication app or email for the verification code.",
  },
} as const;

// ===== VALIDATION ERRORS =====
export const ValidationErrors = {
  REQUIRED_FIELD: {
    code: "VAL001",
    message: "Required field is missing.",
    userFriendlyMessage: "This field is required.",
    severity: "error",
    suggestedAction: "Please complete all required fields.",
  },
  INVALID_EMAIL: {
    code: "VAL002",
    message: "Email address format is invalid.",
    userFriendlyMessage: "Please enter a valid email address.",
    severity: "error",
    suggestedAction: "Check the email format (e.g., example@domain.com).",
  },
  INVALID_PASSWORD: {
    code: "VAL003",
    message: "Password does not meet security requirements.",
    userFriendlyMessage: "Your password doesn't meet our security requirements.",
    severity: "error",
    suggestedAction: "Password must include at least 8 characters, upper and lowercase letters, a number, and a special character.",
  },
  PASSWORDS_DO_NOT_MATCH: {
    code: "VAL004",
    message: "Password and confirmation password do not match.",
    userFriendlyMessage: "The passwords you entered don't match.",
    severity: "error",
    suggestedAction: "Please make sure both passwords are identical.",
  },
  INVALID_PHONE: {
    code: "VAL005",
    message: "Phone number format is invalid.",
    userFriendlyMessage: "Please enter a valid phone number.",
    severity: "error",
    suggestedAction: "Check the phone number format (e.g., +1 123-456-7890).",
  },
  INVALID_DATE: {
    code: "VAL006",
    message: "Date format or value is invalid.",
    userFriendlyMessage: "Please enter a valid date.",
    severity: "error",
    suggestedAction: "Use the format MM/DD/YYYY or select from the date picker.",
  },
  STRING_TOO_SHORT: {
    code: "VAL007",
    message: "String is shorter than the minimum required length.",
    userFriendlyMessage: "This field is too short.",
    severity: "error",
    suggestedAction: "Please enter at least the minimum number of characters required.",
  },
  STRING_TOO_LONG: {
    code: "VAL008",
    message: "String exceeds the maximum allowed length.",
    userFriendlyMessage: "This field is too long.",
    severity: "error",
    suggestedAction: "Please shorten your input to the maximum length allowed.",
  },
  NUMBER_OUT_OF_RANGE: {
    code: "VAL009",
    message: "Number is outside of the acceptable range.",
    userFriendlyMessage: "Please enter a number within the allowed range.",
    severity: "error",
    suggestedAction: "Adjust your input to be within the minimum and maximum values.",
  },
  INVALID_FILE_TYPE: {
    code: "VAL010",
    message: "File type is not supported.",
    userFriendlyMessage: "This file type is not supported.",
    severity: "error",
    suggestedAction: "Please upload a file in one of the supported formats.",
  },
  FILE_TOO_LARGE: {
    code: "VAL011",
    message: "File size exceeds the maximum allowed limit.",
    userFriendlyMessage: "Your file is too large.",
    severity: "error",
    suggestedAction: "Please upload a file smaller than the maximum size limit.",
  },
  INVALID_URL: {
    code: "VAL012",
    message: "URL format is invalid.",
    userFriendlyMessage: "Please enter a valid URL.",
    severity: "error",
    suggestedAction: "Include http:// or https:// in your URL (e.g., https://example.com).",
  },
  DUPLICATE_ENTRY: {
    code: "VAL013",
    message: "Entry already exists in the system.",
    userFriendlyMessage: "This entry already exists.",
    severity: "error",
    suggestedAction: "Please use a unique value or edit the existing entry.",
  },
} as const;

// ===== API ERRORS =====
export const ApiErrors = {
  SERVER_ERROR: {
    code: "API001",
    message: "Internal server error occurred.",
    userFriendlyMessage: "Something went wrong on our end.",
    severity: "critical",
    suggestedAction: "Please try again later or contact support if the problem persists.",
  },
  SERVICE_UNAVAILABLE: {
    code: "API002",
    message: "Service is temporarily unavailable.",
    userFriendlyMessage: "This service is currently unavailable.",
    severity: "critical",
    suggestedAction: "Please try again later.",
  },
  TIMEOUT: {
    code: "API003",
    message: "Request timed out.",
    userFriendlyMessage: "The request took too long to complete.",
    severity: "error",
    suggestedAction: "Please check your internet connection and try again.",
  },
  RATE_LIMIT_EXCEEDED: {
    code: "API004",
    message: "API rate limit exceeded.",
    userFriendlyMessage: "You've made too many requests in a short period of time.",
    severity: "warning",
    suggestedAction: "Please wait before making more requests.",
  },
  BAD_REQUEST: {
    code: "API005",
    message: "Bad request - invalid parameters or payload.",
    userFriendlyMessage: "The request contains invalid information.",
    severity: "error",
    suggestedAction: "Please check your input and try again.",
  },
  NOT_FOUND: {
    code: "API006",
    message: "Requested resource not found.",
    userFriendlyMessage: "The item you're looking for doesn't exist.",
    severity: "error",
    suggestedAction: "Check that you're using the correct ID or try searching again.",
  },
  CONFLICT: {
    code: "API007",
    message: "Request conflicts with current state of the resource.",
    userFriendlyMessage: "This operation can't be completed due to a conflict.",
    severity: "error",
    suggestedAction: "The resource may have been modified. Please refresh and try again.",
  },
  FORBIDDEN: {
    code: "API008",
    message: "Access to the requested resource is forbidden.",
    userFriendlyMessage: "You don't have permission to access this resource.",
    severity: "error",
    suggestedAction: "Contact your administrator for access rights.",
  },
  PAYLOAD_TOO_LARGE: {
    code: "API009",
    message: "Request payload is too large.",
    userFriendlyMessage: "The data you're trying to send is too large.",
    severity: "error",
    suggestedAction: "Reduce the size of your request and try again.",
  },
} as const;

// ===== DATABASE ERRORS =====
export const DatabaseErrors = {
  CONNECTION_FAILED: {
    code: "DB001",
    message: "Failed to connect to the database.",
    userFriendlyMessage: "We're having trouble connecting to our database.",
    severity: "critical",
    suggestedAction: "Please try again later or contact support.",
  },
  QUERY_FAILED: {
    code: "DB002",
    message: "Database query failed to execute.",
    userFriendlyMessage: "We couldn't complete your request.",
    severity: "error",
    suggestedAction: "Please try again or contact support if the problem persists.",
  },
  RECORD_NOT_FOUND: {
    code: "DB003",
    message: "Database record not found.",
    userFriendlyMessage: "The item you're looking for doesn't exist.",
    severity: "error",
    suggestedAction: "Check that you're using the correct ID or try searching with different criteria.",
  },
  DUPLICATE_KEY: {
    code: "DB004",
    message: "Duplicate key violation.",
    userFriendlyMessage: "This item already exists in our system.",
    severity: "error",
    suggestedAction: "Please use a unique value or update the existing item.",
  },
  FOREIGN_KEY_VIOLATION: {
    code: "DB005",
    message: "Foreign key constraint violation.",
    userFriendlyMessage: "This operation would break a relationship with another item.",
    severity: "error",
    suggestedAction: "Please check related items before making this change.",
  },
  TRANSACTION_FAILED: {
    code: "DB006",
    message: "Database transaction failed.",
    userFriendlyMessage: "We couldn't complete all steps of your request.",
    severity: "error",
    suggestedAction: "Please try again or contact support.",
  },
  DATA_CORRUPTION: {
    code: "DB007",
    message: "Data corruption detected.",
    userFriendlyMessage: "There's a problem with the data integrity.",
    severity: "critical",
    suggestedAction: "Please contact support immediately.",
  },
} as const;

// ===== NETWORK ERRORS =====
export const NetworkErrors = {
  NO_INTERNET: {
    code: "NET001",
    message: "No internet connection detected.",
    userFriendlyMessage: "You appear to be offline.",
    severity: "warning",
    suggestedAction: "Please check your internet connection and try again.",
  },
  WEAK_CONNECTION: {
    code: "NET002",
    message: "Weak or unstable internet connection.",
    userFriendlyMessage: "Your internet connection is unstable.",
    severity: "warning",
    suggestedAction: "Try moving to an area with better reception or connecting to a different network.",
  },
  DNS_RESOLUTION_FAILED: {
    code: "NET003",
    message: "DNS resolution failed.",
    userFriendlyMessage: "We couldn't connect to our servers.",
    severity: "error",
    suggestedAction: "Try using a different network or check your DNS settings.",
  },
  CONNECTION_REFUSED: {
    code: "NET004",
    message: "Connection refused by the server.",
    userFriendlyMessage: "We couldn't establish a connection with our servers.",
    severity: "error",
    suggestedAction: "Please try again later or contact support.",
  },
  SSL_ERROR: {
    code: "NET005",
    message: "SSL/TLS certificate validation error.",
    userFriendlyMessage: "There's a security issue with the connection.",
    severity: "error",
    suggestedAction: "Check your device time and date settings or try using a different network.",
  },
} as const;

// ===== FILE SYSTEM ERRORS =====
export const FileSystemErrors = {
  FILE_NOT_FOUND: {
    code: "FS001",
    message: "File not found at specified path.",
    userFriendlyMessage: "The file you're looking for doesn't exist.",
    severity: "error",
    suggestedAction: "Check the file path and try again.",
  },
  PERMISSION_DENIED: {
    code: "FS002",
    message: "Permission denied to access file or directory.",
    userFriendlyMessage: "You don't have permission to access this file.",
    severity: "error",
    suggestedAction: "Check your access permissions or contact your administrator.",
  },
  DISK_FULL: {
    code: "FS003",
    message: "Insufficient disk space for operation.",
    userFriendlyMessage: "You've run out of storage space.",
    severity: "error",
    suggestedAction: "Free up some disk space and try again.",
  },
  FILE_CORRUPTED: {
    code: "FS004",
    message: "File is corrupted or damaged.",
    userFriendlyMessage: "This file appears to be damaged.",
    severity: "error",
    suggestedAction: "Try uploading a different copy of the file.",
  },
  FILE_LOCKED: {
    code: "FS005",
    message: "File is locked by another process.",
    userFriendlyMessage: "This file is currently in use by another program.",
    severity: "warning",
    suggestedAction: "Close any programs that might be using this file and try again.",
  },
  DIRECTORY_NOT_EMPTY: {
    code: "FS006",
    message: "Directory is not empty and cannot be deleted.",
    userFriendlyMessage: "This folder must be empty before it can be deleted.",
    severity: "warning",
    suggestedAction: "Remove all files from the folder first.",
  },
} as const;

// ===== PAYMENT ERRORS =====
export const PaymentErrors = {
  PAYMENT_FAILED: {
    code: "PAY001",
    message: "Payment processing failed.",
    userFriendlyMessage: "Your payment couldn't be processed.",
    severity: "error",
    suggestedAction: "Please check your payment details and try again.",
  },
  INSUFFICIENT_FUNDS: {
    code: "PAY002",
    message: "Insufficient funds in account.",
    userFriendlyMessage: "There aren't enough funds to complete this payment.",
    severity: "error",
    suggestedAction: "Please use a different payment method or add funds to your account.",
  },
  CARD_EXPIRED: {
    code: "PAY003",
    message: "Payment card has expired.",
    userFriendlyMessage: "Your card has expired.",
    severity: "error",
    suggestedAction: "Please update your card information or use a different payment method.",
  },
  CARD_DECLINED: {
    code: "PAY004",
    message: "Payment card was declined by the issuer.",
    userFriendlyMessage: "Your card was declined.",
    severity: "error",
    suggestedAction: "Please contact your bank or use a different payment method.",
  },
  INVALID_CARD_NUMBER: {
    code: "PAY005",
    message: "Invalid credit card number provided.",
    userFriendlyMessage: "The card number you entered isn't valid.",
    severity: "error",
    suggestedAction: "Please check your card number and try again.",
  },
  GATEWAY_ERROR: {
    code: "PAY006",
    message: "Payment gateway error occurred.",
    userFriendlyMessage: "There was a problem with our payment processor.",
    severity: "error",
    suggestedAction: "Please try again later or use a different payment method.",
  },
  SUBSCRIPTION_EXPIRED: {
    code: "PAY007",
    message: "User subscription has expired.",
    userFriendlyMessage: "Your subscription has expired.",
    severity: "warning",
    suggestedAction: "Please renew your subscription to continue.",
  },
  CURRENCY_NOT_SUPPORTED: {
    code: "PAY008",
    message: "The specified currency is not supported.",
    userFriendlyMessage: "We don't support this currency for payments.",
    severity: "error",
    suggestedAction: "Please try again with a supported currency.",
  },
} as const;

// ===== BUSINESS LOGIC ERRORS =====
export const BusinessErrors = {
  QUOTA_EXCEEDED: {
    code: "BIZ001",
    message: "User quota or limit has been exceeded.",
    userFriendlyMessage: "You've reached your usage limit.",
    severity: "warning",
    suggestedAction: "Upgrade your plan to increase your limits.",
  },
  FEATURE_UNAVAILABLE: {
    code: "BIZ002",
    message: "Feature is not available in user's current plan.",
    userFriendlyMessage: "This feature isn't available in your current plan.",
    severity: "warning",
    suggestedAction: "Upgrade to access this feature.",
  },
  OPERATION_NOT_ALLOWED: {
    code: "BIZ003",
    message: "Operation not allowed in current state.",
    userFriendlyMessage: "This action can't be performed right now.",
    severity: "error",
    suggestedAction: "Check the requirements for this operation and try again.",
  },
  RESOURCE_EXHAUSTED: {
    code: "BIZ004",
    message: "Resource allocation has been exhausted.",
    userFriendlyMessage: "You've used all of your available resources.",
    severity: "warning",
    suggestedAction: "Free up resources or upgrade your plan.",
  },
  DEPENDENCIES_MISSING: {
    code: "BIZ005",
    message: "Required dependencies are missing for this operation.",
    userFriendlyMessage: "Some required components are missing.",
    severity: "error",
    suggestedAction: "Please install or configure the necessary components first.",
  },
  EVENT_CONFLICT: {
    code: "BIZ006",
    message: "Event or appointment conflicts with existing booking.",
    userFriendlyMessage: "This time slot is already booked.",
    severity: "warning",
    suggestedAction: "Please select a different time.",
  },
  ACCOUNT_SUSPENDED: {
    code: "BIZ007",
    message: "User account has been suspended.",
    userFriendlyMessage: "Your account has been suspended.",
    severity: "critical",
    suggestedAction: "Please contact customer support for assistance.",
  },
} as const;

// ===== EXTERNAL SERVICE ERRORS =====
export const ExternalServiceErrors = {
  INTEGRATION_FAILED: {
    code: "EXT001",
    message: "External service integration failed.",
    userFriendlyMessage: "We couldn't connect to an external service.",
    severity: "error",
    suggestedAction: "Please try again later or contact support.",
  },
  API_KEY_INVALID: {
    code: "EXT002",
    message: "Invalid or expired API key for external service.",
    userFriendlyMessage: "There's an authentication problem with an external service.",
    severity: "error",
    suggestedAction: "Please update your API credentials or contact support.",
  },
  SERVICE_QUOTA_EXCEEDED: {
    code: "EXT003",
    message: "External service quota or rate limit exceeded.",
    userFriendlyMessage: "We've hit the limit on one of our external services.",
    severity: "warning",
    suggestedAction: "Please try again later or contact support.",
  },
  WEBHOOK_FAILED: {
    code: "EXT004",
    message: "Webhook delivery to external service failed.",
    userFriendlyMessage: "We couldn't deliver a notification to an external service.",
    severity: "warning",
    suggestedAction: "Please check your webhook configuration or try again later.",
  },
  INCOMPATIBLE_VERSION: {
    code: "EXT005",
    message: "Incompatible API version for external service.",
    userFriendlyMessage: "There's a compatibility issue with an external service.",
    severity: "error",
    suggestedAction: "Please update your integration or contact support.",
  },
} as const;

// ===== SECURITY ERRORS =====
export const SecurityErrors = {
  CSRF_VALIDATION_FAILED: {
    code: "SEC001",
    message: "CSRF token validation failed.",
    userFriendlyMessage: "Security verification failed.",
    severity: "critical",
    suggestedAction: "Please refresh the page and try again.",
  },
  IP_BLOCKED: {
    code: "SEC002",
    message: "IP address has been blocked due to suspicious activity.",
    userFriendlyMessage: "Your IP address has been temporarily blocked.",
    severity: "critical",
    suggestedAction: "Contact support if you believe this is an error.",
  },
  CAPTCHA_FAILED: {
    code: "SEC003",
    message: "CAPTCHA verification failed.",
    userFriendlyMessage: "Human verification failed.",
    severity: "warning",
    suggestedAction: "Please try the verification again.",
  },
  SUSPICIOUS_ACTIVITY: {
    code: "SEC004",
    message: "Suspicious activity detected on account.",
    userFriendlyMessage: "We've detected unusual activity on your account.",
    severity: "critical",
    suggestedAction: "Please verify your identity or contact support.",
  },
  BRUTE_FORCE_DETECTED: {
    code: "SEC005",
    message: "Brute force attack detected.",
    userFriendlyMessage: "Too many failed attempts.",
    severity: "critical",
    suggestedAction: "Please wait before trying again or reset your password.",
  },
} as const;

// ===== LOCALIZATION ERRORS =====
export const LocalizationErrors = {
  TRANSLATION_MISSING: {
    code: "LOC001",
    message: "Translation key missing for current locale.",
    userFriendlyMessage: "Some text couldn't be displayed in your language.",
    severity: "info",
    suggestedAction: "Some content may appear in the default language.",
  },
  LOCALE_NOT_SUPPORTED: {
    code: "LOC002",
    message: "Requested locale is not supported.",
    userFriendlyMessage: "Your preferred language isn't available yet.",
    severity: "info",
    suggestedAction: "Content will be displayed in our default language.",
  },
  CURRENCY_FORMAT_ERROR: {
    code: "LOC003",
    message: "Error formatting currency for locale.",
    userFriendlyMessage: "There was a problem displaying prices in your local format.",
    severity: "warning",
    suggestedAction: "Prices will be shown in our default format.",
  },
  DATE_FORMAT_ERROR: {
    code: "LOC004",
    message: "Error formatting date for locale.",
    userFriendlyMessage: "There was a problem displaying dates in your local format.",
    severity: "warning",
    suggestedAction: "Dates will be shown in our default format.",
  },
} as const;

// ===== Helper function to create custom errors =====
/**
 * Creates a custom error message object with the specified properties
 *
 * @param code - Unique error code identifier
 * @param message - Technical error message for logs/developers
 * @param userFriendlyMessage - Human-friendly message for end-users
 * @param severity - Error severity level
 * @param suggestedAction - Optional suggested action to resolve the error
 * @param metadata - Optional additional data for context
 * @returns A properly formatted ErrorMessage object
 *
 * @example
 * const customError = createCustomError(
 *   "CUSTOM001",
 *   "Failed to process import due to malformed CSV",
 *   "The uploaded file couldn't be processed.",
 *   "error",
 *   "Please ensure your CSV matches the required format."
 * );
 */
export function createCustomError(
  code: string,
  message: string,
  userFriendlyMessage: string,
  severity: ErrorMessage["severity"],
  suggestedAction?: string,
  metadata?: Record<string, unknown>
): ErrorMessage {
  return {
    code,
    message,
    userFriendlyMessage,
    severity,
    suggestedAction,
    metadata,
  };
}

// ===== Error utility functions =====

/**
 * Get error details by code
 * @param errorCode The error code to look up
 * @returns The error message object or undefined if not found
 *
 * @example
 * const error = getErrorByCode("AUTH001");
 * if (error) {
 *   console.log(error.message);
 * }
 */
export function getErrorByCode(errorCode: string): ErrorMessage | undefined {
  const allErrorCategories = [
    AuthErrors,
    ValidationErrors,
    ApiErrors,
    DatabaseErrors,
    NetworkErrors,
    FileSystemErrors,
    PaymentErrors,
    BusinessErrors,
    ExternalServiceErrors,
    SecurityErrors,
    LocalizationErrors,
  ];

  for (const category of allErrorCategories) {
    const foundError = Object.values(category).find((error) => error.code === errorCode);
    if (foundError) {
      return foundError;
    }
  }

  return undefined;
}

/**
 * Get all errors from a specific category
 * @param category The name of the error category (e.g., "auth", "validation")
 * @returns Array of error message objects or empty array if category not found
 *
 * @example
 * const allAuthErrors = getErrorsByCategory("auth");
 */
export function getErrorsByCategory(category: string): ErrorMessage[] {
  const categoryMap: Record<string, Record<string, ErrorMessage>> = {
    auth: AuthErrors,
    validation: ValidationErrors,
    api: ApiErrors,
    database: DatabaseErrors,
    network: NetworkErrors,
    filesystem: FileSystemErrors,
    payment: PaymentErrors,
    business: BusinessErrors,
    external: ExternalServiceErrors,
    security: SecurityErrors,
    localization: LocalizationErrors,
  };

  const categoryErrors = categoryMap[category.toLowerCase()];
  return categoryErrors ? Object.values(categoryErrors) : [];
}

/**
 * Format an error for logging purposes
 * @param error The error message object
 * @returns Formatted error string for logging
 *
 * @example
 * console.error(formatErrorForLogging(AuthErrors.INVALID_CREDENTIALS));
 */
export function formatErrorForLogging(error: ErrorMessage): string {
  const metadata = error.metadata ? ` | Metadata: ${JSON.stringify(error.metadata)}` : "";
  return `[${error.code}] ${error.severity.toUpperCase()}: ${error.message}${metadata}`;
}

/**
 * Format an error for display to users
 * @param error The error message object
 * @returns User-friendly error object
 *
 * @example
 * const userMessage = formatErrorForUser(AuthErrors.INVALID_CREDENTIALS);
 * showToast(userMessage.message, { type: userMessage.severity });
 */
export function formatErrorForUser(error: ErrorMessage): {
  message: string;
  action?: string;
  severity: ErrorMessage["severity"];
} {
  return {
    message: error.userFriendlyMessage || error.message,
    action: error.suggestedAction,
    severity: error.severity,
  };
}

/**
 * Format an error for JSON response in API calls
 * @param error The error message object
 * @returns API response error object
 *
 * @example
 * return res.status(401).json(formatErrorForApi(AuthErrors.INVALID_CREDENTIALS));
 */
export function formatErrorForApi(error: ErrorMessage): {
  code: string;
  message: string;
  status: string;
} {
  // Map severity to HTTP-like status names
  const statusMap: Record<ErrorMessage["severity"], string> = {
    info: "INFO",
    warning: "WARNING",
    error: "ERROR",
    critical: "CRITICAL_ERROR",
  };

  return {
    code: error.code,
    message: error.userFriendlyMessage || error.message,
    status: statusMap[error.severity],
  };
}

/**
 * Map error severity to HTTP status codes
 * @param severity The error severity
 * @returns Appropriate HTTP status code for the given severity
 *
 * @example
 * const error = getErrorByCode("AUTH001");
 * return res.status(getHttpStatusFromSeverity(error.severity)).json(formatErrorForApi(error));
 */
export function getHttpStatusFromSeverity(severity: ErrorMessage["severity"]): number {
  const statusMap: Record<ErrorMessage["severity"], number> = {
    info: 200,
    warning: 400,
    error: 400,
    critical: 500,
  };

  return statusMap[severity] || 500;
}

// Export a combined object of all error categories
export const AllErrors = {
  ...AuthErrors,
  ...ValidationErrors,
  ...ApiErrors,
  ...DatabaseErrors,
  ...NetworkErrors,
  ...FileSystemErrors,
  ...PaymentErrors,
  ...BusinessErrors,
  ...ExternalServiceErrors,
  ...SecurityErrors,
  ...LocalizationErrors,
};

/**
 * Error class that can be thrown in application code
 */
export class AppError extends Error {
  /** Error code identifier */
  code: string;
  /** User-friendly error message */
  userFriendlyMessage: string;
  /** Error severity level */
  severity: ErrorMessage["severity"];
  /** Suggested action to resolve the error */
  suggestedAction?: string;
  /** Additional metadata for context */
  metadata?: Record<string, unknown>;

  /**
   * Create a new AppError from an ErrorMessage object
   * @param errorObj The error message object
   *
   * @example
   * throw new AppError(ValidationErrors.INVALID_PASSWORD);
   */
  constructor(errorObj: ErrorMessage) {
    super(errorObj.message);
    this.name = "AppError";
    this.code = errorObj.code;
    this.userFriendlyMessage = errorObj.userFriendlyMessage || errorObj.message;
    this.severity = errorObj.severity;
    this.suggestedAction = errorObj.suggestedAction;
    this.metadata = errorObj.metadata;

    // Maintains proper stack trace for where error was thrown (V8 engines)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }

  /**
   * Create a new AppError from an error code
   * @param code The error code to use
   * @param metadata Optional metadata to include with the error
   *
   * @example
   * throw AppError.fromCode("AUTH001", { userId: "123" });
   */
  static fromCode(code: string, metadata?: Record<string, unknown>): AppError {
    const errorObj = getErrorByCode(code);
    if (!errorObj) {
      throw new Error(`Unknown error code: ${code}`);
    }
    const error = new AppError(errorObj);
    if (metadata) {
      error.metadata = metadata;
    }
    return error;
  }

  /**
   * Get a user-friendly representation of this error
   * @returns Formatted user message
   */
  getUserMessage(): ReturnType<typeof formatErrorForUser> {
    return formatErrorForUser(this);
  }

  /**
   * Get a log-friendly representation of this error
   * @returns Formatted error string for logging
   */
  getLogMessage(): string {
    return formatErrorForLogging(this);
  }

  /**
   * Get an API-friendly representation of this error
   * @returns API response error object
   */
  getApiResponse(): ReturnType<typeof formatErrorForApi> {
    return formatErrorForApi(this);
  }

  /**
   * Get the appropriate HTTP status code for this error
   * @returns HTTP status code
   */
  getHttpStatus(): number {
    return getHttpStatusFromSeverity(this.severity);
  }
}

export const VERSION = "1.0.0";
