import About from "../../components/about/About";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import Services from '../../components/services/Services'
import Team from "../../components/team/Team";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Header />
      <Services/>
      <About/>
      <Gallery/>
      <WhyChooseUs/>
      <Team/>
    </>
  );
};

export default Home;
