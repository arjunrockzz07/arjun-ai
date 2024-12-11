#!/bin/bash

# Update AI/LLM dependencies
npm install @anthropic-ai/sdk@^0.19.0 @azure/openai@^1.0.0-beta.11 @google/generative-ai@^0.2.1 @mistralai/mistralai@^0.1.3 langchain@^0.1.12 openai@^4.26.0

# Update React & UI dependencies
npm install @hookform/resolvers@^3.3.4 @supabase/ssr@^0.1.0 @supabase/supabase-js@^2.39.3 @tabler/icons-react@^2.47.0 @vercel/analytics@^1.1.3 @xenova/transformers@^2.15.1 ai@^2.2.34

# Update core utilities
npm install date-fns@^3.3.1 lucide-react@^0.321.0 react-day-picker@^8.10.0 react-hook-form@^7.50.0 react-i18next@^14.0.1 sonner@^1.4.0

# Update dev dependencies
npm install -D @next/bundle-analyzer@^14.1.0 @testing-library/jest-dom@^6.4.1 @testing-library/react@^14.2.0 @types/node@^20.11.16 @types/react@^18.2.52 @types/react-dom@^18.2.18 @types/uuid@^9.0.8 autoprefixer@^10.4.17 clsx@^2.1.0 eslint@^8.56.0 eslint-config-next@^14.1.0 eslint-plugin-tailwindcss@^3.14.1 husky@^9.0.7 postcss@^8.4.33 prettier@^3.2.4 tailwind-merge@^2.2.1 tailwindcss@^3.4.1

# Clean install to ensure all dependencies are properly resolved
rm -rf node_modules package-lock.json
npm install

# Run tests
npm run test

# Format code
npm run format:write

# Check types
npm run type-check