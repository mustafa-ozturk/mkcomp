# mkcomp

A script I use to quickly create React/Next.js components with CSS modules.

## Usage

1. Install the package from GitHub

```bash
npm install mustafa-ozturk/mkcomp
```

2. Add this script to your package.json (assuming you have ts-node installed)

```bash
{
  "scripts": {
    "mkcomp": "ts-node ./node_modules/reponame/create-component.ts"
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

## Requirements

- Node.js
- ts-node
