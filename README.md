# Spark AI

AI-powered productivity platform built with a modern full-stack architecture.

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- FastAPI
- Python

### Monorepo

- Turborepo
- pnpm Workspace

---

## Project Structure

```
Spark_AI
│
├── apps
│   ├── web
│   └── ai-service
│
├── packages
├── database
├── assets
├── docs
├── prompts
├── scripts
│
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Development

Frontend

```bash
cd apps/web
pnpm dev
```

Backend

```bash
cd apps/ai-service
.\.venv\Scripts\Activate.ps1
python -m uvicorn main:app --reload
```

---

## Status

- ✅ Monorepo Configured
- ✅ Next.js Installed
- ✅ FastAPI Installed
- ✅ GitHub Connected