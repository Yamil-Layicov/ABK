import "./servicePage.scss";
import bgImg from "../../assets/abk-banner-3.jpg";
import img1 from './imgs/abk fitosanitar.svg';
import img2 from './imgs/abk virusoloji.svg';
import img3 from './imgs/abk gmo.svg';
import img4 from './imgs/abk torpaq və su.svg';
import img5 from './imgs/abk monitoring.svg';
import img6 from './imgs/abk təlim.svg';  
import { useEffect, useState } from "react";
import api from '../../admin/api/posts';

// const serviceData = [
//   {
//     id: 1,
//     logo: img1,
//     title: "Virusoloji",
//     desc: "Virusologiya şöbəsi – bitki nümunələrində karantin nəzarətində olan virus xəstəliklərinin aşkarlanması, onların molekulyar mexanizm vasitəsilə daha dəqiq və qısa zamanda diaqnostikasını həyata keçirir. " ,
//   },
//   {
//     id: 2,
//     logo:img2,
//     title: "Qida məhsullarının GMO analizi",
//     desc: "Laboratoriamızda qida məhsullarında geni modifikasiya olunmuş orqanizmlərin Real vaxtda PZR ilə təyini həyata keçirilir. ",
//   },
//   {
//     id: 3,
//     logo: img3,
//     title: "Bakterioloji ",
//     desc: "Fitopatoloji ekspertiza zamanı  bakteriya mənşəli xəstəlik törədicilərinin təbii substratdan ayrılması və qida mühitlərinə əkilməsi, SZ810 B2/L stereo mikroskop, EXT 20 biolojik mikroskop kimi müasir optik cihazlardan istifadə olunmaqla morfoloji və morfometrik əlamətlərə əsasən xəstəlik törədicilərinin aşkarlanması aparılır",
//   },
//   {
//     id: 4,
//     logo: img4,
//     title: "Təlim",
//     desc: "Öz sahələrində ixtisaslaşmış əməkdaşlar daha yaxşı nəticə əldə etmək, aqrar sahədə inkişaflar üçün xüsusi təlimlər keçirirlər",
//   },
//   {
//     id: 5,
//     logo: img5,
//     title: "Konsultasiya",
//     desc: "Konsultasiya təcrübəli personalımız tərəfindən həyata keçirilir. Ərazilərdən nümunəgötürmə xidmətləri və laboratoriya testləri ən müasir metodlar və avadanlıqlarla, beynəlxalq standartlar və metodlara uyğun olaraq həyata keçirilir.",
//   },
//   {
//     id: 6,
//     logo: img6,
//     title: "Monitorinq",
//     desc: "Tarla bitkiləri, meyvə bağları və istixanalarda ziyanverici təsirlərinin müəyyən olunması üçün mütəxəssislər tərəfindən sahələrdə monitorinqlər aparılır.",
//   },
// ];

const ServicePage = () => {
  // const [serviceData, setServiceData] = useState([]);
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
          <div
            key={index}
            className={`box ${index === 0 && "box1"} ${index === 1 && "box2"} ${
              index === 2 && "box3"
            } ${index === 3 && "box4"} ${index === 4 && "box5"} ${index === 5 && "box6"} ${index === 6 && "box7"} ${index === 7 && "box8"}`}
          >
            <div className="intoBox">
              <span className="labIcon">
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
