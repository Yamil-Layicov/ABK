import "./servicePage.scss";
import bgImg from "../../assets/abk-banner-3.jpg";
import { useEffect, useState } from "react";
import api from '../../admin/api/posts';

const ServicePage = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [images, setImages] = useState(null);
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("services");
        setServiceData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);



  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("services");
        setServiceData(response.data);
        console.log(serviceData);

        setContent(response.data.content);
        setTitle(response.data.title);

        setImages(response.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div className="servicePage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>XIDMƏTLƏR</h1>
      </div>
      <div className="centerSection">
      <div className="textHeader">
         <h5> ___XİDMƏTLƏRİMİZ___</h5>
         <h1>Xidmət Sahəsi</h1>
        </div>
        <div className="boxes">
        {serviceData.map((box, index) => (
          <div key={index} className="box box1">
            <div className="intoBox">
              <span className="labIcon" style={{backgroundColor:box?.color}}>
                <img src={box.image} alt="" />
              </span> 
              <div className="labTitle">{box.title}</div>
              <div className="labDesc">
                <div>{box.content}</div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="plansection"></div>
    </div>
  );
};

export default ServicePage;
