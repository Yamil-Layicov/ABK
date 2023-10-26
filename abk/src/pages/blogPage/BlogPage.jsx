import "./blogPage.scss";
import bgImg from "../../assets/pageBanner.jpg";
import {AiOutlineUser} from 'react-icons/ai'

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
        <img src="https://bioxlab-next-js.vercel.app/assets/img/blog/blog-in-01.jpg" alt="" />
        <div className="icons">
          <div className="icon">
            <span><AiOutlineUser/></span>
            <span>ALEXTINA</span>
          </div>
          <div className="icon">
            <span><AiOutlineUser/></span>
            <span>Dec 28, 2022</span>
          </div>
          <div className="icon">
            <span><AiOutlineUser/></span>
            <span>1,526 views</span>
          </div>
        </div>
        <h1>Lavoratories used for scientic reseach take many froms.</h1>
        <p>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default BlogPage;
