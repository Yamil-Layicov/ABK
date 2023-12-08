import { useEffect, useState } from "react";
import "./serviceDetail.scss";
import api from "../../../admin/api/posts";
import { useParams } from "react-router-dom";
import bgImg from "../../../assets/abk-banner-3.jpg";
import TruncatedText from "../../../helpers/TruncatedText";

const ServiceDetail = () => {
  const [serviceData, setServiceData] = useState([]);
  const [serviceLength, setServiceLength] = useState(1400);
  const { id } = useParams();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`services/${id}`);
        setServiceData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div className="servicePageDetail">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1> XIDMƏTLƏR </h1>
      </div>
      <div className="detailContent">
        <h1>{serviceData?.title}</h1>
        <p>
          {serviceData?.content && (
            <TruncatedText
              text={serviceData?.content}
              maxLength={serviceLength}
            />
          )}
        </p>
        {serviceData?.content?.length > serviceLength && (
          <p className="moreBtn" onClick={() => setServiceLength((prev) => 2 * prev)}>Daha çox...</p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
