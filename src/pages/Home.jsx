import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 mb-8 text-center">หน้าหลัก</h1>
      <hr />
      <div className="flex justify-center">
        <img 
          src="https://novotelbangkokimpact.com/wp-content/uploads/sites/59/2019/10/Meeting_750x420_NOVEMBER19.jpg" 
          alt="Meeting" 
          className="max-w-full h-auto"
        />
      </div>
      <hr />
    </Layout>
  );
};

export default Home;
