'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), { ssr: false,})

export default function Project_page_two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="4 Columns">
                <PortfolioFilter2/>
            </Layout>
        </div>
    )
}
