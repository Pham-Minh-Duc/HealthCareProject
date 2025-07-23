
const patientData = [
  { fullName: "Nguyễn Văn A", phone: "0901234567", email: "nguyenvana@example.com", gender: "Nam", appointments: "2 lịch (Khám mắt, Nội tổng quát)" },
  { fullName: "Trần Thị B", phone: "0912345678", email: "tranthib@example.com", gender: "Nữ", appointments: "1 lịch (Tư vấn nội khoa)" },
  { fullName: "Phạm Văn C", phone: "0923456789", email: "phamvanc@example.com", gender: "Nam", appointments: "3 lịch (Tim mạch, Xét nghiệm máu, Tái khám)" },
  { fullName: "Lê Thị D", phone: "0934567890", email: "lethid@example.com", gender: "Nữ", appointments: "1 lịch (Khám tổng quát)" },
  { fullName: "Hoàng Minh E", phone: "0945678901", email: "hoangmine@example.com", gender: "Nam", appointments: "2 lịch (Xương khớp, Nội tiết)" },
  { fullName: "Võ Thị F", phone: "0956789012", email: "vothif@example.com", gender: "Nữ", appointments: "2 lịch (Tai-Mũi-Họng, Phụ sản)" },
  { fullName: "Đặng Văn G", phone: "0967890123", email: "dangvang@example.com", gender: "Nam", appointments: "1 lịch (Tư vấn tâm lý)" },
  { fullName: "Ngô Thị H", phone: "0978901234", email: "ngothih@example.com", gender: "Nữ", appointments: "3 lịch (Khám nhi, Hô hấp, Nội khoa)" },
  { fullName: "Bùi Anh I", phone: "0989012345", email: "buianhi@example.com", gender: "Nam", appointments: "2 lịch (Da liễu, Tái khám)" },
  { fullName: "Đỗ Thị J", phone: "0990123456", email: "dothij@example.com", gender: "Nữ", appointments: "1 lịch (Khám mắt)" },
  { fullName: "Ngô Thị H", phone: "0978901234", email: "ngothih@example.com", gender: "Nữ", appointments: "3 lịch (Khám nhi, Hô hấp, Nội khoa)" },
  { fullName: "Bùi Anh I", phone: "0989012345", email: "buianhi@example.com", gender: "Nam", appointments: "2 lịch (Da liễu, Tái khám)" },
  { fullName: "Đỗ Thị J", phone: "0990123456", email: "dothij@example.com", gender: "Nữ", appointments: "1 lịch (Khám mắt)" },
  { fullName: "Ngô Thị H", phone: "0978901234", email: "ngothih@example.com", gender: "Nữ", appointments: "3 lịch (Khám nhi, Hô hấp, Nội khoa)" },
  { fullName: "Bùi Anh I", phone: "0989012345", email: "buianhi@example.com", gender: "Nam", appointments: "2 lịch (Da liễu, Tái khám)" },
  { fullName: "Đỗ Thị J", phone: "0990123456", email: "dothij@example.com", gender: "Nữ", appointments: "1 lịch (Khám mắt)" }
];

const PatientPage = () => {
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
              <input type="text" placeholder="Nhập tên bệnh nhân" className="bg-white"/>
            </div>
            <div className="flex items-center">
              <label className="w-[100px] text-sm mb-2 mr-2">Email</label>
              <input type="text" placeholder="Nhập email" className="bg-white"/>
            </div>
            <div className="flex items-center">
              <label className="w-[100px]  text-sm mb-2 mr-2">Số điện thoại</label>
              <input type="text" placeholder="Nhập số điện thoại" className="bg-white"/>
            </div>
            <div className="flex items-center">
              <label className="w-[100px] text-sm mb-2 mr-2">Mã đơn thuốc</label>
              <input type="text" placeholder="Nhập mã đơn thuốc" className="bg-white"/>
            </div>
          </div>
          <div className="ml-10">
            <div className="">
              <label className="w-[100px] text-sm mb-2 mr-2">Ngày khám</label>
              <input type="date" className="bg-white"/>
            </div>
            <div></div>
          </div>
        </div>
      </fieldset>
      {/* button */}
      <div className="ml-[26px] mt-[15px]">
        <button className="bg-blue-500 w-[70px] h-[35px] text-[12px] cursor-pointer text-white rounded mr-2">Tìm kiếm</button>
        <button className="bg-red-300 w-[70px] h-[35px] text-[12px] cursor-pointer text-black rounded mr-2">Thêm</button>
        <button className="bg-gray-300 w-[70px] h-[35px] text-[12px] cursor-pointer text-black rounded mr-2">Xóa</button>
        <button className="bg-gray-300 w-[70px] h-[35px] text-[12px] cursor-pointer text-black rounded mr-2">Sửa</button>
      </div>
      {/* table */}
      <div className="mt-5 ml-[26px] mr-[26px] mb-3">
        <div className="bg-white rounded-lg shadow-sm overflow-y-auto mt-5">
          <p className="p-2 text-lg mb-3">📊 Danh sách bệnh nhân bệnh viện <span className="font-bold">Minh Duck</span></p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-100 text-left">
                <tr>
                  <th className="p-3">Họ và Tên</th>
                  <th className="p-3">Số điện thoại</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Giới tính</th>
                  <th className="p-3">Danh sách lịch khám</th>
                </tr>
              </thead>
              <tbody>
                {patientData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{item.fullName}</td>
                    <td className="p-3">{item.phone}</td>
                    <td className="p-3">{item.email}</td>
                    <td className="p-3">{item.gender}</td>
                    <td className="p-3">{item.appointments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PatientPage;