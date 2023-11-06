import "./blogPage.scss";
import bgImg from "../../assets/abk-banner-3.jpg";
import {AiOutlineUser} from 'react-icons/ai'
import img1 from './imgs/img1.jpeg'
import img2 from './imgs/img2.jpeg'

const BlogPage = () => {
  return (
    <div className="blogPage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>BLOQ</h1>
      </div>
      <div className="blogContent">
        <img src={img1} alt="" />
        <div className="icons">
          <div className="icon">
            <span><AiOutlineUser/></span>
            <span>Dek 28, 2022</span>
          </div>
          <div className="icon">
            <span><AiOutlineUser/></span>
            <span>1,526 baxış </span>
          </div>
        </div>
        <h1>Letgen firmasının rəhbəri Fahrettin Özcan Aqro bitki klinikasının mütəxəssislərinə təlim keçmişdir.</h1>
        <p>Təlim zamanı mütəxəssislərin bilik və bacarıqları yüksək səviyyədə qiymətləndirilmiş, əlavə məlumatlar verilmiş və gələcək əməkdaşlıq üçün ilkin danışıqlar aparılmışdır.</p>
        {/* <button>Read More</button>   */}
      </div>
      <div className="blogContent">
        <img src={img2} alt="" />
        <div className="icons">
          <div className="icon">
            <span><AiOutlineUser/></span>
            <span>Yan 28, 2022</span>
          </div>
          <div className="icon">
            <span><AiOutlineUser/></span>
            <span>1,152 baxış </span>
          </div>
        </div>
        <h1>Koreyalı mütəxəssislər Agro Bitki Klinikasına baxış keçirmişlər.</h1>
        <p>Koreyalı mütəxəssislər və klinikanın mütəxəssisləri arasında qarşılıqlı fikir mübadiləsi aparılmış və gələcək əməkdaşlıqla bağlı müəyyən razılığa gəlinmişdir.</p>
        {/* <button>Read More</button> */}
      </div>
    </div>
  );
};

export default BlogPage;
