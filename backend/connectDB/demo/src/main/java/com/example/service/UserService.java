//package com.example.service;
//
//import com.example.DAO.BookingDAO;
//import com.example.DAO.DepartmentDAO;
//import com.example.DAO.UserDAO;
//import com.example.model.User;
//
//import java.util.List;
//
//public class UserService {
//    private final UserDAO userDAO = new UserDAO();
//    private final BookingDAO bookingDAO = new BookingDAO();
//    private final DepartmentDAO departmentDAO = new DepartmentDAO();
//
//    public void printAllData() {
//        List<User> users = userDAO.getAllUsers();
//        List<String> bookings = bookingDAO.getAllBookings();
//        List<String> departments = departmentDAO.getAllDepartments();
//
//        System.out.println("Danh sách Users:");
//        users.forEach(System.out::println);
//
//        System.out.println("Danh sách Bookings:");
//        bookings.forEach(System.out::println);
//
//        System.out.println("Danh sách Departments:");
//        departments.forEach(System.out::println);
//    }
//}
