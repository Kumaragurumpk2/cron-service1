# NestJS Cron Job Service

## Steps to Run:
1. Install dependencies: `npm install`
2. Start MongoDB
3. Run: `npm run start`

## Features
- Create, update, delete, and retrieve cron jobs
- Scheduled execution based on defined timing
- Webhook handling
- Rate limiting and API throttling
- MongoDB integration

## Endpoints
- `POST /cron-job` - Create a new cron job
- `GET /cron-job` - Get all cron jobs
- `PUT /cron-job/:id` - Update a cron job
- `DELETE /cron-job/:id` - Delete a cron job