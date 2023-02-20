import React from 'react';  //主程式，裡面很多函式庫
import ReactDOM from 'react-dom/client';  //透過ReactDOM把內容渲染到畫面上
import './index.css';
import Home from './pages/Home';  //如果你的元件檔案名稱是index.js，只要寫他的父層資料夾名稱就好

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);
