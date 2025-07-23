
type RegisterPageProps = {
  onClose: () => void;
}

const RegisterPage = ({ onClose }: RegisterPageProps) => {
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-6 shadow-md w-[400px] max-w-[90vw]">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng kí</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Mật khẩu</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Nhập lại mật khẩu</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Đăng ký</button>
                    <button type="button" onClick={onClose} className="w-full mt-4 bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition">Đóng</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;