import React from 'react';
import './Home.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import bgSection1 from '../assets/img/bg_section_1.png';
import ButtonImg from '../assets/img/Button.png';
import section2Img from '../assets/img/section2.PNG';
import doctor1 from '../assets/img/doctor1.png';
import doctor2 from '../assets/img/doctor2.png';
import doctor3 from '../assets/img/doctor3.png';
import info1 from '../assets/img/information_1.PNG';
import info2 from '../assets/img/information2.PNG';
import info3 from '../assets/img/information3.PNG';
import info4 from '../assets/img/information4.PNG';
import section5Pic from '../assets/img/section_5_pincture.png';
import { FaStar } from 'react-icons/fa';
import pasiyentImg from '../assets/img/Pasiyent.png';
import group12Icon from '../assets/img/Group 12.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-wrapper">

                {/* Section 1 */}
                <div
                    className="section_1"
                    style={{
                        backgroundImage: `url(${bgSection1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <h2>
                        İxtisaslaşmış Tibbi
                        Xidmətin Tək Ünvanı!
                    </h2>
                    <a href="#" className="button_png">
                        <img src={ButtonImg} alt="Button" />
                    </a>
                </div>

                {/* Section 2 */}
                <div className="section_2">
                    <img src={section2Img} alt="Section 2 Banner" />
                </div>

                {/* SECTION 3 */}
                <div className="section_3">
                    <div className="section_3_top">
                        <h2>Həkimlər</h2>
                        <button id="leftBtn" className="carousel-btn left">
                            <FaArrowLeft />
                        </button>
                        <button id="rightBtn" className="carousel-btn right">
                            <FaArrowRight />
                        </button>
                    </div>

                    <div className="carousel-wrapper" id="carouselWrapper">
                        <div className="carousel" id="carousel">
                            <img src={doctor1} alt="Həkim 1" />
                            <img src={doctor2} alt="Həkim 2" />
                            <img src={doctor3} alt="Həkim 3" />
                            <img src={doctor1} alt="Həkim 1 təkrar" />
                            <img src={doctor2} alt="Həkim 2 təkrar" />
                            <img src={doctor3} alt="Həkim 3 təkrar" />
                        </div>
                    </div>
                </div>

                {/* SECTION 4 */}
                <div className="section_4">
                    <div className="section_4_top">
                        <h2>Faydalı Məlumatlar</h2>
                        <button id="leftBtn1" className="left1">
                            <FaArrowLeft />
                        </button>
                        <button id="rightBtn1" className="right1">
                            <FaArrowRight />
                        </button>
                    </div>

                    <div className="ection_4_bottom">
                        <div className="section_4_carousel_wrapper" id="s4Wrapper">
                            <div className="section_4_carousel" id="s4Carousel">

                                <div className="section_4_item">
                                    <img src={info1} alt="Məlumat 1" />
                                    <h3>28 mart 2025</h3>
                                    <p>Qulaq xəstəlikləri</p>
                                </div>

                                <div className="section_4_item">
                                    <img src={info2} alt="Məlumat 2" />
                                    <h3>24 iyun 2025</h3>
                                    <p>Ətraflı Burun xəstəlikləri</p>
                                </div>

                                <div className="section_4_item">
                                    <img src={info3} alt="Məlumat 3" />
                                    <h3>1 avqust 2025</h3>
                                    <p>Baş-Boyun cərrahiyyəsi</p>
                                </div>

                                <div className="section_4_item">
                                    <img src={info2} alt="Məlumat 2 təkrar" />
                                    <h3>1 avqust 2025</h3>
                                    <p>Baş-Boyun cərrahiyyəsi</p>
                                </div>

                                <div className="section_4_item">
                                    <img src={info4} alt="Məlumat 4" />
                                    <h3>28 mart 2025</h3>
                                    <p>Lor əməliyyatı zamanı anesteziya</p>
                                </div>

                                <div className="section_4_item">
                                    <img src={info2} alt="Məlumat 2 təkrar" />
                                    <h3>1 avqust 2025</h3>
                                    <p>Qulaq xəstəlikləri</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* SECTION 4 SONU */}
                {/* SECTION 5 */}
                <div className="section_5">
                    <div className="section_5_left">
                        <h3>Nəyə görə Lor Hospital?</h3>
                        <p>
                            Lor Hospital – 2013-cü ildən fəaliyyət göstərən Azərbaycanın eləcə də Qafqazın ilk və yeganə
                            ixtisaslaşmış Qulaq Burun Boğaz və Baş-Boyun Mərkəzidir. Azərbaycanda ilk Qulaq Burun Boğaz və
                            Baş-Boyun Mərkəzi olmağımızın vermiş olduğu məsuliyyət ilə poliklinika, laboratoriya, funksional
                            diaqnostika müayinələrindən sonra pasiyentlərimizə daha dəqiq diaqnoz qoyularaq lazımi müalicələr
                            aparılır. Qüsursuz xidmət anlayışını əsas tutaraq Avropa standartlarına uyğun müasir müalicə və
                            diaqnostika üsulları ilə xidmətlərimizin yüksək keyfiyyətini təmin edirik. Endoskopik, mikroskopik
                            və lazer texnologiyalarının istifadəsi dəqiq diaqnostikaya, hətta ən çətin əməliyyatlar zamanı
                            minimal travmaya, bərpa dövrünü qısatlmağa və qısa müddətdə normal gündəlik həyata qayıtmağa imkan yaradır.
                        </p>
                    </div>
                    <div className="section_5_right">
                        <img src={section5Pic} alt="Lor Hospital Haqqında" />
                    </div>
                </div>
                {/* SECTION 6 */}
                <div className="section_6">
                    <h3>Pasiyent məmnunluğu</h3>
                    <div className="section_6_cards">
                        {/* Card 1 */}
                        <div className="section_6_1">
                            <img src={pasiyentImg} alt="Pasiyent" />
                            <img src={group12Icon} alt="" className="icon" />
                            <h4>Aysel Bağışlı</h4>
                            <div className="stars">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </div>
                            <p className="comment">
                                5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="section_6_1">
                            <img src={pasiyentImg} alt="Pasiyent" />
                            <img src={group12Icon} alt="" className="icon" />
                            <h4>Aysel Bağışlı</h4>
                            <div className="stars">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </div>
                            <p className="comment">
                                5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="section_6_1">
                            <img src={pasiyentImg} alt="Pasiyent" />
                            <img src={group12Icon} alt="" className="icon" />
                            <h4>Aysel Bağışlı</h4>
                            <div className="stars">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                            </div>
                            <p className="comment">
                                5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.
                            </p>
                        </div>
                    </div>
                </div>
            </div> {/* home-wrapper sonu */}
        </div> /* home-container sonu */
    );
};

export default Home;