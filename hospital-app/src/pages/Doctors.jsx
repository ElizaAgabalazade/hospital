import React, { useState, useEffect } from 'react'; // useEffect əlavə olundu
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

// Şəkilləri import edirik
import doc1 from '../assets/img/doctor2_no_name.png';
import doc2 from '../assets/img/doc2.png';
import doc3 from '../assets/img/doc3.png';
import doc4 from '../assets/img/doc4.png';
import './Doctors.css';

// Bu məlumatlar normalda backend-də (və ya ayrı doctors.json faylında) olur
const mockDoctorsData = [
    { id: 1, name: "Dr. Nigar Muradova", specialty: "Qulaq Burun Boğaz cərrahı, Otonevroloq", img: doc1 },
    { id: 2, name: "Dr. Kamilə Allahverdiyeva", specialty: "Qulaq Burun Boğaz cərrahı", img: doc2 },
    { id: 3, name: "Dr. Kamilə Allahverdiyeva", specialty: "Qulaq Burun Boğaz həkimi", img: doc3 },
    { id: 4, name: "Dr. Mahtaban Qədiməli", specialty: "Qulaq Burun Boğaz cərrahı", img: doc4 }
];

const Doctors = () => {
    // State-lər
    const [doctors, setDoctors] = useState([]); // Başlanğıcda boş siyahı
    const [loading, setLoading] = useState(true); // Yüklənmə vəziyyəti (UX üçün)
    const [searchTerm, setSearchTerm] = useState("");

    // DATA ÇƏKMƏ FUNKSİYASI (Simulyasiya)
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);
                // Reallıqda bura: const response = await fetch('api/doctors');
                // Biz isə gecikmə simulyasiya edirik (backend-dən cavab gözləmək kimi)
                await new Promise(resolve => setTimeout(resolve, 800)); 
                
                setDoctors(mockDoctorsData);
            } catch (error) {
                console.error("Məlumat çəkilərkən xəta baş verdi:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    // Filtrləmə məntiqi
    const filteredDoctors = doctors.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="doctors_section">
            <div className="section_left">
                <ul>
                    <li><Link to="#">Tariximiz</Link><FaChevronRight /></li>
                    <li><Link to="#">Missiya və Məqsəd</Link><FaChevronRight /></li>
                    <li><Link to="#">Keyfiyyət siyasəti</Link><FaChevronRight /></li>
                    <li><Link to="#">Keyfiyyətə nəzarət</Link><FaChevronRight /></li>
                    <li><Link to="#">Beynəlxalq Əməkdaşlıq</Link><FaChevronRight /></li>
                    <li><Link to="#">Mərkəzlərimiz</Link><FaChevronRight /></li>
                    <li><Link to="#">Həkimlərimiz</Link><FaChevronRight /></li>
                </ul>
            </div>

            {/* SAĞ TƏRƏF */}
            <div className="section_right">
                <div className="section_right_1">
                    <input
                        type="text"
                        placeholder="Həkimin adı və ya ixtisasına görə axtarın..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="section_right_2">
                    {loading ? (
                        <p className="loading_text">Həkimlər yüklənir...</p>
                    ) : (
                        <>
                            {filteredDoctors.map((doc) => (
                                <div key={doc.id} className="doctor_card_base">
                                    <div className="card_img_container">
                                        <img src={doc.img} alt={doc.name} />
                                    </div>
                                    <h3>{doc.name}</h3>
                                    <p>{doc.specialty}</p>

                                    <Link to={`/doctor/${doc.id}`} className="details_btn">
                                        Ətraflı bax
                                    </Link>
                                </div>
                            ))}

                            {!loading && filteredDoctors.length === 0 && (
                                <p className="no-result">Axtarışa uyğun həkim tapılmadı.</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Doctors;