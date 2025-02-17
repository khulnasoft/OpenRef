/* ============================================================================
 * Copyright (c) KhulnaSoft, Ltd
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import { create, Props } from "./utils";

export function createDetails({ children, style, ...rest }: Props) {
  return create("details", {
    style: { ...style },
    ...rest,
    children,
  });
}
