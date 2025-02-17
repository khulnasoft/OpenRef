import React from "react"

import KhulnasoftLogo from "./khulnasoft-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a
      className="DocsMobileHeader--khulnasoft-logo-link Link Link-without-underline"
      href="https://developers.khulnasoft.com/"
    >
      <DocsNavLogoLockup
        small={true}
        logo={<KhulnasoftLogo />}
        text={
          <>
            <span data-text="Khulnasoft">Khulnasoft</span>
            <span>&nbsp;</span>
            <span data-text="Docs">Docs</span>
          </>
        }
      />
    </a>
  </div>
)

export default DocsMobileHeader
