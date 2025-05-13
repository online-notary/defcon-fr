import "app/favicon-3.ico"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import About from "@/components/sections/home3/About"
import Service from "@/components/sections/home3/Service"
import Funfact from "@/components/sections/home3/Funfact"
import Team from "@/components/sections/home3/Team"
import Chooseus from "@/components/sections/home3/Chooseus"
import Pricing from "@/components/sections/home3/Pricing"
import Testimonial from "@/components/sections/home3/Testimonial"
import Blog from "@/components/sections/home3/Blog"
import Contact from "@/components/sections/home3/Contact"
export default function Home_Three() {

    return (
        <div className="boxed_wrapper red">
            <Layout headerStyle={3} footerStyle={3}>
                <Banner/>
                <About/>
                <Service/>
                <Funfact/>
                <Team/>
                <Chooseus/>
                <Pricing/>
                <Testimonial/>
                <Blog/>
                <Contact/>
            </Layout>
        </div>
    )
}