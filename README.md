# Rolin Barbershop & Spa — Booking Platform

A multi-branch booking and management platform for Rolin Barbershop & Spa (Ruaka & Kiambu Road, Nairobi). Clients book grooming/spa appointments online (guest or logged in), pay via M-Pesa, and get SMS/email confirmations. Staff manage bookings, services, and specialists per branch from an admin dashboard.

For the visual/UI spec, see `rolin-barbershop-spa-stitch-design-brief.md`. This README covers the engineering side. For deeper architecture, data model, and critical implementation notes, see [`DOCUMENTATION.md`](./DOCUMENTATION.md).

---

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js 14+ (App Router, TypeScript) |
| Backend | FastAPI (Python 3.11+) |
| Database | SQLite (v1/MVP) → PostgreSQL (production hardening) |
| ORM / Migrations | SQLAlchemy 2.0 + Alembic |
| Validation | Pydantic v2 |
| Auth | JWT (staff/admin), guest reference-code tracking (clients) |
| Payments | M-Pesa Daraja API (STK Push) |
| SMS | Pluggable: Africa's Talking **or** Twilio (single interface, swap via env var) |
| Outbound HTTP | `httpx` (async) |
| Frontend data fetching | TanStack Query |
| Frontend state (booking flow) | Zustand |
| Styling | Tailwind CSS + shadcn/ui |
| Deployment | Hetzner VPS, Nginx (reverse proxy), systemd, Certbot |

---

## Project Structure

```
rolin-booking/
├── frontend/                 # Next.js app
│   ├── app/                  # App Router pages
│   ├── components/
│   ├── lib/                  # api client, query hooks, utils
│   ├── store/                 # zustand booking-flow store
│   └── types/                 # generated from FastAPI OpenAPI schema
│
├── backend/                  # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── core/              # config, security, settings
│   │   ├── db/                 # session, base, migrations (alembic/)
│   │   ├── models/             # SQLAlchemy models
│   │   ├── schemas/            # Pydantic schemas
│   │   ├── routers/            # branches, services, specialists, bookings, payments, auth, admin
│   │   ├── services/           # mpesa.py, sms/ (provider interface + africastalking.py, twilio.py), booking_logic.py
│   │   └── tasks/               # background jobs (reminders, callback processing)
│   ├── tests/                  # pytest, one module = one isolated test file
│   └── alembic/
│
├── DOCUMENTATION.md
├── README.md
└── docker-compose.yml (optional, local dev only)
```

---

## Prerequisites

- Node.js 20+, pnpm (or npm)
- Python 3.11+, `uv` or `venv` + `pip`
- M-Pesa Daraja sandbox credentials (Consumer Key/Secret, Shortcode, Passkey)
- SMS provider credentials — pick **one** to start: Africa's Talking (sandbox API key + username) or Twilio (Account SID, Auth Token, phone number/sender ID)

---

## Local Setup

### Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in secrets — see "Environment Variables" below
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

API docs available at `http://localhost:8000/docs` (FastAPI auto-generated Swagger UI).

### Frontend

```bash
cd frontend
pnpm install
cp .env.local.example .env.local   # NEXT_PUBLIC_API_URL=http://localhost:8000
pnpm dev
```

App runs at `http://localhost:3000`.

### Generate frontend types from backend schema

Keep the frontend's TypeScript types in lockstep with the FastAPI OpenAPI schema instead of hand-writing them:

```bash
npx openapi-typescript http://localhost:8000/openapi.json -o frontend/types/api.ts
```

Re-run this any time a backend schema changes.

---

## Environment Variables

**Backend (`backend/.env`)**

```
DATABASE_URL=sqlite:///./rolin.db
SECRET_KEY=
ACCESS_TOKEN_EXPIRE_MINUTES=60

MPESA_ENV=sandbox
MPESA_CONSUMER_KEY=
MPESA_CONSUMER_SECRET=
MPESA_SHORTCODE=
MPESA_PASSKEY=
MPESA_CALLBACK_URL=https://yourdomain.com/api/payments/mpesa/callback

AT_API_KEY=
AT_USERNAME=
AT_SENDER_ID=

# SMS provider switch — "africastalking" or "twilio"
SMS_PROVIDER=africastalking

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_NUMBER=
TWILIO_SENDER_ID=

CORS_ORIGINS=http://localhost:3000
```

**Frontend (`frontend/.env.local`)**

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Never commit `.env` / `.env.local`. Use `.env.example` files with placeholder keys only.

---

## Core Features (v1)

- Branch selection (Ruaka / Kiambu Road)
- Service catalog by category, priced in KES
- Specialist & time-slot selection per branch
- Guest checkout (no account required) + optional client login
- M-Pesa STK Push payment
- SMS + email booking confirmation with trackable reference code
- Guest booking tracking page (`/track/[reference]`)
- Client dashboard (upcoming bookings, history)
- Admin dashboard (bookings, services, specialists, branches, payments)

Out of scope for v1 (see Roadmap in `DOCUMENTATION.md`): loyalty/rewards, multi-language UI, recurring/subscription bookings, inventory management.

---

## Testing

```bash
# backend — isolated unit tests per module, then integration
cd backend && pytest -v

# frontend
cd frontend && pnpm test
```

Build bottom-up: write isolated tests for each backend service (`mpesa.py`, `sms.py`, booking conflict logic) before wiring them into routers, and test routers before wiring the frontend against them.

---

## Deployment (Hetzner VPS)

- Nginx reverse-proxies `/` → Next.js (port 3000) and `/api` → FastAPI (port 8000)
- Both processes run under systemd (`rolin-frontend.service`, `rolin-backend.service`) for auto-restart
- SSL via Certbot (Let's Encrypt)
- Backend `.env` lives outside the repo on the server, loaded via systemd `EnvironmentFile=` or `python-dotenv`

Full Nginx/systemd config notes are in `DOCUMENTATION.md` → Deployment.

---

## License

Proprietary — built for Rolin Barbershop & Spa.