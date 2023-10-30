import "./faqPage.scss";
import bgImg from "../../assets/pageBanner.jpg";

const FaqPage = () => {
  return (
    <div className="faqPage">
      <div className="hedaerSection">
        <div className="img">
          <img src={bgImg} alt="" />
        </div>
        <h1>FAQ</h1>
      </div>
      <div className="faqText">
        <h1>Tez-tez soruşulan suallar</h1>
        <p>Aşağıda Agro Bitki Klinikasına ən çox verilən suallara cavab tapa bilərsiniz. <br /> Əlavə sual yaranarsa faq@abk-fito.az ünvanına e-poçt göndərmək və tezliklə cavab almaq mümkündür</p>
      </div>
      <div className="accordion accordions" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Bitki Xəstəliklərinin Diaqnostikası Nədir?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Agro bitki klinikasında bitki xəstəliklərinin diaqnostikası
              xəstəliyin olub olmadığını müəyyən etmək üçün laboratoriyada
              sınaqdan keçirilə və becərilə bilən bitki və bitkiçilik
              materialının dəqiq müayinə və müalicəsinin təşkil olunmasıdır.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Laboratoriya Nümunələri Üzərində Sınaqları Kim Həyata Keçirir?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Laboratoriya nümunələri üzərində sınaqlar ölkədə və xaricdə
              ixtisaslaşmış mütəxəssislər tərəfindən həyata keçirilir.
            </div>
          </div>
        </div>
      </div>
      <div className="messageBox">
        <h1>Hər hansı bir kömək lazımdır</h1>
        <div className="form">
          <h4>Bizimlə Birbaşa Əlaqə</h4>
          <form>
            <input type="text" placeholder="adınızı daxil edin"/>
            <input type="text" placeholder="e-poçt daxil edin "/>
            <textarea name="" id="" cols="30" placeholder="mesajınızı yazın" rows="10"></textarea>
          </form>
          <button>Mesaj göndərin</button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
