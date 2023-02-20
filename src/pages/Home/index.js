import { useState } from "react"; //使用解構抓出react的useState方法
import Edit from "./components/Edit"
import List from "./components/List"
import "./index.css"

// //還可以用style component的寫法，把css跟js寫在同一個檔案
// const app = {
//     color: "red"
// }
const Home = () =>{
    const [data,setData] = useState([]) //預設資料

    return <div className="app">
                <Edit add={setData}></Edit>
                <List listData = {data}></List>
                <button type="button" className="btn btn-primary">按鈕</button>
            </div>
}
export default Home