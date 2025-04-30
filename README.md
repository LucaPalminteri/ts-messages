# Error Messages File

A comprehensive error message management file for TypeScript applications. This is a standalone file that you can copy and paste directly into your projects to standardize error handling with categorized error codes, human-friendly messages, and powerful utility functions.

## Features

- ✅ **Standardized Error Format** - Consistent structure for all error messages
- 🔍 **Categorized Error Codes** - Organized by domain for easy debugging
- 👤 **User-Friendly Messages** - Human-readable messages for end users
- 🚨 **Severity Levels** - Different levels for appropriate UI treatment
- 🔧 **Utility Functions** - Helper functions for error handling
- 🌐 **Internationalization Ready** - Support for localized error messages
- 🛡️ **TypeScript Support** - Full type safety with TypeScript
- 📝 **Detailed Documentation** - Comprehensive documentation and examples

## How to Use

1. **Copy the `messages.ts` file** from this repository
2. **Paste it into your project**
3. **Import the necessary components** in your code

That's it! No NPM installations or package dependencies required.


## Error Code Reference

Below is a sample of the available error codes. For the full list, refer to the source code.

### Authentication Errors

| Code    | Message                                             |
|---------|-----------------------------------------------------|
| AUTH001 | Invalid email or password provided                  |
| AUTH002 | Account has been locked due to multiple failed login attempts |
| AUTH003 | User session has expired                            |
| AUTH004 | User does not have permission to access this resource |

### Validation Errors

| Code    | Message                                             |
|---------|-----------------------------------------------------|
| VAL001  | Required field is missing                           |
| VAL002  | Email address format is invalid                     |
| VAL003  | Password does not meet security requirements        |
| VAL004  | Password and confirmation password do not match     |

### API Errors

| Code    | Message                                             |
|---------|-----------------------------------------------------|
| API001  | Internal server error occurred                      |
| API002  | Service is temporarily unavailable                  |
| API003  | Request timed out                                   |
| API004  | API rate limit exceeded                             |

## Quick Start

```typescript
import { AppError, ValidationErrors } from './path/to/messages';

try {
  // Your application code
  if (!isValidEmail(email)) {
    throw new AppError(ValidationErrors.INVALID_EMAIL);
  }
} catch (error) {
  if (error instanceof AppError) {
    console.error(error.getLogMessage());
    showToast(error.getUserMessage().message, error.getUserMessage().severity);
  } else {
    // Handle unexpected errors
    console.error(error);
    showToast('An unexpected error occurred', 'error');
  }
}
```

## Error Categories

The library provides pre-defined error categories covering common scenarios:

- **Authentication** - Login, session, and access control errors
- **Validation** - Input validation errors
- **API** - API communication errors
- **Database** - Database connection and query errors
- **Network** - Network connectivity issues
- **File System** - File operations errors
- **Payment** - Payment processing errors
- **Business Logic** - Application-specific business rules errors
- **External Services** - Third-party integration errors
- **Security** - Security-related errors
- **Localization** - Translation and formatting errors

## Error Structure

Each error message follows this structure:

```typescript
interface ErrorMessage {
  code: string;                   // Unique error code identifier (e.g., "AUTH001")
  message: string;                // Technical error message for logs and developers
  userFriendlyMessage?: string;   // Human-friendly message for end-users
  severity: "info" | "warning" | "error" | "critical"; // Error severity level
  suggestedAction?: string;       // Optional suggested action to resolve the error
  metadata?: Record<string, unknown>; // Optional metadata for additional context
}
```

## Usage Examples

### Basic Error Handling

```typescript
import { AppError, ValidationErrors } from './path/to/messages';

function validateUserInput(email: string, password: string): void {
  if (!email) {
    throw new AppError(ValidationErrors.REQUIRED_FIELD);
  }
  
  if (!isValidEmail(email)) {
    throw new AppError(ValidationErrors.INVALID_EMAIL);
  }
  
  if (!isSecurePassword(password)) {
    throw new AppError(ValidationErrors.INVALID_PASSWORD);
  }
}

try {
  validateUserInput(email, password);
  // Continue with valid input
} catch (error) {
  if (error instanceof AppError) {
    // Display the user-friendly message to the user
    const userMessage = error.getUserMessage();
    showErrorToUser(userMessage.message, userMessage.action);
    
    // Log the technical error message for debugging
    console.error(error.getLogMessage());
  } else {
    // Handle unexpected errors
    console.error('Unexpected error:', error);
    showErrorToUser('Something went wrong. Please try again later.');
  }
}
```

### API Error Handling

```typescript
import { AppError } from './path/to/messages';

// Express error handler middleware
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res
      .status(err.getHttpStatus())
      .json(err.getApiResponse());
  }
  
  // Handle unexpected errors
  console.error(err);
  return res.status(500).json({
    code: 'UNKNOWN_ERROR',
    message: 'An unexpected error occurred',
    status: 'CRITICAL_ERROR'
  });
});
```

### Creating Custom Errors

```typescript
import { createCustomError, AppError } from './path/to/messages';

// Create a custom error for a specific use case
const INVALID_UPLOAD = createCustomError(
  'UPLOAD001',
  'File upload failed due to invalid file type',
  'This file type is not supported for uploads',
  'error',
  'Please upload a JPG, PNG, or PDF file only',
  { allowedTypes: ['jpg', 'png', 'pdf'] }
);

// Use the custom error
if (!allowedTypes.includes(fileType)) {
  throw new AppError(INVALID_UPLOAD);
}
```

### Getting Errors by Code or Category

```typescript
import { getErrorByCode, getErrorsByCategory } from './path/to/messages';

// Get a specific error by code
const error = getErrorByCode('AUTH001');
if (error) {
  console.log(error.message);
}

// Get all errors in a category
const allAuthErrors = getErrorsByCategory('auth');
console.log(`There are ${allAuthErrors.length} authentication errors defined`);
```

### Using with React

```tsx
import React, { useState } from 'react';
import { AppError, ValidationErrors } from './path/to/messages';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      if (!email) {
        throw new AppError(ValidationErrors.REQUIRED_FIELD);
      }
      
      // Continue with form submission
      await loginUser(email, password);
    } catch (err) {
      if (err instanceof AppError) {
        setError(err.getUserMessage());
      } else {
        setError({ message: 'An unexpected error occurred', severity: 'error' });
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className={`alert alert-${error.severity}`}>
          {error.message}
          {error.action && <div className="action-suggestion">{error.action}</div>}
        </div>
      )}
      
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}
```

## Advanced Usage

### Adding Metadata to Errors

```typescript
import { AppError } from './path/to/messages';

try {
  // Database operation
  const result = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
  
  if (result.length === 0) {
    throw AppError.fromCode('DB003', { userId, table: 'users' });
  }
  
  return result[0];
} catch (error) {
  // The error will include the metadata for debugging
  console.error(error.getLogMessage());
  // Logs: [DB003] ERROR: Database record not found. | Metadata: {"userId":"123","table":"users"}
  
  throw error; // Re-throw to be handled upstream
}
```

### Customizing for Your Project

Since this is a file you copy into your project, you can easily modify it to fit your needs:

```typescript
// Add your own error categories
export const YourCustomErrors = {
  SPECIFIC_ERROR: {
    code: 'CUSTOM001',
    message: 'Technical description of your error',
    userFriendlyMessage: 'User-friendly message',
    severity: 'error',
    suggestedAction: 'What the user should do',
  },
  // Add more custom errors as needed
} as const;

// Don't forget to include your new category in getErrorByCode and getErrorsByCategory functions
```


## License

This code is available under the MIT License.

## Support

Feel free to modify and extend this code to suit your project's needs. If you improve it in ways that might be useful to others, consider sharing your enhancements!
