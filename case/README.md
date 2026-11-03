# Serene Haven Massage Spa — MERN MVP

A runnable full-stack appointment-request website based on the supplied requirements. It uses original demo branding and content that must be replaced with business-approved details before production.

## Included

- Responsive React/Vite public site with accessible mobile navigation
- API-driven services, duration, and prices
- Date/time availability based on hours, service duration, blocks, and overlaps
- Express API with Zod validation, Helmet, CORS, request IDs, size limits, and rate limiting
- MongoDB/Mongoose models and indexes for services, appointments, blocked times, and messages
- Pending appointment workflow with non-sequential reference codes
- Idempotent booking retries and HTTP 409 conflict handling
- Notification adapter boundary; booking remains stored if notification fails
- Seed data, in-memory API tests, Docker Compose for local MongoDB

## Quick start

Prerequisites: Node.js 22+, npm, and either Docker or a MongoDB connection.

```bash
cp .env.example .env
docker compose up -d
npm install
npm run seed
npm run dev
```

Open `http://localhost:5173`. The API runs at `http://localhost:5000`.

## Commands

```bash
npm run dev     # client and server
npm run build   # production frontend build
npm test        # server API tests
npm run seed    # replace demo services
```

## API

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/services` | Active services in display order |
| GET | `/api/availability?serviceId=&date=YYYY-MM-DD` | Available slots |
| POST | `/api/appointments` | Create a pending request; requires `Idempotency-Key` |
| GET | `/api/appointments/reference/:code` | Sanitized request lookup |
| POST | `/api/contact` | Store contact inquiry |

All responses use `{ "data": ... }` or `{ "error": { "code", "message", "fields" } }`.

## Production checklist

- Replace demo brand, phone, location, copy, prices, hours, policies, and generated image.
- Configure an actual transactional email provider in `notification.js`.
- Store environment values in the deployment platform's secret manager.
- Run MongoDB with a least-privilege user and restricted network access.
- Add a database-backed strategy for strict multi-instance slot locking (transaction or unique resource-slot constraint).
- Confirm timezone conversion with the spa's real timezone and daylight-saving rules.
- Define retention/deletion periods, backups, monitoring, and staff access.
- Deploy both applications behind HTTPS and set `CLIENT_ORIGIN` precisely.

## Structure

```text
client/src      React UI and API client
server/src      Express routes, models, services, middleware
server/tests    API integration tests
docs            project notes
```
