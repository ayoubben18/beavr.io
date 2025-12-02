
const About = () => {
    return (

      <div className="py-16 px-6 lg:py-36 lg:px-24 flex flex-col justify-center items-center gap-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-top w-full gap-6 md:gap-12">
              <h1 className="text-xl md:text-2xl font-light md:w-1/3 text-secondary shrink-0">
                  About Us
              </h1>
              <p className="text-base md:text-lg md:w-2/3">
                  Beavr is the fruit of a team dedicated to leveraging the ease and access the internet brought to our lives. We believe fiercely in the power of the human intelligent mind and the value of individual autonomy. However, we also deeply perceive the strength of unified teamwork.
              </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-top w-full gap-6 md:gap-12">
              <h2 className="text-xl md:text-2xl font-light md:w-1/3 text-secondary shrink-0">
                  Our Mission
              </h2>
              <p className="text-base md:text-lg md:w-2/3">
                  We believe managing multiple projects shouldn't mean multiplying your chaos. Our mission is to provide the single, unified platform where you can build, grow, and control every independent project efficiently, without the "fragmentation tax" of wasting time and money on disconnected tools.
              </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-top w-full gap-6 md:gap-12">
              <h2 className="text-xl md:text-2xl font-light md:w-1/3 text-secondary shrink-0">
                  Our Vision
              </h2>
              <p className="text-base md:text-lg md:w-2/3">
                  To be the indispensable command center for every multi-project leader globally. We envision a future where every project—from a local club to a professional portfolio—operates under one streamlined system, instantly leveraging the power of its own dedicated AI and data, giving one manager total, effortless control over their entire world of work.
              </p>
          </div>
      </div>
    )
  }
  
  export default About