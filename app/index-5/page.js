import "app/favicon-5.ico"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home5/Banner"
import Feature from "@/components/sections/home5/Feature"
import About from "@/components/sections/home5/About"
import Service from "@/components/sections/home5/Service"
import Chooseus from "@/components/sections/home5/Chooseus"
import Funfact from "@/components/sections/home5/Funfact"
import Work from "@/components/sections/home5/Work"
import Project from "@/components/sections/home5/Project"
import Team from "@/components/sections/home5/Team"
import Testimonial from "@/components/sections/home5/Testimonial"
import News from "@/components/sections/home5/News"
export default function Home_Five() {

    return (
        <div className="boxed_wrapper orange">
            <Layout headerStyle={5} footerStyle={5}>
                <Banner/>
                <Feature/>
                <About/>
                <Service/>
                <Chooseus/>
                <Funfact/>
                <Work/>
                <Project/>
                <Team/>
                <Testimonial/>
                <News/>
            </Layout>
        </div>
    )
}