package com.example.DAO;

import com.example.DatabaseConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BookingDAO {
    //lấy danh sách tất cả Bookings từ db
    public List<String> getAllBookings() {
        List<String> bookings = new ArrayList<>();
        String sqlBooking = "SELECT * FROM booking";

        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sqlBooking);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                int id = resultSet.getInt("booking_id");
                String name = resultSet.getString("booking_date");
                bookings.add("ID: " + id + ", Name: " + name);
            }
        }
        catch (SQLException | ClassNotFoundException e) {
            System.out.println("Lỗi khi lấy dữ liệu từ Bookings: " + e.getMessage());
    }
        return bookings;
    }
}
