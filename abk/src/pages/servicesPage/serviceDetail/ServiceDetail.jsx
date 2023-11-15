import { useEffect, useState } from 'react';
import './serviceDetail.scss';
import api from "../../../admin/api/posts";
import { useParams, useNavigate } from "react-router-dom";


const ServiceDetail = () => {
  const [serviceData, setServiceData] = useState([]);
  const {id} = useParams();

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
    <div className='servicePageDetail'>
        <>
          <h1>{serviceData?.title}</h1>
          <p>{serviceData?.content}</p>
        </>
    </div>
  )
}

export default ServiceDetail