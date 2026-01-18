import { useState } from 'react';
import { Link } from 'react-router-dom';

const doctorsData = [
  { id: 1, name: "Dr. Əli Məmmədov", specialty: "Kardioloq" },
  { id: 2, name: "Dr. Leyla Quliyeva", specialty: "Stomatoloq" },
  // Daha çox həkim əlavə et...
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctorsData.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Həkimlərimiz</h2>
      <input 
        type="text" 
        placeholder="Həkim axtar..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      
      <div className="doctor-list">
        {filteredDoctors.map(doc => (
          <div key={doc.id} className="doctor-card">
            <h3>{doc.name}</h3>
            <p>{doc.specialty}</p>
            <Link to={`/doctors/${doc.id}`}>Ətraflı bax</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;