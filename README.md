# atomicneko template

This repository is the repository of my homepage (https://futa.moe/amphineko/) that can be used as a template.

Visit https://amphineko.github.io/amphineko/ for a live deployment of the master branch.

Also, a nightly build is available at https://atomicneko-next.vercel.app/.

**!!! ATTENTION !!!**

This branch is still in development. I'm currently working on moving to next.js and React.

In the future, it will support dynamic server-side contents. The main goal is to fetch some stats of linked accounts, which are not fetch-able from the browser due to CORS issues.

See https://atomicneko-next.vercel.app/ for the latest build of this branch.

## Getting Started

Indeed, you should inspect `pages/index.tsx` to change the content of the page before deploying.

To start a local development server, run `yarn` to install dependencies, and `yarn dev` to start the development server.

The server should be available at `http://localhost:3000`.

## Deploying

There are multiple ways to deploy this project.

Please see https://nextjs.org/docs/deployment for more information.

~~Alternatively, a statically generated version of this project can be exported using `yarn export`.~~

## FAQs

### Dynamic Steam profile name doesn't work

You should update `STEAM_PERSONA_NAME_URL` in the `.env` file, to use your own Steam API key and Steam ID.

Please notice that you should configure your Steam API key to return your own domain name for CORS requests.

Alternatively, you can use a proxy server to handle the CORS requests.

Or you can display a static name in the page, like how the osu! profile name is displayed.

## Roadmap

-   [x] Migrate to React and next.js
-   [x] Add dynamically fetched usernames
-   [ ] Add static site generation (blocked by `next/image` unsupported by `next export`)
