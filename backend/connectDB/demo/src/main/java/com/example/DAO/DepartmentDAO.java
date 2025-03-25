package com.example.DAO;

import com.example.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DepartmentDAO {
    //Lấy danh sách tất cả thuộc tính trong department từ db
    public List<String> getAllDepartments() {
        List<String> departments = new ArrayList<>();
        String sqlDepartment = "SELECT * FROM department";

        try(Connection connection = DatabaseConnection.getConnection();
            PreparedStatement statement = connection.prepareStatement(sqlDepartment);
            ResultSet resultSet = statement.executeQuery()){

            while(resultSet.next()){
                int id = resultSet.getInt("Department_id");
                String name= resultSet.getString("Department_name");
                departments.add("ID: " + id);
                departments.add("name: " + name);
            }
        }
        catch (SQLException | ClassNotFoundException e){
            System.out.println("Lỗi khi lấy dữ liệu từ Users: " + e.getMessage());
        }
        return departments;
    }
}
