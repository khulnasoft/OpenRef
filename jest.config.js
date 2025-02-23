/* ============================================================================
 * Copyright (c) KhulnaSoft, Ltd
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: [
    "<rootDir>/packages/docusaurus-plugin/src",
    "<rootDir>/packages/docusaurus-theme/src",
  ],
  moduleNameMapper: {
    "^neotraverse/legacy$":
      "<rootDir>/node_modules/neotraverse/dist/legacy/legacy.cjs",
  },
};
