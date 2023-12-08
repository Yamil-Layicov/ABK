import "./blogPage.scss";
import bgImg from "../../assets/abk-banner-3.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect, useState } from "react";
import api from "../../admin/api/posts";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { GoArrowRight } from "react-icons/go";
import { convertDate } from "../../helpers/DateFns";
import TruncatedText from "../../helpers/TruncatedText";

const BlogPage = () => {
  const [bloqData, setBloqData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [search] = useSearchParams();

  const handleId = (id) => {
    console.log(id);
    navigate(`${id}`);
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const response = await api.get("blogs");

        if (response) {
          setBloqData(
            search.get("category")
              ? response.data.filter(
                  (item) =>
                    Number(item.category_id) === Number(search.get("category"))
                )
              : response.data
          );
          setLoading(false);
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, [search.get("category")]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("categories");
        setCategories(response?.data);
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
      <div className="mainContent">
        <div>
          {loading ? (
            <Loader color={"white"} />
          ) : bloqData.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                margin: "auto",
              }}
            >
              <img
                style={{ width: "200px", height: "200px", margin: "auto" }}
                src="/notResult.jpg"
                alt=""
              />
              <h1>Məlumat tapılmadı</h1>
              <Link onClick={() => navigate(-1)}>
                <button className="button">Geri Qayit</button>
              </Link>
            </div>
          ) : (
            <div className="boxes">
              {bloqData.map((box) => (
                <div key={box?.id} className="blogContent">
                  <div className="imgBox">
                    <img src={box?.image} alt="" />
                  </div>
                  <div className="icons">
                    <div className="icon">
                      <span>
                        <AiOutlineUser />
                      </span>
                      <span>{convertDate(box?.created_at)}</span>
                    </div>
                    <div className="icon">
                      <span>
                        <AiOutlineUser />
                      </span>
                      <span>1,526 baxış </span>
                    </div>
                  </div>
                  <h1>
                    <TruncatedText text={box?.title} />
                  </h1>
                  <p>
                    <TruncatedText text={box?.content} />
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="categories">
          <h2>Kateqoriyalar</h2>
          {categories?.map((box) => (
            <Link
              className="category-link"
              to={`/blog?category=${box.id}`}
              key={box.id}
            >
              <p>{box.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
