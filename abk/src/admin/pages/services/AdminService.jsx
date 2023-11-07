import "./adminService.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'


const AdminService = () => {
  const navigate = useNavigate();
  

  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [bloqData, setBloqData] = useState([]);

  const [images, setImages] = useState(null);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("services");
        setBloqData(response.data);
        console.log(bloqData);

        setContent(response.data.content);
        setTitle(response.data.title);

        setImages(response.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  const handleEdit = (id) =>{
    navigate(`${id}`)
  }

  const handleCreate = () => {
    navigate("create")
  }

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`services/${id}`);

      if(response) return alert("silindi")

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="adminBloq">
      <h4>Xidmətlər</h4>
      <div className="tableContent">
        <div className="createNewBtn">
          <button onClick={handleCreate}>Yenisini yarat +</button>
        </div>
      <table>
        <tr>
          <th>Şəkil *</th>
          <th>Başlıq *</th>
          <th>Məzmun *</th>
          <th>Parametrlər *</th>
        </tr>
        {bloqData.map((item) => (
            <tr key={item.id}>
              <td><img style={{width:"100px", height:"100px"}} src={item.image} alt="" /></td>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>
              <button onClick={() => handleEdit(item.id)}><BiEditAlt/></button>
                <button onClick={() => handleDelete(item.id)}><RiDeleteBin5Line/></button>
              </td>
            </tr>
          ))}
      </table>
      </div>
    </div>
  );
};

export default AdminService;
