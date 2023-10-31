import bgImg from "../../assets/abk-banner-3.jpg";
import "./aboutPage.scss";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import img1 from './imgs/img1.jpg';
import img2 from './imgs/img2.jpg';
import img3 from './imgs/img3.jpg';


const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>HAQQIMIZDA</h1>
      </div>

      <div className="aboutContent">
        <div className="imgContainer">
          <div className="imgOne" >
            <img
            src={img3}
             
              alt=""
            />
            <div className="experinceBox">
              <span>12</span>
              <span style={{paddingLeft:"38%"}}>İllik</span>
              <span style={{paddingLeft:"20%"}}>Təcrübə</span>
            </div>
          </div>
          <div>
            <div className="imgTwo">
              <img
                src={img2}
                alt=""
              />
            </div>
            <div className="imgThree">
              <img
                 src={img1}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="textContainer">
          <h1>AQRAR SAHƏDƏ İXTİSASLAŞMIŞ LABORATORİYA.</h1>
          <p className="first">
          Nə üçün biz?   
          </p>
          <p className="second">
          2019-cu ildə yaradılan laboratoriya Azərbaycanda aqrar sahənin inkişafında böyük rol oynanıyır. Laboratoriyada öz sahələrində ixtisaslaşmış əməkdaşlar tərəfindən ən son texnoloji avadanlıqlardan istifadə edilərək analizlər edilir və nəticələrin dəqiq və düzgün təhlili aparılır. Hazırda laboratoriyada fitosanitar, virusoloji, qida məhsullarının analizi, toxum, su, torpaq analizləri, monitorinq, təlim və konsultasya xidmətləri göstərilməkdədir.   Ən son texnoloji avadanlıqlardan istifadə edərək müştərilərə yüksək keyfiyyətli nəticələri təqdim edirik. Daima müştəri məmnuniyyətinə önəm verir, işimizin sürətli və dəqiq olmasına çalışırıq, bu proses zamanı ətrafı mühitin mühafizəsini əsas götürüb ekoloji təmizliyi təbliğ edir, sağlam gələcək üçün irəliləyik.
          </p>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>Yüksək Keyfiyyətli Xidmətlər</span>
          </div>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>Sürətli İş Prosesi</span>
          </div>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>24/7 əlçatanlıq</span>
          </div>
          <div className="doneBox">
            <span className="spanIcon">
              <DoneOutlinedIcon />
            </span>
            <span>Mütəxəssislərdən ibarət komanda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
