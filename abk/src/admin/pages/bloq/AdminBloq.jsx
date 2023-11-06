import "./adminBloq.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";


const AdminBloq = () => {
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
        const response = await api.get("blogs");
        setBloqData(response.data);
        console.log(response.data);

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

  return (
    <div className="adminBloq">
      <h4>Bloq</h4>
      {/* <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div className="imageFile">
            <div className="inputBox">
              <label htmlFor="image">
                <span>
                  <IoMdCloudUpload
                    style={{ fontSize: "22px", marginRight: "10px" }}
                  />
                  Şəkil *
                </span>
                <img src={previousImage || image} alt="" />
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>
          <div>
            <label>Başlıq *</label>
            <input
              type="text"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Məzmun *</label>
            <textarea
              cols="30"
              rows="7"
              value={content || ""}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Yadda saxla</button>
        </form>
      </div> */}

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
                <button onClick={() => handleEdit(item.id)}>Redaktə et</button>
              </td>
            </tr>
          ))}
      </table>
      </div>
    </div>
  );
};

export default AdminBloq;
