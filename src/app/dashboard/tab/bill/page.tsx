
import React, { useState } from 'react';

const appointmentData = [
  { time: "08:00", doctor: "Dr. Hải", email: "nguyenvana@example.com", fullName: "Nguyễn Văn A", status: "Đang chờ", note: "Khám mắt" },
  { time: "08:30", doctor: "Dr. Tú", email: "tranthib@example.com", fullName: "Trần Thị B", status: "Đã khám", note: "Tư vấn nội khoa" },
  { time: "09:00", doctor: "Dr. Lan", email: "phamvanc@example.com", fullName: "Phạm Văn C", status: "Đang chờ", note: "Xét nghiệm máu" },
  { time: "09:30", doctor: "Dr. Phúc", email: "lethid@example.com", fullName: "Lê Thị D", status: "Hủy", note: "Không có mặt" },
  { time: "10:00", doctor: "Dr. An", email: "hoangmine@example.com", fullName: "Hoàng Minh E", status: "Đã khám", note: "Khám nội tiết" },
  { time: "10:30", doctor: "Dr. My", email: "vothif@example.com", fullName: "Võ Thị F", status: "Đang chờ", note: "Tai-Mũi-Họng" },
  { time: "11:00", doctor: "Dr. Toàn", email: "dangvang@example.com", fullName: "Đặng Văn G", status: "Đã khám", note: "Tư vấn tâm lý" },
  { time: "13:00", doctor: "Dr. Hùng", email: "ngothih@example.com", fullName: "Ngô Thị H", status: "Hủy", note: "Hủy do trễ giờ" },
  { time: "13:30", doctor: "Dr. Minh", email: "buianhi@example.com", fullName: "Bùi Anh I", status: "Đang chờ", note: "Khám da liễu" },
  { time: "14:00", doctor: "Dr. Hằng", email: "dothij@example.com", fullName: "Đỗ Thị J", status: "Đã khám", note: "Khám mắt định kỳ" },
  { time: "14:30", doctor: "Dr. Quân", email: "phanvank@example.com", fullName: "Phan Văn K", status: "Đang chờ", note: "Khám tổng quát" },
  { time: "15:00", doctor: "Dr. Nhã", email: "dinhthil@example.com", fullName: "Đinh Thị L", status: "Đã khám", note: "Phụ khoa" },
  { time: "15:30", doctor: "Dr. Khoa", email: "nguyenanhm@example.com", fullName: "Nguyễn Anh M", status: "Hủy", note: "Bệnh nhân huỷ lịch" }
];

const BillPage = () => {

  // tìm kiếm theo trạng thái
  const [status, setStatus] = useState("");
  const [filteredData, setFilteredData] = useState(appointmentData);

  const handleStatusChange = () => {
    const result = appointmentData.filter(item =>
      status ? item.status === status : true
    );
    setFilteredData(result);
  };
  // hết tìm kiếm theo trạng thái

  // thêm lịch hẹn
  const appointmentSeedData = [{
    time: '',
    doctor: '',
    email: '',
    fullName: '',
    status: '',
    note: ''
  }];
  const [showForm, setShowForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ 
    time: "",
    doctor: "",
    email: "",
    fullName: "",
    status: "Đang chờ",
    note: ""
 });
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [appointmentDataa, setAppointmentDataa] = useState(appointmentSeedData);
  const handleAddAppointment = () => {
    const updated = [...appointmentData, newAppointment];
    setAppointmentDataa(updated);
    setFilteredData(updated);
    setShowForm(false);
    setNewAppointment({ time: "", doctor: "", email: "", fullName: "", status: "", note: "" });
  };
  // hết thêm lịch hẹn

  return (
    <div className="w-full h-screen">
      {/* filter */}
      <fieldset className="border-1 p-4 rounded-[7px] mt-4 ml-[26px] mr-[26px] h-[130px]">
        <legend className="px-2 text-sm mt-1">Filter</legend>
        
        {/* tên, email, sdt, mã số đơn thuốc, ngày khám */}
        <div className="flex">
          <div className="grid grid-cols-2 gap-y-3 gap-x-10">
            <div className="flex items-center">
              <label className="w-[100px] text-sm mb-2 mr-2">Tên bệnh nhân</label>
              <input type="text" placeholder="Nhập email" className="bg-white"/>
            </div>
            <div className="flex items-center">
              <label className="w-[100px]  text-sm mb-2 mr-2">Mã đơn thuốc</label>
              <input type="text" placeholder="Nhập tên bệnh nhân" className="bg-white"/>
            </div>
            <div className="flex items-center">
              <label className="w-[100px] text-sm mb-2 mr-2">Trạng thái thanh toán</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)} 
                className="border px-3 py-2 rounded text-sm bg-white w-[200px]"
              >
                <option value="">Tất cả</option>
                <option value="Đang chờ">Đang chờ</option>
                <option value="Đã khám">Đã khám</option>
                <option value="Hủy">Hủy</option>
              </select>
            </div>
            
          </div>
          <div className="ml-10">
            <div className="">
              <label className="w-[100px] text-sm mb-2 mr-2">Khoảng ngày tạo</label>
              <input type="text" placeholder="Nhập email bệnh nhân" className="bg-white"/>
            </div>
            <div></div>
          </div>
        </div>
      </fieldset>
      {/* button */}
      <div className="ml-[26px] mt-[15px]">
        <button
          onClick={handleStatusChange} 
          className="bg-blue-500 w-[70px] h-[35px] text-[12px] cursor-pointer text-white rounded mr-2"
        >
          Tìm kiếm
        </button>
        <button
          onClick={() => {setShowForm(true)}}
          className="bg-red-300 w-[70px] h-[35px] text-[12px] cursor-pointer text-black rounded mr-2"
        >
          Thêm
        </button>
        <button className="bg-gray-300 w-[70px] h-[35px] text-[12px] cursor-pointer text-black rounded mr-2">Xóa</button>
        <button className="bg-gray-300 w-[70px] h-[35px] text-[12px] cursor-pointer text-black rounded mr-2">Sửa</button>
      </div>
      {/* table */}
      <div className="mt-5 ml-[26px] mr-[26px] mb-3">
        <div className="bg-white rounded-lg shadow-sm overflow-y-auto mt-5">
          <p className="p-2 text-lg mb-3">📊 Danh sách <span className="font-bold">Hóa đơn khám bệnh</span></p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-100 text-left">
                <tr className="text-center">
                  <th className="p-3">Mã hóa đơn</th>
                  <th className="p-3">Tên bệnh nhân</th>
                  <th className="p-3">Ngày tạo hóa đơn</th>
                  <th className="p-3">Danh sách dịch vụ khám</th>
                  <th className="p-3">Tổng tiền thanh toán</th>
                  <th className="p-3">Trạng thái</th>
                  <th className="p-3">Hình thức thanh toán</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 text-center">
                    <td className="p-3">{item.time}</td>
                    <td className="p-3">{item.doctor}</td>
                    <td className="p-3">{item.email}</td>
                    <td className="p-3">{item.fullName}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-white flex justify-center items-center text-xs font-semibold ${
                          item.status === 'Đang chờ'
                            ? 'bg-yellow-400'
                            : item.status === 'Hủy'
                            ? 'bg-red-400'
                            : 'bg-green-400'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* hết table */}
      {/* modal */}
      {showForm && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
          <div className="space-y-3 bg-white p-6 rounded shadow-md w-[500px] max-w-full">
            <input 
              type="text" 
              placeholder="Tên bệnh nhân" 
              value={newAppointment.fullName}
              onChange={(e) => setNewAppointment({ ...newAppointment, fullName: e.target.value })}
              className="border px-3 py-2 rounded w-full" 
            />
            <input 
              type="text" 
              placeholder="Email"
              value={newAppointment.email}
              onChange={(e) => setNewAppointment({ ...newAppointment, email: e.target.value })} 
              className="border px-3 py-2 rounded w-full" 
            />
            <input 
              type="text" 
              placeholder="Bác sĩ" 
              value={newAppointment.doctor}
              onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
              className="border px-3 py-2 rounded w-full" 
            />
            <input 
              type="text" 
              placeholder="Giờ khám (vd: 14:00)" 
              value={newAppointment.time}
              onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
              className="border px-3 py-2 rounded w-full" 
            />
            <select 
              className="border px-3 py-2 rounded w-full"
              value={newAppointment.status}
              onChange={(e) => setNewAppointment({ ...newAppointment, status: e.target.value })}
            >
              <option value="Đang chờ">Đang chờ</option>
              <option value="Đã khám">Đã khám</option>
              <option value="Hủy">Hủy</option>
            </select>
            <input 
              type="text" 
              placeholder="Ghi chú" 
              value={newAppointment.note}
              onChange={(e) => setNewAppointment({ ...newAppointment, note: e.target.value })}
              className="border px-3 py-2 rounded w-full" 
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleAddAppointment}>
              Lưu
            </button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded cursor-pointer" onClick={() => setShowForm(false)}>
              Hủy
            </button>
          </div>
        </div>
      )}
      {/* hết modal */}
    </div>
  );
}
export default BillPage;