import "app/favicon-4.ico"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Feature from "@/components/sections/home4/Feature"
import About from "@/components/sections/home4/About"
import Products from "@/components/sections/home4/Products"
import Service from "@/components/sections/home4/Service"
import Funfact from "@/components/sections/home4/Funfact"
import Work from "@/components/sections/home4/Work"
import Project from "@/components/sections/home2/Project"
import Pricing from "@/components/sections/home4/pricing"
import Testimonial from "@/components/sections/home4/Testimonial"
import News from "@/components/sections/home4/News"
import Contact from "@/components/sections/home4/Contact"
import Clients from "@/components/sections/home1/Clients"
export default function Home_Four() {

    return (
        <div className="boxed_wrapper gradient-color">
            <Layout headerStyle={4} footerStyle={4}>
                <Banner/>
                <Feature/>
                <About/>
                <Products/>
                <Service/>
                <Funfact/>
                <Work/>
                <Project/>
                <Pricing/>
                <Testimonial/>
                <News/>
                <Contact/>
                <Clients/>
            </Layout>
        </div>
    )
}