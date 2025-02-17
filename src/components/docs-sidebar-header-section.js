import React from "react"

import KhulnasoftLogo from "./khulnasoft-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a
      className="DocsSidebar--khulnasoft-logo-link DocsSidebar--link"
      href="https://developers.khulnasoft.com/"
    >
      <DocsNavLogoLockup
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

export default DocsSidebarHeaderSection
