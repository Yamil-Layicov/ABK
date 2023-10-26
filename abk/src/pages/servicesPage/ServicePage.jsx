import './servicePage.scss'
import bgImg from '../../assets/pageBanner.jpg';


const ServicePage = () => {
  return (
    <div className="servicePage">
      <div className="hedaer">
        <img style={{width:"100%", height:"65vh"}} src={bgImg} alt="" />
        <h1>XIDMƏTLƏR</h1>
      </div>
      <div className="center"></div>
      <div className="plan"></div>
    </div>
  )
}

export default ServicePage