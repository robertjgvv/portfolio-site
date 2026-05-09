# Robert Billings Portfolio Site

React/Vite portfolio site configured for GitHub Pages and the custom domain:

```text
robert-billings.com
```

## Publish

On Windows, run:

```bat
setup_and_publish.bat
```

Or PowerShell:

```powershell
.\setup_and_publish.ps1
```

The script installs packages, saves the source files to `main`, builds the Vite site, and publishes the compiled `dist` folder to the `gh-pages` branch.

## Notes

- `public/CNAME` preserves the custom domain during deployment.
- `vite.config.js` uses `base: "/"`, which is correct for the custom domain.
- The source files belong on `main`; the compiled files belong on `gh-pages`.
