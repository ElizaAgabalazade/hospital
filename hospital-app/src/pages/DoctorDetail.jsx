import React from 'react';
import { useParams } from "react-router-dom";
import doctors from "../data/dt.json"; 

import './DoctorDetail.css';

// Sənin istədiyin şəkil importu
import doc1_placeholder from '../assets/img/doctor2_no_name.png';

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <h2 style={{ padding: "100px", textAlign: "center" }}>Həkim tapılmadı!</h2>;
  }

  return (
    <div className="doctor_detail_container">
      {/* SECTION 1 - Profil Hissəsi */}
      <div className="section_1">
          <div className="section1_left">
              {/* Əgər JSON-da şəkil yoxdursa, import etdiyimiz doc1_placeholder-i qoyuruq */}
              <img src={doctor.img || doc1_placeholder} alt={doctor.name} />
          </div>
          <div className="section1_right">
              <div className="section1_right_top">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialty}</p>
              </div>
              <div className="sectiom1_right_bottom">
                  <div className="section_right_bottom_1">
                      <img src="/img/icon_1.png" alt="" />
                      <p>{doctor.experience}</p>
                      <span>Təcrübə</span>
                      <div className="vertical_divider" />
                  </div>
                  <div className="section_right_bottom_2">
                      <img src="/img/icn 2.png" alt="" />
                      <p>{doctor.patientCount || "0"}</p>
                      <span>Pasiyent sayı</span>
                      <div className="vertical_divider" />
                  </div>
                  <div className="section_right_bottom_3">
                      <img src="/img/icon_3.png" alt="" />
                      <p>{doctor.reviewCount || "0"}</p>
                      <span>Rəylər</span>
                  </div>
              </div>
          </div>
      </div>

      {/* Tab Hissəsi */}
      <div className="section_tab_menu">
          <h3 className="active_tab">Məlumat</h3>
          <hr className="tab_divider" />
          <h3>Həkimin məqalələri</h3>
          <h3>Rəylər</h3>
      </div>

      <div className="section_signature">
          <img src="/img/Capture.PNG" alt="Signature" />
      </div>

      {/* SECTION 3 - Vəzifə */}
      <div className="detail_row gray_bg">
          <div className="row_left"><h3>Vəzifə</h3></div>
          <div className="row_right"><p>{doctor.specialty}</p></div>
      </div>

      {/* SECTION 4 - Mərkəz */}
      <div className="detail_row">
          <div className="row_left"><h3>Mərkəz</h3></div>
          <div className="row_right"><p>{doctor.center || "Başgicəllənmə Mərkəzi"}</p></div>
      </div>

      {/* SECTION 5 - Təhsil */}
      <div className="detail_row gray_bg education_section">
        <div className="row_left"><h3>Təhsil</h3></div>
        <div className="row_right">
          <ul>
            {doctor.education?.map((item, index) => (
              <li key={index}><i className="fa-solid fa-circle-check"></i> {item}</li>
            )) || <li>Məlumat yoxdur</li>}
          </ul>
        </div>
      </div>
      
      {/* SECTION 6 - Müayinə */}
      <div className="detail_row">
          <div className="row_left"><h3>Müayinə və müalicə istiqamətləri</h3></div>
          <div className="row_right">
              <ul>
                {doctor.treatments?.map((item, index) => (
                    <li key={index}><i className="fa-solid fa-circle-check"></i> {item}</li>
                )) || <li>Məlumat yoxdur</li>}
              </ul>
          </div>
      </div>
    </div>
  );
};

export default DoctorDetail;