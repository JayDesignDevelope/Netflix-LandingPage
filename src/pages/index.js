import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import DesignSystem from "../components/sections/DesignSystem"
import Recommendation from "../components/sections/Recommendation"
function IndexPage() {
  return (
    <Layout>
      <SEO title="Landing Page" />
      <HeroSection/>
      <DesignSystem/>
      <Recommendation/>

    </Layout>
  )
}

export default IndexPage