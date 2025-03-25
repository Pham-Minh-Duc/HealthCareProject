package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/healthcaredb";
    private static final String USER = "root";
    private static final String PASSWORD = "Zxcvbnm123321..,,";

    // Phương thức để lấy kết nối
    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        // Load MySQL JDBC Driver nếu chưa được load
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Trả về đối tượng Connection
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}

