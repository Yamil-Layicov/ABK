import bgImg from "../../assets/pageBanner.jpg";
import './aboutPage.scss'

const AboutPage = () => {
  return (
    <div className="aboutPage">
       <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>HAQQIMIZDA</h1>
      </div>
    </div>
  )
}

export default AboutPage