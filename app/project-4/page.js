'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter4 = dynamic(() => import('@/components/elements/PortfolioFilter4'), { ssr: false,})

export default function Project_page_three() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Title Over Image 02">
                <PortfolioFilter4/>
            </Layout>
        </div>
    )
}
