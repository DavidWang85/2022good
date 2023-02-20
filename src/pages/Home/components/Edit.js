import { useState } from "react"

const Edit = ({add}) =>{
    const [note, setNote] = useState("")

    function noteChange(e){
        setNote(e.target.value)
    }
    function addItem(){
        add([1,2,3])
    }
    return <div>
        <h1>備忘錄</h1>
        <p>記事本</p>
        <input type="text" value={note} onChange={noteChange}/>
        <p>日期</p>
        <input type="date" />
        <p>時間</p>
        <input type="time" />
        <button onClick={addItem} className="add">新增</button>
    </div>
}
export default Edit