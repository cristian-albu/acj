Project main scope: Personal portfolio, courses platform, online shop, and blog app.
Project secondary scope: Test out my skills and learn how to manage a bigger app with multiple facets.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I'm using:

-   Nextjs 13^
-   Typesript
-   Zod for type validation
-   Prisma for schema, types, and as an ORM
-   Scss and modules for styling
-   React Icons for icons
-   Bcrypt for encryption
-   Sendgrid for emails

## Project structure:

-   app
    -   api > all of the app's endpoints
    -   [pages directories]
        -   page.tsx > server side page structure
        -   layout.tsx > what shows up on every page and sub-page
        -   View.tsx > client side page structure
        -   page.module.scss > styling for every page and sub-page
-   shared
    -   components > general components that are used in multiple places
    -   contexts > all the contexts for the app
    -   hooks > useful react hooks
-   lib
    -   utils > useful functions
    -   mail > every mailing function
    -   validation > every value validation function
    -   data > static data
    -   data-parses > every parsing function for data structures

Projects notes:
Even if this app is using NextJs v13^ and server components, I will use API endpoints. I might change the API in the future to another framework/language

## Getting Started

Development server:

```bash
yarn dev
```

Created .env and a .local.env files

Using Planetscale mysql for the db

.env file

```bash
DATABASE_URL='pscale db url'
```

Run command to build tables from schema

```bash
yarn prisma db push
```

Using SendGrid for emails

.local.env file

```bash
NODE_ENV='development'
SENDGRID_API_KEY='sendgrid API key'
```

Setup the SendGrid account with a sender user, authenticated sending domain with GoDaddy records, and enabled 2FA
