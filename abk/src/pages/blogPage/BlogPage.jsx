import "./blogPage.scss";
import bgImg from "../../assets/abk-banner-3.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect, useState } from "react";
import api from "../../admin/api/posts";

const BlogPage = () => {
  const [bloqData, setBloqData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("blogs");
        setBloqData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div className="blogPage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>BLOQ</h1>
      </div>
      {bloqData?.map((bloqBox) => (
        <>
          <div className="blogContent">
            <div className="imgBox">
              <img src={bloqBox?.image} alt="" />
            </div>
            <div className="icons">
              <div className="icon">
                <span>
                  <AiOutlineUser />
                </span>
                <span>Dek 28, 2022</span>
              </div>
              <div className="icon">
                <span>
                  <AiOutlineUser />
                </span>
                <span>1,526 baxış </span>
              </div>
            </div>
            <h1>{bloqBox?.title}</h1>
            <p>{bloqBox?.content}</p>
            {/* <button>Read More</button>   */}
          </div>
        </>
      ))}
    </div>
  );
};

export default BlogPage;
