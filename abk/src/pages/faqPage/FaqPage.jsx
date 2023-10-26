import './faqPage.scss'
import bgImg from "../../assets/pageBanner.jpg";


const FaqPage = () => {
  return (
    <div className='faqPage'>
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>FAQ</h1>
      </div>
    </div>
  )
}

export default FaqPage