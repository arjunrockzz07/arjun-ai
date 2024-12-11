# Dependencies Update Guide

## Overview
This update brings all dependencies to their latest stable versions and includes significant improvements to core libraries.

## Running the Update
1. For Unix/Linux/MacOS:
   ```bash
   chmod +x scripts/update-deps.sh
   ./scripts/update-deps.sh
   ```

2. For Windows:
   ```powershell
   .\scripts\update-deps.ps1
   ```

## Key Updates

### AI/ML Libraries
- OpenAI SDK: 4.26.0
- Anthropic SDK: 0.19.0
- Langchain: 0.1.12
- Google AI: 0.2.1
- Mistral AI: 0.1.3
- Azure OpenAI: 1.0.0-beta.11

### Core Framework
- Next.js: 14.1.0
- React & React DOM: Latest 18.x
- TypeScript: 5.3.3

### UI Libraries
- Tailwind CSS: 3.4.1
- Lucide React: 0.321.0
- Radix UI Components: Latest versions
- Next Themes: 0.2.1

### Development Tools
- ESLint: 8.56.0
- Prettier: 3.2.4
- Husky: 9.0.7
- Jest: Latest version

## Breaking Changes

### 1. date-fns v3
Old:
```typescript
import { format } from 'date-fns'
format(new Date(), 'MMMM dd, yyyy')
```
New:
```typescript
import { format } from 'date-fns'
format(new Date(), 'MMMM dd, yyyy') // API unchanged but new features available
```

### 2. Husky v9
Old:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test"
    }
  }
}
```
New:
```bash
npx husky add .husky/pre-commit "npm test"
```

### 3. Tailwind CSS 3.4
New features:
- Improved color utilities
- Better dark mode support
- New animation utilities
- Performance improvements

## Verification Steps
1. Run tests: `npm run test`
2. Check types: `npm run type-check`
3. Verify UI components: `npm run dev`
4. Test voice features
5. Verify dark/light themes
6. Check keyboard shortcuts

## Rollback Instructions
If issues are encountered:
1. `git checkout package.json package-lock.json`
2. `rm -rf node_modules`
3. `npm install`
4. `git checkout .`