# workflow-typescript

[![License][license-badge]][license-url]

> A playground for Node with TypeScript

## Features

This workflow provides the following features:

- **src** and **\_\_tests\_\_** folder as a starter point to build your project.
- **[TypeScript][typescript-url]** as a strongly typed programming language that builds on JavaScript.
- **[tsx][tsx-url]** as a CLI command (alternative to node) for seamlessly running TypeScript & ESM, in both commonjs & module package types.
- **[Jest][jest-url]** a delightful JavaScript/TypeScript Testing Framework with a focus on simplicity.
- **[webpack][webpack-url]** as a static module bundler for modern JavaScript applications.
- **[EditorConfig][editorconfig-url]** to help you maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- **[ESLint][eslint-url]** to statically analyzes your code to quickly find problems.
- **[Prettier][prettier-url]** as an opinionated code formatter.

## Development

- Clone the repo

```bash
$ git clone https://github.com/robertoachar/workflow-typescript.git
```

- Install dependencies

```bash
$ yarn
```

- Run scripts

| Action                              | Usage (yarn)         | Usage (npm)             |
| ----------------------------------- | -------------------- | ----------------------- |
| Start development mode              | `yarn start`         | `npm start`             |
| Build                               | `yarn build`         | `npm run build`         |
| Run lint                            | `yarn lint`          | `npm run lint`          |
| Start lint in watch mode            | `yarn lint:watch`    | `npm run lint:watch`    |
| Run tests                           | `yarn jest`          | `npm run jest`          |
| Start tests in watch mode           | `yarn jest:watch`    | `npm run jest:watch`    |
| Run tests with code coverage        | `yarn jest:coverage` | `npm run jest:coverage` |
| Run lint + tests                    | `yarn test`          | `npm test`              |
| Start lint + tests in watch mode    | `yarn test:watch`    | `npm test:watch`        |
| Run lint + tests with code coverage | `yarn test:coverage` | `npm test:coverage`     |

## Author

[Roberto Achar](https://twitter.com/robertoachar)

## License

[MIT](https://github.com/robertoachar/workflow-typescript/blob/master/LICENSE)

[license-badge]: https://img.shields.io/github/license/robertoachar/workflow-typescript.svg
[license-url]: https://opensource.org/licenses/MIT

[editorconfig-url]: https://editorconfig.org/
[eslint-url]: https://eslint.org/
[jest-url]: https://jestjs.io/
[prettier-url]: https://prettier.io/
[typescript-url]: https://www.typescriptlang.org/
[tsx-url]: https://www.npmjs.com/package/tsx
[webpack-url]: https://webpack.js.org/
