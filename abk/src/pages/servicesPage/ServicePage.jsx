import "./servicePage.scss";
import bgImg from "../../assets/pageBanner.jpg";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";

const serviceData = [
  {
    id: 1,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "Virusoloji",
    desc: "Virusologiya şöbəsi – bitki nümunələrində karantin nəzarətində olan virus xəstəliklərinin aşkarlanması, onların molekulyar mexanizm vasitəsilə daha dəqiq və qısa zamanda diaqnostikasını həyata keçirir. " ,
  },
  {
    id: 2,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "Qida məhsullarının GMO analizi",
    desc: "Laboratoriamızda qida məhsullarında geni modifikasiya olunmuş orqanizmlərin Real vaxtda PZR ilə təyini həyata keçirilir. ",
  },
  {
    id: 3,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "Bakterioloji ",
    desc: "Fitopatoloji ekspertiza zamanı  bakteriya mənşəli xəstəlik törədicilərinin təbii substratdan ayrılması və qida mühitlərinə əkilməsi, SZ810 B2/L stereo mikroskop, EXT 20 biolojik mikroskop kimi müasir optik cihazlardan istifadə olunmaqla morfoloji və morfometrik əlamətlərə əsasən xəstəlik törədicilərinin aşkarlanması aparılır",
  },
  {
    id: 4,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "Təlim",
    desc: "Öz sahələrində ixtisaslaşmış əməkdaşlar daha yaxşı nəticə əldə etmək, aqrar sahədə inkişaflar üçün xüsusi təlimlər keçirirlər",
  },
  {
    id: 5,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "Konsultasiya",
    desc: "Konsultasiya təcrübəli personalımız tərəfindən həyata keçirilir. Ərazilərdən nümunəgötürmə xidmətləri və laboratoriya testləri ən müasir metodlar və avadanlıqlarla, beynəlxalq standartlar və metodlara uyğun olaraq həyata keçirilir.",
  },
  {
    id: 6,
    logo: <BiotechOutlinedIcon fontSize="large" />,
    title: "Monitorinq",
    desc: "Tarla bitkiləri, meyvə bağları və istixanalarda ziyanverici təsirlərinin müəyyən olunması üçün mütəxəssislər tərəfindən sahələrdə monitorinqlər aparılır.",
  },
];

const ServicePage = () => {
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
            } ${index === 3 && "box4"} ${index === 4 && "box5"} ${
              index === 5 && "box6"
            }`}
          >
            <div className="intoBox">
              <span className="labIcon">{box.logo}</span>
              <div className="labTitle">{box.title}</div>
              <div className="labDesc">
                <div>{box.desc}</div>
                <div>{box.desc1}</div>
                <div>{box.desc2}</div>
              </div>
              {/* <div className="readMore">
                <div className="redMoreBox"></div>
                <span>READ MORE</span>
              </div> */}
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
