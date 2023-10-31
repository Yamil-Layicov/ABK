import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import "./about.scss";
import {useNavigate} from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  const navigateAbout = () => {
    navigate("haqqımızda")
    window.scrollTo({
      top:0,
    })
  }

  return (
    <div className="about">
      <div className="imgContainer">
        <div className="img">
          <img
            src="https://bioxlab-next-js.vercel.app/assets/img/about/about-bg-01.png"
            alt=""
          />
          <div className="experienceBox">
            <div className="spanNum">12</div>
            <div className="spanTexts">
            <div className="spanText spanText1">İllik</div>
            <div className="spanText spanText2">Təcrübə</div>
            </div>
          </div>
        </div>
      </div>
      <div className="textContainer">
        <h6 >___HAQQIMIZDA</h6>
        <h1>AQRAR SAHƏDƏ İXTİSASLAŞMIŞ LABORATORİYA</h1>
        <p className="second">
        2019-cu ildə yaradılan laboratoriya Azərbaycanda aqrar sahənin inkişafında böyük rol oynanıyır. Laboratoriyada öz sahələrində ixtisaslaşmış əməkdaşlar tərəfindən ən son texnoloji avadanlıqlardan istifadə edilərək analizlər edilir və nəticələrin dəqiq və düzgün təhlili aparılır. Hazırda laboratoriyada fitosanitar, virusoloji, qida məhsullarının analizi, toxum, su, torpaq analizləri, monitorinq, təlim və konsultasya xidmətləri göstərilməkdədir.   Ən son texnoloji avadanlıqlardan istifadə edərək müştərilərə yüksək keyfiyyətli nəticələri təqdim edirik. Daima müştəri məmnuniyyətinə önəm verir, işimizin sürətli və dəqiq olmasına çalışırıq, bu proses zamanı ətrafı mühitin mühafizəsini əsas götürüb ekoloji təmizliyi təbliğ edir, sağlam gələcək üçün irəliləyik.
        </p>
        {/* <div className="doneBox">
          <span className="spanIcon">
            <DoneOutlinedIcon />
          </span>
          <span>Extramural Funding</span>
        </div>
        <div className="doneBox">
          <span className="spanIcon">
            <DoneOutlinedIcon />
          </span>
          <span>Bacteria Markers</span>
        </div>
        <div className="doneBox">
          <span className="spanIcon">
            <DoneOutlinedIcon />
          </span>
          <span>Nam nec mi euismod euismod</span>
        </div>
        <div className="doneBox">
          <span className="spanIcon">
            <DoneOutlinedIcon />
          </span>
          <span>In aliquet dui nec lectus</span>
        </div> */}
        <button onClick={navigateAbout}>Haqqımızda</button>
      </div>
    </div>
  );
};

export default About;
