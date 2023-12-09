import About from "../../components/about/About";
import Feedback from "../../components/feedback/Feedback";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import Services from '../../components/services/Services'
import Team from "../../components/team/Team";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <main style={{maxWidth:"2100px", margin:"auto"}}>
      <Header />
      <Services/>
      <About/>
      <Gallery/>
      <WhyChooseUs/>
      <Team/>
      <Feedback/>
    </main>
  );
};

export default HomePage;
