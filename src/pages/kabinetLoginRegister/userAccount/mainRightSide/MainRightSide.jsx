import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../../../admin/api/posts";
import { useState } from "react";
import { toast } from "react-toastify";
import ConfirmModal from "../../../../admin/components/confirmModal/ConfirmModal";

const MainRightSide = () => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleDelete = (id) => {
    setSelectedItemId(id);
    setConfirmationVisible(true);
  };

  const handleConfirmDelete = () => {
    mutation.mutate(selectedItemId);
    setConfirmationVisible(false);
  };

  const handleCancelDelete = () => {
    setSelectedItemId(null);
    setConfirmationVisible(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return api.delete(`analyses/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["analyses"])
        .then(toast.success("Uğurla silindi"));
    },
  });


  const { isLoading, data } = useQuery({
    queryKey: ["analyses"],
    queryFn: () => api.get("analyses"),
  });

  const handlePdf = (fileUrl, fileName) => {
    fetch("https://res.hill.az/storage/app/public/180756.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName || "downloaded-file.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) =>
        console.error("Error downloading the PDF file:", error)
      );
  };


  return (
    <div>
      <div className="insideRightSide">
        <div className="headerBox">
          <span>Tarix</span>
          <span>Fayl adı</span>
        </div>
        <div className="bodyMainBox">
          {data &&
            data.data?.map((anal) => (
              <div className="bodyBox" key={anal?.id}>
                <div className="dateText">
                  <span className="date">11/12/2023</span>
                  <span className="text">{anal.name}</span>
                </div>
                <div className="buttons">
                  <button onClick={() => handlePdf(anal.file, anal.name)}>
                    Yüklə
                  </button>
                  <button onClick={() => handleDelete(anal.id)}>
                    Sil
                  </button>
                </div>
              </div>
            ))}
        </div>
        {confirmationVisible && <ConfirmModal title={"Analizi"} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete}/> }
      </div>
    </div>
  );
};

export default MainRightSide;
