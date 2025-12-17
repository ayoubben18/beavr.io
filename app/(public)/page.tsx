
import About from '@/components/public/home/about'
import HomeFAQ from '@/components/public/home/faq'
import HomeFeatures from '@/components/public/home/features'
import HomeHero from '@/components/public/home/hero'
import HomeNavbar from '@/components/public/home/navbar'
import HomeStats from '@/components/public/home/stats'


const HomePage = () => {
    return (
        
        <div className="flex flex-col">
            <HomeNavbar />
            <HomeHero />
            <HomeFeatures />
            <About />
            <HomeFAQ />
            <HomeStats />
        
        </div>
    )
}

export default HomePage