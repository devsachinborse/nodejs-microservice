# Microservices Setup

This project consists of two microservices: Auth Service and Post Service. Follow the instructions below to set up and run both services.

### Environment Configuration
Create .env files for both services with the following environment variables:

### 1. Auth Service (auth-service/.env)
```
PORT=7878
DATABASE_URL="<mongodb atlas url>"
JWT_SECRET="df13b1bc-6327-4c80-8881-875d263380c7"
```

### 2. Post Service (post-service/.env)
```
PORT=7879
DATABASE_URL="<postgresSQL url>"
AUTH_MICRO_URL="http://localhost:7878"
JWT_SECRET="df13b1bc-6327-4c80-8881-875d263380c7"

```

## Database Setup

### Auth Service
To set up the database for the Auth Service, run the following commands:
```
npx prisma generate
npx prisma db push
```
This will generate the Prisma client and push the schema to your MongoDB database.

### Post Service
To set up the database for the Post Service, run the following command:
```
npx prisma migrate dev --name post_table
```
This will generate the migration files and apply them to your PostgreSQL database.

## Running the Services
Once the environment is configured and the databases are set up, you can run both services using the following command in each service's directory:

```
npm run dev
```

This will start both the Auth and Post services in development mode.

## Important Notes
    1. Make sure both MongoDB and PostgreSQL databases are up and running.
    2. The Auth Service runs on port 7878, and the Post Service runs on port 7879.
    3. Update the DATABASE_URL in the .env files with your actual MongoDB and PostgreSQL connection URLs.

## Dependencies
    1. Auth Service: Uses MongoDB, Prisma, and JWT for authentication.
    2.Post Service: Uses PostgreSQL, Prisma, and communicates with the Auth Service for authentication.