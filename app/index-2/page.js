import "app/favicon-2.ico"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Protection from "@/components/sections/home2/Protection"
import About from "@/components/sections/home2/About"
import Service from "@/components/sections/home2/Service"
import Team from "@/components/sections/home2/Team"
import Support from "@/components/sections/home2/Support"
import Faq from "@/components/sections/home2/Faq"
import Pricing from "@/components/sections/home2/Pricing"
import Project from "@/components/sections/home2/Project"
import Testimonial from "@/components/sections/home2/Testimonial"
import News from "@/components/sections/home2/News"
import Clients from "@/components/sections/home2/Clients"
import Newsletter from "@/components/sections/home2/Newsletter"
export default function Home_Two() {

    return (
        <div className="boxed_wrapper blue">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner/>
                <Protection/>
                <About/>
                <Service/>
                <Team/>
                <Support/>
                <Faq/>
                <Pricing/>
                <Project/>
                <Testimonial/>
                <News/>
                <Clients/>
                <Newsletter/>
            </Layout>
        </div>
    )
}