{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*.vue"],
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },

  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
