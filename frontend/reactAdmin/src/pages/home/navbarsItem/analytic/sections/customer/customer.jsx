import "./customer.css"
import SumUserInMonth from "./item/chartSumOfUserPerMonth"
import MostUserBookingData from "./item/areaHaveMostUsersBooking"
import Rate from "./item/totalRate"  

function Title(props) {
    return (
        <>
            <h3><u>{props.title}</u></h3>
        </>
    )
}
export default function Customer() {
    
    return (
        <>
            <div className="customer--frame">
                <div className="customer--frame__content item-1">
                    <Title title="số lượng người đặt lịch theo từng tháng"></Title>
                    <SumUserInMonth></SumUserInMonth>
                </div>
                <div className="customer--frame__content item-2">
                    <Title title="Khu vực có nhiều bệnh nhân đặt lịch nhất"></Title>
                    <h2>{MostUserBookingData.map((index) => index.district)}</h2>
                    <p>{MostUserBookingData.map((index) => index.user_total)}</p>
                </div>
                <div className="customer--frame__content item-3">
                    <Title title="số lượt đánh giá 1,2,3,4,5 sao"></Title>
                    <Rate></Rate>
                </div>
            </div>
        </>
    )
}