'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type LoginPageProps = {
  onClose: () => void;
}

const LoginPage = ({ onClose }: LoginPageProps) => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        if(email === '123' || password === '123') {
            alert('Đăng nhập thành công!');
            onClose(); // Close the modal after login
            router.push('/dashboard'); // Redirect to dashboard
        } else {
            alert('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
        }
    };

    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-6 shadow-md w-[400px] max-w-[90vw]">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Mật khẩu</label>
                        <input 
                            type="password" 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>
                    <button 
                        type="button" 
                        className="w-full mt-4 bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition"
                        onClick={onClose} 
                    >
                        Đóng
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;