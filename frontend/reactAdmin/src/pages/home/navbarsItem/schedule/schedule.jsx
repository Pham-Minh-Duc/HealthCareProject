import { useTheme } from "../../../../context/themeContext";
import './schedule.css';
import Time from "../../../../utils/time";
import dataSchedule from "../../../../services/data/dataSchedule";
import { useState } from "react";


export default function Schedule(){
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    const { activeTheme } = useTheme();

    return (
        <>
            <div className={`frame ${activeTheme ? 'bgBlack' : 'bgWhite'}`}>
                <div id="admin--title" className={`${activeTheme ? "colorWhite" : "colorBlack"}`}>
                    <h1>Dash Board</h1>
                    <Time style={{display: "block"}}/>
                </div>
                <div id="schedule-search">
                    <input type="text" placeholder="search"/>
                    <button><i className="ti-search"></i></button>
                </div>
                <div id="schedule--overview">
                    <div className = "schedule-1">
                        {/* <h1>danh sách đặt lịch</h1> */}
                        <div className="schedule--container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Patient Name</th>
                                        <th>Doctor Name</th>
                                        <th>Hospital</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataSchedule.map((item) => (
                                            <tr key={item.id} onClick={() => setSelectedSchedule(item)}>
                                            <td>{item.id}</td>
                                            <td>{item.patientName}</td>
                                            <td>{item.doctorName}</td>
                                            <td>{item.hospital}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className = "schedule-2">
                        {selectedSchedule ? (
                            <div>
                                <h3><strong>Thông tin bệnh nhân</strong></h3>
                                <p><strong>Tên bệnh nhân:</strong> {selectedSchedule.patientInfo.name}</p>
                                <p><strong>Số điện thoại:</strong> {selectedSchedule.patientInfo.phone}</p>
                                <p><strong>Email:</strong> {selectedSchedule.patientInfo.email}</p>
                                <br></br>
                                <h3><strong>Thông tin bác sĩ</strong></h3>
                                <p><strong>Bác sĩ:</strong> {selectedSchedule.doctorInfo.name}</p>
                                <p><strong>Chuyên khoa:</strong> {selectedSchedule.doctorInfo.specialty}</p>
                                <p><strong>Bệnh viện:</strong> {selectedSchedule.doctorInfo.hospital}</p>
                                <br></br>
                                <h3><strong>Thông tin phiếu khám</strong></h3>                           
                                <p><strong>Ghi chú:</strong> {selectedSchedule.patientNote}</p>
                                <p><strong>Kết quả khám:</strong> {selectedSchedule.examinationResult || "Chưa có kết quả"}</p>
                                <div>
                                    <p><strong>Status</strong> {selectedSchedule.status}</p>                                   
                                </div>
                            </div>
                        ) : (
                            <p>Chọn một lịch hẹn để xem chi tiết</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}