import "app/favicon-5.ico"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home6/Banner"
import Benefits from "@/components/sections/home6/Benefits"
import About from "@/components/sections/home6/About"
import Service from "@/components/sections/home6/Service"
import Energy from "@/components/sections/home6/Energy"
import Team from "@/components/sections/home6/Team"
import Project from "@/components/sections/home6/Project"
import Testimonial from "@/components/sections/home6/Testimonial"
import News from "@/components/sections/home6/News"
import Estimation from "@/components/sections/home6/Estimation"
import Google_Map from "@/components/sections/home6/Google_Map"
export default function Home_Six() {

    return (
        <div className="boxed_wrapper yellow">
            <Layout headerStyle={6} footerStyle={6}>
                <Banner/>
                <Benefits/>
                <About/>
                <Service/>
                <Energy/>
                <Team/>
                <Project/>
                <Testimonial/>
                <News/>
                <Estimation/>
                <Google_Map/>
            </Layout>
        </div>
    )
}