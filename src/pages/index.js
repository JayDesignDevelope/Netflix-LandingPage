import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import DesignSystem from "../components/sections/DesignSystem"
import Recommendation from "../components/sections/Recommendation"
import SystemArchitecture from "../components/sections/SystemArchitecture"
import DataAnalytics from "../components/sections/DataAnalytics"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Landing Page" />
      <HeroSection/>
      <DesignSystem/>
      <Recommendation/>
      <SystemArchitecture/>
      <DataAnalytics/>

    </Layout>
  )
}

export default IndexPage