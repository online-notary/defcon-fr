'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), { ssr: false,})

export default function Project_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="3 Columns">
                <PortfolioFilter1/>
            </Layout>
        </div>
    )
}
