import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import Recommendation from "../components/sections/Recommendation"
import SystemArchitecture from "../components/sections/SystemArchitecture"
import DataAnalytics from "../components/sections/DataAnalytics"
import DesignSyste from "../components/sections/DesignSyste"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Landing Page" />
      <HeroSection/>
      <DesignSyste/>
      <Recommendation/>
      <SystemArchitecture/>
      <DataAnalytics/>
s
    </Layout>
  )
}

export default IndexPage