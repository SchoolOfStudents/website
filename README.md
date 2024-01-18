# School of students - Website

- Main website: https://schoolofstudents.netlify.app
- Dev website: https://dev-schoolofstudents.netlify.app

This is the website for the School of Students. Build with:

- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [DaisyUI](https://daisyui.com/docs/use/)

## Developing

Fork the dev branch and clone it locally. Then install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Create a .env file with the following variables:

```bash
PUBLIC_APPWRITE_PROJECT=65a90560ce0c8291a741
PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
```

## Backend

The backend is build with [Appwrite](https://appwrite.io/), there are 2 servers:

- Main (for production): 65a9054cdf97bb611418
- Dev (for development): 65a90560ce0c8291a741
