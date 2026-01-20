import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import doctors from "../data/dt.json";
import icon1 from '../assets/img/icon_1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon_3.png';
import './DoctorDetail.css';

// Şəkil tapılmadıqda istifadə olunacaq susmaya görə profil şəkli
import doc1_placeholder from '../assets/img/doctor2_no_name.png';

const DoctorDetail = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('məlumat'); // Tab idarəetməsi

    // id-yə uyğun həkimi tapırıq
    const doctor = doctors.find((doc) => doc.id === parseInt(id));

    if (!doctor) {
        return (
            <div className="not_found_wrapper">
                <h2>Həkim tapılmadı!</h2>
            </div>
        );
    }

    return (
        <div className="doctor_detail_container">
            {/* SECTION 1 - Profil Hissəsi */}
            <div className="section_1">
                <div className="section1_left">
                    <img src={doctor.img || doc1_placeholder} alt={doctor.name} />
                </div>

                <div className="section1_right">
                    <div className="section1_right_top">
                        <h3>{doctor.name}</h3>
                        <p>{doctor.specialty}</p>
                    </div>

                    <div className="sectiom1_right_bottom">
                        <div className="section_right_bottom_1">
                            <img src={icon1} alt="Təcrübə" className="icon_1" />
                            <div className="stat_text">
                                <p>{doctor.experience || "5 il"}</p>
                                <span>Təcrübə</span>
                            </div>
                            <hr className="hr_of_icon1_and2" />
                        </div>

                        <div className="section_right_bottom_2">
                            <img src={icon2} alt="Pasiyent" />
                            <div className="stat_text">
                                <p>{doctor.patientCount || "0"}</p>
                                <span>Pasiyent sayı</span>
                            </div>
                            <hr className="hr_of_icon" />
                        </div>

                        <div className="section_right_bottom_3">
                            <img src={icon3} alt="Rəylər" />
                            <div className="stat_text">
                                <p>{doctor.reviewCount || "0"}</p>
                                <span>Rəylər</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Menyusu */}
            <div className="section_3_wrapper">
                <div className="section_tab_menu">
                    <h3 
                        className={activeTab === 'məlumat' ? 'active_tab' : ''} 
                        onClick={() => setActiveTab('məlumat')}
                    >
                        Məlumat
                    </h3>
                    <h3 
                        className={activeTab === 'məqalə' ? 'active_tab' : ''} 
                        onClick={() => setActiveTab('məqalə')}
                    >
                        Həkimin məqalələri
                    </h3>
                    <h3 
                        className={activeTab === 'rəy' ? 'active_tab' : ''} 
                        onClick={() => setActiveTab('rəy')}
                    >
                        Rəylər
                    </h3>
                </div>

                {/* Yalnız 'Məlumat' tabı aktiv olduqda görünən hissə */}
                {activeTab === 'məlumat' && (
                    <div className="tab_content_animation">
                        <div className="detail_row gray_bg">
                            <div className="row_left"><h3>Vəzifə</h3></div>
                            <div className="row_right"><p>{doctor.specialty}</p></div>
                        </div>

                        <div className="detail_row">
                            <div className="row_left"><h3>Mərkəz</h3></div>
                            <div className="row_right"><p>{doctor.center || "Başgicəllənmə Mərkəzi"}</p></div>
                        </div>

                        <div className="detail_row gray_bg education_section">
                            <div className="row_left"><h3>Təhsil</h3></div>
                            <div className="row_right">
                                <ul>
                                    {doctor.education?.map((item, index) => (
                                        <li key={index}>
                                            <i className="fa-solid fa-circle-check"></i> {item}
                                        </li>
                                    )) || <li>Məlumat yoxdur</li>}
                                </ul>
                            </div>
                        </div>

                        <div className="detail_row">
                            <div className="row_left"><h3>Müayinə və müalicə istiqamətləri</h3></div>
                            <div className="row_right">
                                <ul>
                                    {doctor.treatments?.map((item, index) => (
                                        <li key={index}>
                                            <i className="fa-solid fa-circle-check"></i> {item}
                                        </li>
                                    )) || <li>Məlumat yoxdur</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Digər tablar üçün boş vəziyyətlər */}
                {activeTab === 'məqalə' && <div className="tab_placeholder">Hələ ki, məqalə yoxdur.</div>}
                {activeTab === 'rəy' && <div className="tab_placeholder">Hələ ki, rəy yoxdur.</div>}
            </div>
        </div>
    );
};

export default DoctorDetail;