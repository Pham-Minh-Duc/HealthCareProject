import { useTheme } from "../../../../context/themeContext";
import { useState } from "react";
import './account.css'
import Time from "../../../../utils/time";
import usersData from "../../../../services/data/dataUser";


export default function Account() {

    const { activeTheme } = useTheme();

    const [selectedUsers, setSelectedUsers] = useState(null);

        return (
            <>
            <div className={`frame ${activeTheme ? 'bgBlack' : 'bgWhite'}`}>
                <div id="admin--title" className={`${activeTheme ? "colorWhite" : "colorBlack"}`}>
                    <h1>Dash Board</h1>
                    <Time style={{display: "block"}}/>
                </div>
                <div id="account-search">
                    <input type="text" placeholder="search"/>
                    <button><i className="ti-search"></i></button>
                </div>
                <div id="account--overview">
                    <div className = "account-1">
                        <div className="table--container">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>

                                </tr>
                            </thead>
                            <tbody>
                                {usersData.map((user) => (
                                <tr key={user.id} onClick={() => setSelectedUsers(user)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className = "account-2">                         
                            {
                                selectedUsers ? (
                                    <div>
                                        <div id="account-image">
                                            <img src={selectedUsers.avatar} alt="" />
                                        </div>
                                        <br></br>
                                        <p><strong>ID</strong> {selectedUsers.id}</p>
                                        <p><strong>Tên người dùng:</strong> {selectedUsers.name}</p>
                                        <p><strong>Số điện thoại:</strong> {selectedUsers.phone}</p>
                                        <p><strong>Birthday</strong> {selectedUsers.dob}</p>
                                        <p><strong>Email:</strong> {selectedUsers.email}</p>
                                        <p><strong>Gender</strong> {selectedUsers.gender}</p>
                                        <p style={{color: "red"}}><strong>Password:</strong> {selectedUsers.password}</p>
                                        <br></br>
                                        <div>
                                            <p><strong>Status</strong> {selectedUsers.status}</p>                                   
                                        </div>
                                    </div>
                                ) : (
                                    <p>Chọn để xem thông tin chi tiết</p>
                                )
                            }

                    </div>
                </div>
            </div>    
            </>
        )
}