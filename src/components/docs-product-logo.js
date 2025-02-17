import React from "react"
import getKhulnasoftDocsConfig from "../utils/get-khulnasoft-docs-config"
import AccessibleSVG from "./accessible-svg"

export default () => {
  const {
    product,
    productLogoPathD,
    productIconKey,
    logoSVGContent,
  } = getKhulnasoftDocsConfig()

  return logoSVGContent ? (
    <span
      title={`Khulnasoft ${productIconKey ? productIconKey : "product"} logo`}
      dangerouslySetInnerHTML={{ __html: logoSVGContent }}
    />
  ) : (
    <AccessibleSVG title={`Khulnasoft ${product} logo`} viewBox="0 0 48 48">
      <path d={productLogoPathD} />
    </AccessibleSVG>
  )
}
