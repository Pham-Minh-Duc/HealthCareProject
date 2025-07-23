'use client';

import { useState } from 'react';
import DashboardTab from './tab/dashboard/page';
import PatientPage from './tab/patient/page';
import AppointmentTab from './tab/appointment/page';
import Bills from './tab/bill/page';
import Contracts from './tab/contract/page';
import Doctors from './tab/doctor/page';
import Helps from './tab/liveHelp/page';
import Notifications from './tab/note/page';
import '../../icon/themify-icons-font/themify-icons/themify-icons.css';

const items = [
  { name: 'Dashboard', icon: 'ti-layout-grid2' },
  { name: 'Patients', icon: 'ti-user' },
  { name: 'Appointments', icon: 'ti-calendar' },
  { name: 'Bills', icon: 'ti-receipt' },
  { name: 'Contracts', icon: 'ti-files' },
  { name: 'Doctors', icon: 'ti-heart-broken' },
  { name: 'Helps', icon: 'ti-help-alt' },
  { name: 'Notifications', icon: 'ti-bell' },
];

const DashboardPage = () => {

  const [activeTab, setActiveTab] = useState('dashboard');
  const [showSideBar, setShowSideBar] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardTab />;
      case 'Patients':
        return <PatientPage />;
      case 'Appointments':
        return <AppointmentTab />;
      case 'Bills':
        return <Bills />;
      case 'Contracts':
        return <Contracts />;
      case 'Doctors':
        return <Doctors />;
      case 'Helps':
        return <Helps />;
      case 'Notifications':
        return <Notifications />;
      // thêm các case khác nếu cần
      default:
        return <div className='flex items-center justify-center h-screen font-bold text-[50px]'>
                Welcome to Admin Dashboard
               </div>;
    }
  };
  
  return (
    <div className="w-full h-screen">
      <section className='flex h-full'>
          {/* sideBar */}
          <div className={`w-[264px] bg-[#232E3C] overflow-y-auto flex-shrink-0 transition-all duration-300 ease-in-out ${showSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
            <div>
              <header className="text-[18.4px] text-white font-bold mb-4 ml-[26px] mt-2">Dashboard</header>
            </div>
            <div className='h-[66px]'>

            </div>
            <div>
              {items.map((tab) => (
                <div
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`text-[14px] pt-[10px] pb-[10px] pr-[26px] pl-[26px] cursor-pointer text-[#ced4da] mb-2 hover:text-[#e9ecef] ${
                  activeTab === tab.name ? 'border-l-2 border-blue-500 bg-[linear-gradient(90deg,rgba(59,125,221,0.1),rgba(59,125,221,0.088)_50%,transparent)] text-white' : ''
                }`}
                >
                  <i className={`${tab.icon} text-[16px] mr-[12px]`}></i>
                  <span>{tab.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* main content */}
          <main className={`flex-1 overflow-y-auto bg-[#F5F7FB] transition-all duration-300 ease-in-out ${showSideBar ? 'ml-0' : 'ml-[-264px]'}`}>
            <div className='h-[45px] bg-white flex items-center shadow-xs pt-[14px] pb-[14px] pl-[22px] pr-[22px]'>
              <i onClick={()=> setShowSideBar(!showSideBar)} className='ti-menu cursor-pointer ml-4 text-[20px]'></i>
            </div>

            {renderContent()}

          </main>
      </section>
      <footer>

      </footer>
    </div>
  );
}
export default DashboardPage;