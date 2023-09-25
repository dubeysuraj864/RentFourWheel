import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import OurService from "../components/OurService";

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <Hero />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <OurService />
        </div>
       
      </div>
    </>
  );
}

export default Home;
