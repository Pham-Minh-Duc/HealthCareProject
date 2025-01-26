import "./customer.css"

export default function Customer (){
    return (
        <>
            <div className="customer--frame">
                <div className="customer--frame__content item-1">
                    <h3>số lượng người đặt lịch theo từng tháng</h3>
                    bên trái
                </div>
                <div className="customer--frame__content item-2">
                    <h3>Khu vực có nhiều bệnh nhân đặt lịch nhất</h3>
                    bên phải trên
                </div>
                <div className="customer--frame__content item-3">
                    <h3>số lượt đánh giá 1,2,3,4,5 sao</h3>
                    biểu đồ tròn
                </div>
            </div>
        </>
    )
}