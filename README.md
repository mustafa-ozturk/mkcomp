# mkcomp

Quickly create React/Next.js components with CSS modules.

## Usage

1. Install the package from GitHub as a dev dependency

```bash
npm install --save-dev mustafa-ozturk/mkcomp
```

2. Add this script to your package.json

```json
{
  "scripts": {
    "mkcomp": "node ./node_modules/mkcomp/dist/mkcomp.js"
  }
}
```

3. Run this to create a component

```bash
npm run mkcomp -- ComponentName
```

This will create:

```bash
/src/components/ComponentName/
  ├── ComponentName.tsx
  └── ComponentName.module.css
```
