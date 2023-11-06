import "./adminFaq.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";

const AdminFaq = () => {
  const navigate = useNavigate();

  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("faqs");
        setFaqData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const handleEdit = (id) => {
    navigate(`${id}`);
  };

  const handleCreate = () => {
    navigate("create");
  };

  return (
    <div className="adminFaq">
      <h4>FAQ</h4>
      <div className="tableContent">
        <div className="createNewBtn">
          <button onClick={handleCreate}>Yenisini yarat +</button>
        </div>
      </div>
      <form>
          <div className="inputBox">
            <label>Başlıq *</label>
            <input type="text" />
          </div>
          <div className="inputBox">
            <label>Məzmun * *</label>
            <input type="text" />
          </div>
        </form>
    </div>
  );
};

export default AdminFaq;
