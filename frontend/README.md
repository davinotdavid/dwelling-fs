# [Frontend] Senior Fullstack Developer Technical Test

Live link: https://dwelling-fs.vercel.app/

## How to run (in development mode)

```bash
npm run dev
# or
yarn dev
```

## Tech stack

Even though this is a relatively small fake applcation, I've decided to use the following technologies:

- Next.js
  - Sensible defaults, specially if scalability is required later on (SSR by default for better performance + SEO, routing, css modules)
  - Possibility for using the /api folder for a "serverless" architecture
  - Typescript support out of the box
- React Query
  - Already handles server state with cache invalidation, reducing the use of explicit useEffects
  - Loading and state errors handling out of the box
- CSS Modules
  - IMHO, vanila CSS is already beautiful in itself with the exception of class name clashing. This solves the class name clashing (naming is hard).

> **NOTE**: I've used the fetch API instead of something like Axios (for example) for simplicity purposes as I think that it wouldn't be a huge productivity / DX gain in this particular exercise.

## Hosting / Deploy

Since I've used Next.js, it made sense to me to use Vercel as my hosting of choice since they are the authors of the framework.

## If I had time I would've...

... confirmed about the 5px vs 8px base in the designs so that I can confidently change the root font element and use REMs instead of PX.

... added (small) animations. Perhaps a shake-y effect if the card number validation goes wrong.

... better error handling (error boundaries, for instance)

... more (and better) tests. Perhaps E2E.
