# Deployment Guide for Company D Real Estate App

This guide details the steps to deploy your React application to Netlify. 

## Prerequisites

1.  **Node.js & npm**: Ensure Node.js is installed on your local machine.
2.  **GitHub Account**: You need a repository to push your code to.
3.  **Netlify Account**: To host the website.

## Project Structure Overview

We have converted the project from a browser-only prototype to a standard buildable React application using **Vite**.

*   `package.json`: Manages libraries (React, Router, etc.) and build scripts.
*   `vite.config.ts`: Configures how the app is bundled for production.
*   `netlify.toml`: Tells Netlify how to build the site and handle routing (SPA redirects).

## Step-by-Step Deployment

### 1. Local Setup

First, initialize the project dependencies on your local machine.

1.  Open your terminal in the project root folder.
2.  Run the install command:
    ```bash
    npm install
    ```
    *This downloads React, ReactDOM, and other libraries defined in `package.json`.*

### 2. Verify Build Locally

Before deploying, it is good practice to ensure the app builds correctly.

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  If successful, you will see a `dist/` folder created. This is what Netlify will serve.

### 3. Push to GitHub

1.  Initialize a Git repository (if not already done):
    ```bash
    git init
    ```
2.  Create a `.gitignore` file (optional but recommended) to avoid uploading node_modules:
    ```text
    node_modules
    dist
    .DS_Store
    ```
3.  Commit your files:
    ```bash
    git add .
    git commit -m "Initial commit for Netlify deployment"
    ```
4.  Push to a new repository on GitHub.

### 4. Deploy to Netlify

You can deploy using the Netlify UI (easiest) or Netlify CLI.

#### Method A: Netlify UI (Recommended)

1.  Log in to [Netlify](https://app.netlify.com).
2.  Click **"Add new site"** > **"Import an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify and choose your `company-d-real-estate` repository.
5.  **Build Settings**: Netlify will detect the `netlify.toml` file we created and fill these in automatically, but double-check them:
    *   **Base directory**: `/` (Leave empty)
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
6.  Click **"Deploy site"**.

#### Method B: Netlify CLI (Manual)

If you have the Netlify CLI installed (`npm install -g netlify-cli`):

1.  Run:
    ```bash
    netlify login
    netlify init
    ```
2.  Follow the prompts. When asked for build settings, use:
    *   Build Command: `npm run build`
    *   Deploy folder: `dist`

## Understanding `netlify.toml`

We added a `netlify.toml` file. This is critical for Single Page Applications (SPAs).

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Why is this here?**
React Router handles routing in the browser. If a user visits `your-site.com/about` and refreshes the page, Netlify looks for an `about.html` file. It doesn't exist, so it would normally show a 404 error. This configuration tells Netlify: "If you can't find the file, serve `index.html` instead and let React handle the routing."

## Troubleshooting

*   **Page Not Found on Refresh**: Ensure `netlify.toml` is present in the root directory.
*   **Import Errors**: Ensure you ran `npm install`. The previous setup used CDNs; the new setup uses local node_modules, which is more stable for production.
