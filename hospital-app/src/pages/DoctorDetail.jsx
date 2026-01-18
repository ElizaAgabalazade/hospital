import { useParams } from "react-router-dom";
// JSON-u mütləq fiqursuz mötərizəsiz çağırırıq:
import doctors from "../data/dt.json"; 

const DoctorDetail = () => {
  const { id } = useParams();
  
  // JSON-dan gələn datada həkimi tapırıq
  // Qeyd: id JSON-da rəqəmdirsə parseInt istifadə edirik
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <h2 style={{ padding: "20px" }}>Həkim tapılmadı!</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{doctor.name}</h1>
      <p><strong>İxtisas:</strong> {doctor.specialty}</p>
      <p><strong>Təcrübə:</strong> {doctor.experience}</p>
      <hr />
      <p>{doctor.info}</p>
    </div>
  );
};

export default DoctorDetail;