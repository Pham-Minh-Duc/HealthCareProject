package com.example.DAO;

import com.example.DatabaseConnection;
import com.example.model.UserModel;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    public List<UserModel> getAllUsers() {
        List<UserModel> userList = new ArrayList<>();
        String sql = "SELECT * FROM user";
        try(Connection connection = DatabaseConnection.getConnection()){
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet result = statement.executeQuery();

            while(result.next()) {
                UserModel user = new UserModel();
                user.setId(result.getInt("user_id"));
                user.setName(result.getString("user_name"));
                user.setEmail(result.getString("user_email"));
                user.setPassword(result.getString("user_password"));
                user.setAddress(result.getString("user_address"));
                user.setPhone(result.getString("user_phone"));
                userList.add(user);
            }
        }
        catch (SQLException | ClassNotFoundException e){
            System.out.println("Lỗi khi lấy dữ liệu từ Users: " + e.getMessage());
        }
        return userList;
    }
}
