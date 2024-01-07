import { useState } from "react";
import api from "../../../../admin/api/posts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FiUploadCloud } from "react-icons/fi";
import "./addAnalysis.scss";
import { ProgressBar } from "react-loader-spinner";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import CategoryEdit from "./categoryEdit/CategoryEdit";
import CategoryModal from "./categoryModal/CategoryModal";



const AddAnalysis = () => {
  const [userId, setUSerId] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [categoryId, setCategoryId] = useState("")

  const queryClient = useQueryClient();

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]?.name);
  // };

  const navigate = useNavigate();

  // const handleUpload = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append("user_id", userId);
  //     formData.append("name", name);
  //     formData.append("file", selectedFile);


  //     const response = await api.post(`users`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     if (response) {
  //       toast.success("Əlavə olundu");
  //       navigate(-1);
  //     }
  //   } catch (error) {
  //     toast.error("Xəta baş verdi");
  //     console.error(error);
  //   }
  // };

  // const { isLoading, data } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: () => api.get("users"),
  // });

  const { isLoading, data } = useQuery({
    queryKey: ["analyses-categories"],
    queryFn: () => api.get("analyses-categories"),
  });

  console.log(data?.data);

  const mutationCategory = useMutation({
    mutationFn: (id) => {
      return api.delete(`analyses-categories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["analyses-categories"]).then(
        toast.success("Uğurla silindi") 
      );
    },
  }); 

  const handleDeleteCategory = (id) => {
    mutationCategory.mutate(id);
  };

  const createCategory = () => {
    setShowModal(!showModal);
  };

  const handleEditCategory = (id) => {
    setShowModalEdit(true)
    setCategoryId(id)
  };

  

  return (
    <div className="addAnalysis">
      <div className="intoSettings">
      {showModal && <CategoryModal  setShowModal={setShowModal} />}
      {showModalEdit && <CategoryEdit categoryId={categoryId} setShowModalEdit={setShowModalEdit} />}
        <div className="categoryContent">
          <div className="createNewBtn">
            <button onClick={createCategory}>Analiz növü yarat +</button>
          </div>
          <div className="table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>ANALİZ NÖVÜ</th>
                <th>Y.TARIXI</th>
                <th>D.TARIXI</th>
                <th style={{ width: "100px" }}>Parametrlər</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="5">
                    <div className="progressBar">
                      <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor="white"
                        barColor="#51E5FF"
                      />
                    </div>
                  </td>
                </tr>
              ) : (
                data?.data?.map((category, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{category?.name}</td>
                    <td>{index}</td>
                    <td>{index}</td>
                    <td>
                      <button onClick={() => handleEditCategory(category?.id)}>
                        <BiEditAlt />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category?.id)}
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          </div>
        </div>


        {/* <h4 className="mt-4 text-secondary">Yeni analiz əlavə edin</h4>
        <form onSubmit={handleUpload}>
          <div className="div">
            <label>Kimə?</label>
            <select
              value={userId || ""}
              onChange={(e) => setUSerId(e.target.value)}
            >
              <option value="" disabled>
                Nəfər seçin
              </option>
              {data &&
                data?.data?.map((user) => (
                  <option
                    style={{ color: "black" }}
                    key={user?.id}
                    value={user?.id}
                  >
                    {user?.full_name} - {user?.user_id}
                  </option>
                ))}
            </select>
          </div>
          <div className="div">
            <label>Analiz Adı</label>
            <textarea
              cols="30"
              rows="2"
              value={userId || ""}
              onChange={(e) => setUSerId(e.target.value)}
            ></textarea>
          </div>
          <div className="div">
            <label>Qeyd</label>
            <textarea
              cols="30"
              rows="7"
              value={content || ""}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="imageFile div">
            <div className="logoBox">
              <label htmlFor="logo">
                <div className="logo">
                  <span>
                    <FiUploadCloud />
                  </span>
                  <span className="text">{selectedFile || "PDF"}</span>
                </div>
              </label>
              <input
                id="logo"
                name="logo"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="buttons">
            <button type="submit">Yadda saxla</button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default AddAnalysis;
