import Item from "./Item"

//取得listData的資料狀態
const List = ({listData}) => {
    //console.log(listData); //[]
    return <div className="list">
        {
            listData.map(item=><Item key={item+"oo"}></Item>)
        }
    </div>
}
export default List