-- Tạo dữ liệu mẫu cho bảng status
INSERT INTO `status` (`status_name`, `status_description`, `status_create_at`, `status_update_at`) VALUES
('Active', 'Active status', NOW(), NOW()),
('Inactive', 'Inactive status', NOW(), NOW()),
('Pending', 'Pending status', NOW(), NOW()),
('Completed', 'Completed status', NOW(), NOW()),
('Cancelled', 'Cancelled status', NOW(), NOW()),
('Archived', 'Archived status', NOW(), NOW()),
('In Progress', 'In progress status', NOW(), NOW()),
('Delayed', 'Delayed status', NOW(), NOW()),
('Closed', 'Closed status', NOW(), NOW()),
('Rejected', 'Rejected status', NOW(), NOW());

-- Insert data into the 'user' table
INSERT INTO `user` (`user_name`, `user_password`, `user_email`, `user_phone`, `user_address`, `date_of_birth`, `gender`, `status_id`) VALUES
('John Doe', 'password1', 'john.doe@example.com', '0123456789', '123 Street A', '1990-05-15', 'male', 1),
('Jane Smith', 'password2', 'jane.smith@example.com', '0123456788', '456 Street B', '1985-08-20', 'female', 2),
('Alice Johnson', 'password3', 'alice.j@example.com', '0123456787', '789 Street C', '1992-11-30', 'female', 3),
('Bob Brown', 'password4', 'bob.b@example.com', '0123456786', '321 Street D', '1988-07-10', 'male', 4),
('Chris Green', 'password5', 'chris.g@example.com', '0123456785', '654 Street E', '1995-12-25', 'other', 5),
('Eva White', 'password6', 'eva.w@example.com', '0123456784', '987 Street F', '1991-03-05', 'female', 6),
('Frank Black', 'password7', 'frank.b@example.com', '0123456783', '741 Street G', '1989-10-15', 'male', 7),
('Grace Yellow', 'password8', 'grace.y@example.com', '0123456782', '852 Street H', '1993-06-22', 'female', 8),
('Harry Purple', 'password9', 'harry.p@example.com', '0123456781', '963 Street I', '1987-01-12', 'male', 9),
('Isabel Red', 'password10', 'isabel.r@example.com', '0123456780', '159 Street J', '1996-09-09', 'female', 10);

-- Insert data into the 'role' table
INSERT INTO `role` (`role_name`, `role_description`) VALUES
('Admin', 'Administrator role'),
('Doctor', 'Doctor role'),
('Patient', 'Patient role'),
('Manager', 'Manager role'),
('Receptionist', 'Receptionist role'),
('Nurse', 'Nurse role'),
('Lab Technician', 'Lab technician role'),
('Accountant', 'Accountant role'),
('Support Staff', 'Support staff role'),
('Guest', 'Guest role');

-- Insert data into the 'user_role' table
INSERT INTO `user_role` (`role_id`, `user_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- Insert data into the 'hospital' table
INSERT INTO `hospital` (`hospital_name`, `hospital_address`, `hospital_phone`, `hospital_email`, `hospital_type`, `hospital_established_date`) VALUES
('General Hospital', '100 Main St', '0123456700', 'general@example.com', 'General', '1970-01-01'),
('City Hospital', '200 Park Ave', '0123456701', 'city@example.com', 'City', '1980-02-02'),
('Specialist Hospital', '300 King Rd', '0123456702', 'specialist@example.com', 'Specialist', '1990-03-03'),
('Children Hospital', '400 Queen St', '0123456703', 'children@example.com', 'Children', '2000-04-04'),
('Heart Center', '500 Health Blvd', '0123456704', 'heart@example.com', 'Heart', '2010-05-05'),
('Eye Clinic', '600 Vision Ln', '0123456705', 'eye@example.com', 'Clinic', '2020-06-06'),
('Dental Hospital', '700 Smile Ave', '0123456706', 'dental@example.com', 'Dental', '1985-07-07'),
('Orthopedic Center', '800 Bone Rd', '0123456707', 'ortho@example.com', 'Orthopedic', '1995-08-08'),
('Cancer Center', '900 Hope St', '0123456708', 'cancer@example.com', 'Cancer', '2005-09-09'),
('Skin Clinic', '1000 Glow Ln', '0123456709', 'skin@example.com', 'Clinic', '2015-10-10');

-- Insert data into the 'department' table
INSERT INTO `department` (`department_name`, `department_descriptions`, `doctor_id`, `hospital_id`) VALUES
('Cardiology', 'Heart-related treatments', NUll, 1),
('Neurology', 'Brain and nerves', NUll, 2),
('Orthopedics', 'Bone and joint care', NUll, 3),
('Pediatrics', 'Child health', NUll, 4),
('Ophthalmology', 'Eye care', NUll, 5),
('Dermatology', 'Skin treatments', NUll, 6),
('Dentistry', 'Dental care', NUll, 7),
('Oncology', 'Cancer care', NUll, 8),
('Gynecology', 'Women’s health', NUll, 9),
('General Medicine', 'General health', NUll, 10);

-- Insert data into the 'doctor' table
INSERT INTO `doctor` (`doctor_name`, `doctor_email`, `doctor_phone`, `doctor_qualification`, `doctor_experience_years`, `department_id`, `status_id`) VALUES
('Dr. A', 'dr.a@example.com', '0123456710', 'Cardiology', 15, 1, 1),
('Dr. B', 'dr.b@example.com', '0123456711', 'Neurology', 10, 2, 2),
('Dr. C', 'dr.c@example.com', '0123456712', 'Orthopedics', 8, 3, 3),
('Dr. D', 'dr.d@example.com', '0123456713', 'Pediatrics', 5, 4, 4),
('Dr. E', 'dr.e@example.com', '0123456714', 'Ophthalmology', 12, 5, 5),
('Dr. F', 'dr.f@example.com', '0123456715', 'Dermatology', 9, 6, 6),
('Dr. G', 'dr.g@example.com', '0123456716', 'Dentistry', 7, 7, 7),
('Dr. H', 'dr.h@example.com', '0123456717', 'Oncology', 6, 8, 8),
('Dr. I', 'dr.i@example.com', '0123456718', 'Gynecology', 4, 9, 9),
('Dr. J', 'dr.j@example.com', '0123456719', 'General Medicine', 3, 10, 10);

-- Insert data into the 'booking' table
INSERT INTO `booking` (`booking_date`, `booking_reason`, `user_id`, `hospital_id`, `status_id`, `doctor_id`) VALUES
(NOW(), 'Regular check-up', 1, 1, 1, 1),
(NOW(), 'Consultation', 2, 2, 2, 2),
(NOW(), 'Follow-up', 3, 3, 3, 3),
(NOW(), 'Emergency', 4, 4, 4, 4),
(NOW(), 'Routine check-up', 5, 5, 5, 5),
(NOW(), 'Eye examination', 6, 6, 6, 6),
(NOW(), 'Dental cleaning', 7, 7, 7, 7),
(NOW(), 'Cancer screening', 8, 8, 8, 8),
(NOW(), 'Maternity check-up', 9, 9, 9, 9),
(NOW(), 'General consultation', 10, 10, 10, 10);

-- Insert data into the 'permission' table
INSERT INTO `permission` (`permission_name`, `permission_description`) VALUES
('Read', 'Permission to read data'),
('Write', 'Permission to write data'),
('Update', 'Permission to update data'),
('Delete', 'Permission to delete data'),
('Manage Users', 'Permission to manage users'),
('Manage Roles', 'Permission to manage roles'),
('View Reports', 'Permission to view reports'),
('Edit Settings', 'Permission to edit settings'),
('Access API', 'Permission to access API'),
('Full Control', 'Permission for full control');

-- Insert data into the 'permission_role' table
INSERT INTO `permission_role` (`role_id`, `permission_id`) VALUES
(1, 10),
(2, 1),
(2, 2),
(3, 3),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 9),
(9, 4);

