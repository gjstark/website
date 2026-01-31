# DevNotesPlus Release Notes API Specification

This document specifies the API contract required for the `ReleaseNotesButton` component to fetch and display release notes from DevNotesPlus.

## Base URL

```
https://www.devnotesplus.com
```

---

## Endpoints

### Get Package Release Notes

Retrieves release notes for a specific package.

```
GET /api/public/releases/{packageId}
```

#### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packageId` | string | Yes | Unique identifier for the package (e.g., `pixel-pomodoro-8e1fd678`) |

#### Request Headers

| Header | Value | Required | Description |
|--------|-------|----------|-------------|
| `Accept` | `application/json` | Yes | Response content type |
| `Authorization` | `Bearer {token}` | No | Optional API key for private packages |

#### Example Request

**Public Package:**
```bash
curl -X GET "https://www.devnotesplus.com/api/public/releases/pixel-pomodoro-8e1fd678" \
  -H "Accept: application/json"
```

**Private Package (with API key):**
```bash
curl -X GET "https://www.devnotesplus.com/api/public/releases/pixel-pomodoro-8e1fd678" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Response Format

### Success Response (200 OK)

```json
{
  "package": "pixel-pomodoro",
  "packageId": "pixel-pomodoro-8e1fd678",
  "releases": [
    {
      "version": "1.0.1",
      "date": "2026-01-31",
      "type": "major",
      "changes": [
        {
          "type": "feature",
          "description": "Pomodoro timer with configurable work/rest sessions"
        },
        {
          "type": "feature",
          "description": "Always on display support for tracking sessions"
        },
        {
          "type": "feature",
          "description": "Configurable notifications for timer status"
        },
        {
          "type": "feature",
          "description": "6 retro color themes: NES Classic, Gameboy, Synthwave, Amber CRT, C64, Sunset"
        },
        {
          "type": "feature",
          "description": "Dashboard with session statistics"
        },
        {
          "type": "bugfix",
          "description": "Fixed back button requiring double press"
        },
        {
          "type": "bugfix",
          "description": "Fixed timer settings being overridden on new session"
        }
      ]
    }
  ]
}
```

### Response Fields

#### Root Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `package` | string | Yes | Human-readable package name |
| `packageId` | string | Yes | Unique package identifier |
| `releases` | array | Yes | Array of release objects (newest first) |

#### Release Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | Yes | Semantic version number (e.g., `1.0.1`) |
| `date` | string | Yes | Release date in ISO 8601 format (`YYYY-MM-DD`) |
| `type` | string | Yes | Release type: `major`, `minor`, or `patch` |
| `changes` | array | Yes | Array of change objects |

#### Change Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Change type (see Change Types below) |
| `description` | string | Yes | Human-readable description of the change |

#### Change Types

| Type | Icon | Description |
|------|------|-------------|
| `feature` | ✨ | New functionality or capability |
| `bugfix` | 🐛 | Bug fix or correction |
| `improvement` | ⚡ | Enhancement to existing functionality |
| `breaking` | 💥 | Breaking change requiring user action |
| `security` | 🔒 | Security-related fix or improvement |
| `deprecation` | ⚠️ | Deprecated feature notice |

---

## Error Responses

### 404 Not Found

Package does not exist.

```json
{
  "error": "not_found",
  "message": "Package not found: pixel-pomodoro-8e1fd678"
}
```

### 401 Unauthorized

Authentication required for private package.

```json
{
  "error": "unauthorized",
  "message": "Authentication required to access this package"
}
```

### 500 Internal Server Error

Server-side error.

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```

---

## CORS Configuration

The API must include appropriate CORS headers to allow requests from client-side JavaScript:

```
Access-Control-Allow-Origin: https://www.herdingcoders.com
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Accept, Authorization, Content-Type
Access-Control-Max-Age: 86400
```

For development, you may use:

```
Access-Control-Allow-Origin: *
```

---

## Rate Limiting (Recommended)

| Limit | Value |
|-------|-------|
| Requests per minute | 60 |
| Requests per hour | 1000 |

Rate limit headers:

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1706745600
```

---

## Example Implementation (Node.js/Express)

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration
app.use(cors({
  origin: ['https://www.herdingcoders.com', 'http://localhost:8000'],
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Accept', 'Authorization', 'Content-Type']
}));

// Release notes endpoint
app.get('/api/public/releases/:packageId', async (req, res) => {
  const { packageId } = req.params;
  
  try {
    // Fetch release notes from your database/storage
    const releaseData = await getReleaseNotes(packageId);
    
    if (!releaseData) {
      return res.status(404).json({
        error: 'not_found',
        message: `Package not found: ${packageId}`
      });
    }
    
    res.json(releaseData);
  } catch (error) {
    console.error('Error fetching release notes:', error);
    res.status(500).json({
      error: 'internal_error',
      message: 'An unexpected error occurred'
    });
  }
});

app.listen(3000);
```

---

## Component Usage Reference

Once the API is implemented, the component is used like this:

```jsx
<ReleaseNotesButton
  apiUrl="https://www.devnotesplus.com"
  packageId="pixel-pomodoro-8e1fd678"
  fullNotesUrl="https://www.devnotesplus.com/public/packages/pixel-pomodoro-8e1fd678.html"
  showBadge={true}
/>
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01-31 | Initial API specification |
