# Phishing Detector

## Local setup

### Backend
cd backend
npm install
npm run dev    # starts Express server on :4000

### Frontend
cd frontend
npm install
npm run dev    # Vite dev server on :5173

The frontend proxies `/api` to http://localhost:4000 in development.

## Contributing
Use feature branches: `git checkout -b feat/<name>` then push & open PR.
