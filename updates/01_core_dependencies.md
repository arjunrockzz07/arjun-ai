# Core Dependencies Update PR

## Description
This PR updates the core dependencies of the project to their latest stable versions.

## Changes

### AI/LLM Libraries
```diff
- "@anthropic-ai/sdk": "^0.18.0",
+ "@anthropic-ai/sdk": "^0.19.0",
- "@azure/openai": "^1.0.0-beta.8",
+ "@azure/openai": "^1.0.0-beta.11",
- "@google/generative-ai": "^0.11.4",
+ "@google/generative-ai": "^0.2.1",
- "@mistralai/mistralai": "^0.0.8",
+ "@mistralai/mistralai": "^0.1.3",
- "langchain": "^0.0.213",
+ "langchain": "^0.1.12",
- "openai": "^4.23.0",
+ "openai": "^4.26.0"
```

### React & UI Libraries
```diff
- "@hookform/resolvers": "^3.3.2",
+ "@hookform/resolvers": "^3.3.4",
- "@supabase/ssr": "^0.0.10",
+ "@supabase/ssr": "^0.1.0",
- "@supabase/supabase-js": "^2.38.4",
+ "@supabase/supabase-js": "^2.39.3",
- "@tabler/icons-react": "^2.40.0",
+ "@tabler/icons-react": "^2.47.0",
- "@vercel/analytics": "^1.1.1",
+ "@vercel/analytics": "^1.1.3",
- "@xenova/transformers": "^2.13.4",
+ "@xenova/transformers": "^2.15.1",
- "ai": "^2.2.31",
+ "ai": "^2.2.34",
```

### Date & Core Utils
```diff
- "date-fns": "^2.30.0",
+ "date-fns": "^3.3.1",
- "react-day-picker": "^8.9.1",
+ "react-day-picker": "^8.10.0"
```

### UI Components
```diff
- "lucide-react": "^0.292.0",
+ "lucide-react": "^0.321.0",
- "react-hook-form": "^7.48.2",
+ "react-hook-form": "^7.50.0",
- "react-i18next": "^14.0.0",
+ "react-i18next": "^14.0.1",
- "sonner": "^1.3.1",
+ "sonner": "^1.4.0",
```

### Dev Dependencies
```diff
- "@next/bundle-analyzer": "^14.0.2",
+ "@next/bundle-analyzer": "^14.1.0",
- "@testing-library/jest-dom": "^6.2.0",
+ "@testing-library/jest-dom": "^6.4.1",
- "@testing-library/react": "^14.1.2",
+ "@testing-library/react": "^14.2.0",
- "@types/node": "^20",
+ "@types/node": "^20.11.16",
- "@types/react": "^18",
+ "@types/react": "^18.2.52",
- "@types/react-dom": "^18",
+ "@types/react-dom": "^18.2.18",
- "@types/uuid": "^9.0.7",
+ "@types/uuid": "^9.0.8",
- "autoprefixer": "^10.4.16",
+ "autoprefixer": "^10.4.17",
- "clsx": "^2.0.0",
+ "clsx": "^2.1.0",
- "eslint": "^8",
+ "eslint": "^8.56.0",
- "eslint-config-next": "^14.0.2",
+ "eslint-config-next": "^14.1.0",
- "eslint-plugin-tailwindcss": "^3.13.0",
+ "eslint-plugin-tailwindcss": "^3.14.1",
- "husky": "^8.0.3",
+ "husky": "^9.0.7",
- "postcss": "^8.4.31",
+ "postcss": "^8.4.33",
- "prettier": "^3.1.0",
+ "prettier": "^3.2.4",
- "tailwind-merge": "^2.0.0",
+ "tailwind-merge": "^2.2.1",
- "tailwindcss": "^3.3.5",
+ "tailwindcss": "^3.4.1",
- "typescript": "^5",
+ "typescript": "^5.3.3"
```

## Breaking Changes to Watch
1. date-fns v3 has API changes that may affect date formatting
2. Husky v9 has new configuration format
3. Tailwind CSS 3.4 adds new features that may affect styling

## Testing Plan
1. Run full test suite
2. Test all date-related functionality
3. Verify all UI components render correctly
4. Check build process and CI pipeline
5. Test AI/LLM integrations with updated SDKs

## Rollback Plan
If issues are encountered:
1. Revert to previous package.json
2. Clear node_modules and package-lock.json
3. Run clean install with previous versions