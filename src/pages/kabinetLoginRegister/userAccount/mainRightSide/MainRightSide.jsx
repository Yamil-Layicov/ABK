import { useQuery } from '@tanstack/react-query';
import api from '../../../../admin/api/posts';


const MainRightSide = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["analyses"],
    queryFn: () => api.get("analyses"),
  });

  console.log(data?.data);

  return (
    <div>
        <div className="insideRightSide">
            <div className="headerBox">
              <span>Tarix</span>
              <span>Fayl adı</span>
            </div>
            <div className="bodyMainBox">
              <div className="bodyBox">
                <div className="dateText">
                  <span className="date">11/12/2023</span>
                  <span className="text">Fitosanitar ekspertiza cavab</span>
                </div>
                <button>Yüklə</button>
              </div>
              <div className="bodyBox">
                <div className="dateText">
                  <span className="date">11/12/2023</span>
                  <span className="text">Fitosanitar ekspertiza cavab</span>
                </div>
                <button>Yüklə</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MainRightSide