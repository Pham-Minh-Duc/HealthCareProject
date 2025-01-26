const dataSchedule = [
    {
      id: "SCH001",
      patientName: "Nguyễn Văn A",
      doctorName: "Trần Thị B",
      hospital: "Bệnh viện Chợ Rẫy",
      appointmentDate: "2025-02-01",
      appointmentTime: "08:30 AM",
      status: "Chờ xác nhận",
      paymentMethod: "Tiền mặt",
      patientInfo: {
        name: "Nguyễn Văn A",
        phone: "0987654321",
        email: "nguyenvana@gmail.com"
      },
      doctorInfo: {
        name: "Trần Thị B",
        specialty: "Tim mạch",
        hospital: "Bệnh viện Chợ Rẫy"
      },
      patientNote: "Đã bị bệnh 2 tuần, có triệu chứng mệt mỏi",
      examinationResult: null
    },
    {
      id: "SCH002",
      patientName: "Lê Thị C",
      doctorName: "Ngô Văn D",
      hospital: "Bệnh viện Bình Dân",
      appointmentDate: "2025-02-02",
      appointmentTime: "09:00 AM",
      status: "Đã xác nhận",
      paymentMethod: "Online",
      patientInfo: {
        name: "Lê Thị C",
        phone: "0912345678",
        email: "lethic@gmail.com"
      },
      doctorInfo: {
        name: "Ngô Văn D",
        specialty: "Tiêu hóa",
        hospital: "Bệnh viện Bình Dân"
      },
      patientNote: "Đau bụng kéo dài, đã dùng thuốc nhưng không đỡ",
      examinationResult: "Viêm dạ dày nhẹ, cần tiếp tục theo dõi"
    },
    {
      id: "SCH003",
      patientName: "Phạm Văn E",
      doctorName: "Lý Thị F",
      hospital: "Bệnh viện Nhân Dân 115",
      appointmentDate: "2025-02-03",
      appointmentTime: "10:15 AM",
      status: "Đã hoàn thành",
      paymentMethod: "Bảo hiểm",
      patientInfo: {
        name: "Phạm Văn E",
        phone: "0909123456",
        email: "phamvane@gmail.com"
      },
      doctorInfo: {
        name: "Lý Thị F",
        specialty: "Nội thần kinh",
        hospital: "Bệnh viện Nhân Dân 115"
      },
      patientNote: "Chóng mặt và đau đầu thường xuyên",
      examinationResult: "Không phát hiện bất thường, theo dõi thêm"
    },
    {
      id: "SCH004",
      patientName: "Hoàng Thị G",
      doctorName: "Vũ Văn H",
      hospital: "Bệnh viện Đại Học Y Dược",
      appointmentDate: "2025-02-04",
      appointmentTime: "02:30 PM",
      status: "Đã hủy",
      paymentMethod: "Online",
      patientInfo: {
        name: "Hoàng Thị G",
        phone: "0934567890",
        email: "hoangthig@gmail.com"
      },
      doctorInfo: {
        name: "Vũ Văn H",
        specialty: "Chấn thương chỉnh hình",
        hospital: "Bệnh viện Đại Học Y Dược"
      },
      patientNote: "Đau lưng sau chấn thương thể thao",
      examinationResult: null
    },
    {
      id: "SCH005",
      patientName: "Đinh Văn I",
      doctorName: "Trương Thị J",
      hospital: "Bệnh viện Quận 1",
      appointmentDate: "2025-02-05",
      appointmentTime: "04:00 PM",
      status: "Chờ xác nhận",
      paymentMethod: "Tiền mặt",
      patientInfo: {
        name: "Đinh Văn I",
        phone: "0971234567",
        email: "dinhvani@gmail.com"
      },
      doctorInfo: {
        name: "Trương Thị J",
        specialty: "Tai mũi họng",
        hospital: "Bệnh viện Quận 1"
      },
      patientNote: "Nghẹt mũi và khó thở khi ngủ",
      examinationResult: null
    },
    {
      id: "SCH006",
      patientName: "Trần Văn K",
      doctorName: "Nguyễn Thị L",
      hospital: "Bệnh viện 108",
      appointmentDate: "2025-02-06",
      appointmentTime: "10:00 AM",
      status: "Chờ xác nhận",
      paymentMethod: "Online",
      patientInfo: {
        name: "Trần Văn K",
        phone: "0963456789",
        email: "tranvank@gmail.com"
      },
      doctorInfo: {
        name: "Nguyễn Thị L",
        specialty: "Da liễu",
        hospital: "Bệnh viện 108"
      },
      patientNote: "Ngứa da kéo dài, có dấu hiệu sưng đỏ",
      examinationResult: null
    },
    {
      id: "SCH007",
      patientName: "Đỗ Thị M",
      doctorName: "Lê Văn N",
      hospital: "Bệnh viện Trung Ương",
      appointmentDate: "2025-02-07",
      appointmentTime: "11:30 AM",
      status: "Đã xác nhận",
      paymentMethod: "Bảo hiểm",
      patientInfo: {
        name: "Đỗ Thị M",
        phone: "0925674321",
        email: "dothim@gmail.com"
      },
      doctorInfo: {
        name: "Lê Văn N",
        specialty: "Nội tiết",
        hospital: "Bệnh viện Trung Ương"
      },
      patientNote: "Béo phì và có vấn đề về đường huyết",
      examinationResult: "Cần kiểm tra đường huyết định kỳ"
    },
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `SCH00${i + 8}`,
      patientName: `Nguyễn Văn ${String.fromCharCode(65 + (i % 26))}`,
      doctorName: `Lê Thị ${String.fromCharCode(66 + (i % 26))}`,
      hospital: `Bệnh viện ${i % 5 + 1}`,
      appointmentDate: `2025-02-${(i % 28) + 1}`,
      appointmentTime: `${(i % 12) + 8}:00 AM`,
      status: ["Chờ xác nhận", "Đã xác nhận", "Đã hoàn thành", "Đã hủy"][i % 4],
      paymentMethod: ["Tiền mặt", "Online", "Bảo hiểm"][i % 3],
      patientInfo: {
        name: `Nguyễn Văn ${String.fromCharCode(65 + (i % 26))}`,
        phone: `09${Math.floor(10000000 + Math.random() * 89999999)}`,
        email: `nguyenvan${i}@gmail.com`
      },
      doctorInfo: {
        name: `Lê Thị ${String.fromCharCode(66 + (i % 26))}`,
        specialty: ["Tim mạch", "Da liễu", "Tiêu hóa", "Nội tiết", "Chấn thương chỉnh hình"][i % 5],
        hospital: `Bệnh viện ${i % 5 + 1}`
      },
      patientNote: `Ghi chú bệnh nhân ${i}`,
      examinationResult: i % 2 === 0 ? `Kết quả khám ${i}` : null
    }))
  ];
  
  export default dataSchedule;
  