'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter3 = dynamic(() => import('@/components/elements/PortfolioFilter3'), { ssr: false,})

export default function Project_page_three() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Title Over Image 01">
                <PortfolioFilter3/>
            </Layout>
        </div>
    )
}
