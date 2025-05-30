import { useState } from "react"

function EditForm({todo,editTodo}) {
    //建立input內容變數
    const [content, setContent] = useState(todo.content);
    const handleSubmit=(e)=>{
        // 取消網頁預設行為。不然會抓不到資料
        e.preventDefault();
        // 增加todo內容
        editTodo(todo.id,content);
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="請輸入待辦事項"
                value={content}
                // 透過onChange做雙向綁定
                // 當UI發生內容異動時，state會跟著改變
                // 當state發生改變時，UI也會跟著改變
                onChange={(e)=>{
                    setContent(e.target.value)
                }}
            />
            <button type="submit">完成</button>
        </form>

    )
}

export default EditForm