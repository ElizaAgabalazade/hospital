import React from 'react';
import { useParams } from "react-router-dom";
import doctors from "../data/dt.json"; // JSON faylın
import './DoctorDetail.css';

const DoctorDetail = () => {
  const { id } = useParams();
  
  // JSON-dan həmin həkimi tapırıq
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  // Əgər ID səhvdirsə və ya həkim yoxdursa
  if (!doctor) {
    return <h2 style={{ padding: "100px", textAlign: "center" }}>Həkim tapılmadı!</h2>;
  }

  return (
    <div className="doctor_detail_container">
      {/* SECTION 1 - Sənin dizaynın */}
      <div className="section_1">
          <div className="section1_left">
              {/* Şəkli JSON-dan götürürük */}
              <img src={doctor.img} alt={doctor.name} />
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
                      <hr className="hr_of_icon1_and2" />
                  </div>
                  <div className="section_right_bottom_2">
                      <img src="/img/icn 2.png" alt="" />
                      <p>{doctor.patientCount || "0"}</p>
                      <span>Pasiyent sayı</span>
                      <hr className="hr_of_icon" />
                  </div>
                  <div className="section_right_bottom_3">
                      <img src="/img/icon_3.png" alt="" />
                      <p>{doctor.reviewCount || "0"}</p>
                      <span>Rəylər</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="section_2">
          <h3>Məlumat</h3>
          <hr className="section_2_hr" />
          <h3>Həkimin məqalələri</h3>
          <h3>Rəylər</h3>
      </div>
      <div className="section2_section_3">
          {/* Əgər bu şəkil hər həkimdə dəyişirsə doctor.signature və ya bənzər datadan çəkə bilərsən */}
          <img src="/img/Capture.PNG" alt="Capture" />
      </div>

      <div className="section_3">
          <div className="section_3_left">
              <h3>Vəzifə</h3>
          </div>
          <div className="section_3_right">
              {/* Dinamik vəzifə məlumatı */}
              <p>{doctor.specialty}</p>
          </div>
      </div>
      <div className="section_4">
          <div className="section_4_left">
              <h3>Mərkəz</h3>
          </div>
          <div className="section_4_right">
              {/* Dinamik mərkəz adı */}
              <p>{doctor.center || "Başgicəllənmə Mərkəzi"}</p>
          </div>
      </div>
      <div className="section_5">
        <div className="section_5_left">
          <h3>Təhsil</h3>
        </div>
        <div className="section_5_right">
          <ul>
            {/* Əgər JSON-da education siyahısı varsa onu göstər, yoxdursa sənin yazdığın default mətni */}
            {doctor.education && doctor.education.length > 0 ? (
              doctor.education.map((item, index) => (
                <li key={index}>
                  <i className="fa-solid fa-circle-check"></i>
                  {item}
                </li>
              ))
            ) : (
              // Sənin göndərdiyin orijinal HTML-in React versiyası
              <>
                <li>
                  <i className="className-solid fa-circle-check"></i>
                  2010-cu ildə Azərbaycan Tibb Universiteti fərqlənmə diplomu ilə bitirmişdir.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  2010-2011 ci illərdə Qulaq Burun Boğaz ixtisasi üzrə internatura keçmişdir.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  2015 ci ildə Türkiyə, İzmir Ege Universiteti Qulaq Burun Boğaz anabilim dalında ixtisaslaşmışdır.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  2018-2019 cu illərdə Türkiyə Ankara, Başkent Universiteti Nörotolojı kliniyinde eğitim almışdır.
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      
      {/* SECTION 6 - Müayinə və müalicə istiqamətləri */}
      <div className="section_6">
          <div className="secion_6_left">
              <h3>Müayinə və müalicə istiqamətləri</h3>
          </div>
          <div className="section_6_right">
              <ul>
                  {/* Əgər JSON-da treatments siyahısı olsa buradan dinamik çəkə bilərsən */}
                  {doctor.treatments && doctor.treatments.length > 0 ? (
                      doctor.treatments.map((item, index) => (
                          <li key={index}>
                              <i className="fa-solid fa-circle-check"></i>
                              {item}
                          </li>
                      ))
                  ) : (
                      // Sənin orijinal HTML siyahın
                      <>
                          <li><i className="fa-solid fa-circle-check"></i>Pediatrik əməliyyatlar- Tonzillektomiya, Adenoidektomiya, Qulaq pərdəsinə tüp taxılması</li>
                          <li><i className="fa-solid fa-circle-check"></i>Septoplastika (burun çəpərinin düzəldilməsi)</li>
                          <li><i className="fa-solid fa-circle-check"></i>Burun balıqqulaqlarına radiofrekans tətbiqi (konxalara)</li>
                          <li><i className="fa-solid fa-circle-check"></i>Burun sınığı əməliyyatı (açıq və qapalı reduksiya)</li>
                          <li><i className="fa-solid fa-circle-check"></i>Polipotomiya; FESC (funksional endoskopik sinus cərrahiyyəsi)</li>
                          <li><i className="fa-solid fa-circle-check"></i>Rinoplastika</li>
                          <li><i className="fa-solid fa-circle-check"></i>Qulaq seyvanının plastikası</li>
                          <li><i className="fa-solid fa-circle-check"></i>Timpanoplastika</li>
                          <li><i className="fa-solid fa-circle-check"></i>Miringoplastika</li>
                          <li><i className="fa-solid fa-circle-check"></i>Stapedektomiya</li>
                          <li><i className="fa-solid fa-circle-check"></i>Qulaq törəmələri</li>
                          <li><i className="fa-solid fa-circle-check"></i>Xoanal atreziya</li>
                      </>
                  )}
              </ul>
          </div>
      </div>







    </div>
  );
};

export default DoctorDetail;