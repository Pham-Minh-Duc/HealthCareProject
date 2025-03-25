package com.example;

import com.example.controller.user.DepartmentController;
import com.example.controller.user.LoginController;
import com.example.controller.user.UserController;
import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;


import java.io.File;

public class Main {
    public static void main(String[] args) throws LifecycleException {
        // Khởi tạo Tomcat
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8080);
        tomcat.getConnector();

        // Định nghĩa thư mục gốc của ứng dụng
        File base = new File(".");
        Context ctx = tomcat.addContext("/", base.getAbsolutePath());

        // In ra console để kiểm tra
        System.out.println("Tomcat đang chạy tại: http://localhost:8080");

//        // Đăng ký Servlet
        tomcat.addServlet(ctx, "LoginController", new LoginController());
        ctx.addServletMappingDecoded("/login", "LoginController");


        tomcat.addServlet(ctx, "DepartmentController", new DepartmentController());
        ctx.addServletMappingDecoded("/department", "DepartmentController");


        tomcat.addServlet(ctx, "UserController", new UserController());
        ctx.addServletMappingDecoded("/user", "UserController");
        // Khởi động Tomcat
        tomcat.start();
        tomcat.getServer().await();
    }
}
