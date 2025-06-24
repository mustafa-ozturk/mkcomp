#!/usr/bin/env ts-node
import fs from "fs";
import path from "path";
function validateComponentName(name) {
    if (!/^[A-Z][A-Za-z0-9]+$/.test(name)) {
        throw new Error("Component name should be in PascalCase (e.g., MyComponent).");
    }
}
function getComponentFiles(name) {
    return [
        {
            filename: `${name}.tsx`,
            content: `
import styles from "./${name}.module.css";

export default function ${name}() {
  return (
    <div className={styles.wrapper}>
      {/* ${name} component */}
    </div>
  );
}
      `.trim(),
        },
        {
            filename: `${name}.module.css`,
            content: `
.wrapper {
}
      `.trim(),
        },
    ];
}
function createComponent(name) {
    const componentsDir = path.join(process.cwd(), "src", "components");
    const componentDir = path.join(componentsDir, name);
    if (!fs.existsSync(componentsDir)) {
        throw new Error(`Components directory does not exist: ${componentsDir}`);
    }
    if (fs.existsSync(componentDir)) {
        throw new Error(`Component directory already exists: ${componentDir}`);
    }
    fs.mkdirSync(componentDir);
    const files = getComponentFiles(name);
    files.forEach(({ filename, content }) => {
        const filePath = path.join(componentDir, filename);
        fs.writeFileSync(filePath, content);
    });
}
function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error("❌ Please provide a component name.");
        process.exit(1);
    }
    const name = args[0];
    try {
        validateComponentName(name);
        createComponent(name);
        console.log(`✅ Created ${name} component successfully!`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`❌ ${error.message}`);
        }
        else {
            console.error("❌ An unexpected error occurred.");
        }
        process.exit(1);
    }
}
main();
