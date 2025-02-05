import { useTheme } from "../../../../context/themeContext";
import './doctor.css';
import dataDoctors from "../../../../services/data/dataDoctor";
import dataHospitals from "../../../../services/data/dataHospital"
import { useState, useRef, useEffect } from "react";
import Title from "../../../../components/title/titleComponent";
import Search from "../../../../components/search/searchComponent";

export default function Doctor() {
    const { activeTheme } = useTheme();

    const [selectedHospital, setSelectedHospital] = useState(null)
    const [firstHover, setFirstHover] = useState(true);
    // const [selectedHospital, setSelectedHospital] = useState(null); 
    const [getDoctor, setDoctor] = useState(null);

    const popupRef = useRef(null);
    // Đóng popup khi click bên ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setSelectedHospital(null);
                setFirstHover(true); 
            }
        }
            document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
        return (
            <>
            <div className={`frame ${activeTheme ? 'bgBlack' : 'bgWhite'}`}>
                <Title/>
                <Search/>
                <div id="doctor--overview">
                    <div className = "doctor-1">
                        <div className="doctor--container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Birthday</th>
                                        <th>address</th>
                                        <th>Specially</th>
                                        <th>hospital</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                    dataDoctors.map((data) => (
                                        <tr key={data.id} onClick={() => setDoctor(data)}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.birthday}</td>
                                        <td>{data.address}</td>
                                        <td>{data.specially}</td>
                                        <td>{data.hospital}</td>
                                        </tr>
                                    ))
                                   }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className = "doctor-2">
                        {getDoctor ? (
                            <div id="doctor-detail">
                                <div id="doctor-image">
                                    <img src={getDoctor.avatar} alt="" />
                                </div>
                                <div id="doctor-info">   
                                    <p><strong>Tên Bác sĩ:</strong> {getDoctor.name}</p>
                                    <p><strong>Ngày sinh:</strong> {getDoctor.birthday}</p>
                                    <p><strong>Địa chỉ:</strong> {getDoctor.address}</p>
                                    <p><strong>Chuyên khoa:</strong> {getDoctor.specially}</p>
                                    <p><strong>Trực thuộc:</strong> {getDoctor.hospital}</p>
                                </div>
                            </div>
                        ) : (
                            <p>Chọn Bác sĩ để xem chi tiết</p>
                        )
                        }
                    </div>
                    <div className = "hospital-3">
                        <div className="hospital--container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>address</th>
                                        <th>phone</th>
                                        <th>email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataHospitals.map((data) => (
                                            <tr
                                                key={data.id}
                                                onMouseEnter={() => {
                                                    if (firstHover || !selectedHospital) {
                                                        setSelectedHospital(data.id); // Chỉ cập nhật khi chưa có dòng được chọn
                                                    }                
                                                }}
                                                onClick={() => {
                                                    setSelectedHospital(data.id); // Giữ cố định khi click
                                                    setFirstHover(false); // Sau lần đầu click, hover không thay đổi nữa
                                                }}                                            >
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.address}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.email}</td>
                                                <td>
                                                    {
                                                    selectedHospital === data.id && (
                                                    <div className="hospital--model" ref={popupRef}>
                                                        <div className="hospital--model__content">
                                                        <h3>{dataHospitals.find((h) => h.id === selectedHospital)?.name}</h3>
                                                        <p><strong>Địa chỉ:</strong> {data.address}</p>
                                                        <p><strong>SĐT:</strong> {data.phone}</p>
                                                        <p><strong>Email:</strong> {data.email}</p>
                                                        </div>
                                                    </div>                                                    )
                                                    }
                                                </td>
                                            </tr>
                                        ))                                
                                    }        
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
}