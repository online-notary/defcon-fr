import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Cctv_Section from "@/components/sections/home1/Cctv_Section"
import Service from "@/components/sections/home1/Service"
import Storage from "@/components/sections/home1/Storage"
import Work from "@/components/sections/home1/Work"
import Highlights from "@/components/sections/home1/Highlights"
import Project from "@/components/sections/home1/Project"
import Pricing from "@/components/sections/home1/Pricing"
import Testimonial from "@/components/sections/home1/Testimonial"
import Estimation from "@/components/sections/home1/Estimation"
import News from "@/components/sections/home1/News"
import Newsletter from "@/components/sections/home1/Newsletter"
import Clients from "@/components/sections/home1/Clients"
export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <About/>
                <Cctv_Section/>
                <Service/>
                <Storage/>
                <Work/>
                <Highlights/>
                <Project/>
                <Pricing/>
                <Testimonial/>
                <Estimation/>
                <News/>
                <Newsletter/>
                <Clients/>
            </Layout>
        </div>
    )
}