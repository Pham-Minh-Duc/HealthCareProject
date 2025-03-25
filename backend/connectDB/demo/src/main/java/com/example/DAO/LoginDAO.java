package com.example.DAO;

import com.example.DatabaseConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LoginDAO {

    public boolean checkLogin(String email, String password) throws SQLException, ClassNotFoundException {
        String sql = "SELECT * FROM user WHERE user_email = ? AND user_password = ?";

        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            System.out.println("Đang kiểm tra login với email: " + email);
            statement.setString(1, email);
            statement.setString(2, password);

            ResultSet resultSet = statement.executeQuery();
            boolean exists = resultSet.next();

            System.out.println("Kết quả kiểm tra: " + exists);
            System.out.println("pass: " + password);

            return exists;

        } catch (SQLException e) {
            System.out.println("Lỗi SQL: " + e.getMessage());
            throw e;
        }
    }
}

