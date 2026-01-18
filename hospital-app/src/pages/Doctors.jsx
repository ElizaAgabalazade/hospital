import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './Doctors.css';

// Həkimlərin datası və şəkilləri
const doctorsData = [
  {
    id: 1,
    name: "Dr. Nigar Muradova",
    specialty: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    img: "./img/haqqimizda/doctor1.png"
  },
  {
    id: 2,
    name: "Dr. Kamilə Allahverdiyeva",
    specialty: "Qulaq Burun Boğaz cərrahı",
    img: "./img/haqqimizda/doctor2.png"
  },
  {
    id: 3,
    name: "Dr. Kamilə Allahverdiyeva",
    specialty: "Qulaq Burun Boğaz həkimi",
    img: "./img/haqqimizda/doctor3.png"
  },
  {
    id: 4,
    name: "Dr. Mahtaban Qədiməli",
    specialty: "Qulaq Burun Boğaz cərrahı",
    img: "./img/haqqimizda/doctor4.png"
  }
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctorsData.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      {/* SOL TƏRƏF */}
      <div className="section_left">
        <ul>
          <li><Link to="#">Tariximiz</Link><FaChevronRight /></li>
          <li><Link to="#">Missiya və Məqsəd</Link><FaChevronRight /></li>
          <li><Link to="#">Keyfiyyət siyasəti</Link><FaChevronRight /></li>
          <li><Link to="#">Keyfiyyətə nəzarət</Link><FaChevronRight /></li>
          <li><Link to="#">Keyfiyyətə nəzarət</Link><FaChevronRight /></li>
          <li><Link to="#">Beynəlxalq Əməkdaşlıq</Link><FaChevronRight /></li>
          <li><Link to="#">Mərkəzlərimiz</Link><FaChevronRight /></li>
          <li><Link to="#">Həkimlərimiz</Link><FaChevronRight /></li>
          <li><Link to="#">Məmnunluq anketi</Link><FaChevronRight /></li>
        </ul>
      </div>

      {/* SAĞ TƏRƏF */}
      <div className="section_right">
        {/* Axtarış Girişi (section_right_1) */}
        <div className="section_right_1">
          <input
            type="text"
            placeholder="Həkimin Adı, Soyadı"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
{/* Kartlarımın siyahısı (section_right_2) */}
<div className="section_right_2">
  <div className="section_right_2_card">
    {filteredDoctors.map((doc) => (
      /* Bütün həkim məlumatları bu div-in içində olmalıdır */
      <div key={doc.id} className={`section_right_2_card${doc.id}`}>
        <img src={doc.img} alt={doc.name} />
        <h3>{doc.name}</h3>
        <p>{doc.specialty}</p>

        {/* Link MÜTLƏQ map-in içində, yəni burada olmalıdır */}
        <Link to={`/doctor/${doc.id}`} className="details_btn">
          Ətraflı bax
        </Link>
      </div>
    ))}

    {/* Axtarış nəticəsi tapılmadıqda bura işləyir */}
    {filteredDoctors.length === 0 && (
      <p className="no-result">Axtarışa uyğun həkim tapılmadı.</p>
    )}
  </div>
</div>
      </div>
    </section>
  );
};

export default Doctors;