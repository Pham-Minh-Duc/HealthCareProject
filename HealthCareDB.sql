CREATE TABLE `user` (
  `user_id` int PRIMARY KEY,
  `user_name` nvarchar(255),
  `user_pasword` varchar(255),
  `user_email` varchar(255),
  `user_phone` varchar(12),
  `user_address` nvarchar(255),
  `date_of_birth` date,
  `user_gender` ENUM("male","female","other"),
  `status_id` int
);

CREATE TABLE `status` (
  `status_id` int PRIMARY KEY,
  `status_name` nvarchar(255),
  `status_descriptions` nvarchar(255),
  `status_create_at` datetime,
  `status_update_at` datetime
);

CREATE TABLE `booking` (
  `booking_id` int PRIMARY KEY,
  `booking_date` datetime,
  `booking_reason` nvarchar(255),
  `user_id` int,
  `hospital_id` int,
  `status_id` int,
  `doctor_id` int
);

CREATE TABLE `role` (
  `role_id` int PRIMARY KEY,
  `role_name` nvarchar(255),
  `role_descriptions` nvarchar(255)
);

CREATE TABLE `user_role` (
  `user_role_id` int PRIMARY KEY,
  `role_id` int NOT NULL,
  `user_id` int NOT NULL
);

CREATE TABLE `permission` (
  `permission_id` int PRIMARY KEY,
  `permission_name` nvarchar(255),
  `permission_descriptions` nvarchar(255)
);

CREATE TABLE `permission_role` (
  `permission_role_id` int PRIMARY KEY,
  `role_id` int NOT NULL,
  `permission_id` int NOT NULL
);

CREATE TABLE `hospital` (
  `hospital_id` int PRIMARY KEY,
  `hospital_name` nvarchar(255),
  `hospital_address` nvarchar(255),
  `hospital_phone` varchar(12),
  `hospital_email` varchar(255),
  `hospital_type` varchar(255),
  `hospital_established_date` DATE
);

CREATE TABLE `doctor` (
  `doctor_id` int PRIMARY KEY,
  `doctor_name` nvarchar(255),
  `doctor_email` varchar(255),
  `doctor_phone` varchar(12),
  `doctor_qualification` nvarchar(255),
  `doctor_experience_years` int,
  `department_id` int,
  `status_id` int
);

CREATE TABLE `department` (
  `department_id` int PRIMARY KEY,
  `department_name` nvarchar(255),
  `department_descriptions` nvarchar(255),
  `department_head` int,
  `hospital_id` int
);

ALTER TABLE `user` ADD FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`);

ALTER TABLE `booking` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `booking` ADD FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`hospital_id`);

ALTER TABLE `booking` ADD FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`);

ALTER TABLE `booking` ADD FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`);

ALTER TABLE `user_role` ADD FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

ALTER TABLE `user_role` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

ALTER TABLE `permission_role` ADD FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

ALTER TABLE `permission_role` ADD FOREIGN KEY (`permission_id`) REFERENCES `permission` (`permission_id`);

ALTER TABLE `doctor` ADD FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`);

ALTER TABLE `doctor` ADD FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`);

ALTER TABLE `department` ADD FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`hospital_id`);

ALTER TABLE `department` ADD FOREIGN KEY (`department_head`) REFERENCES `doctor` (`doctor_id`);


