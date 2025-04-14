// 子元件
function MyComponent(props) {
    // 查看props物件
    console.log(props)

    // 執行父元件傳送過來的c屬性函式(return外面不用加大括號，裡面要)
    props.c()

// 使用大括號(props.屬性名稱)
    return (
        <>
            <div>我是子元件，帶有主元件傳遞過來的屬性內容為【{props.a}】</div>
            <div>我是子元件，帶有主元件傳遞過來的屬性內容為【{props.a}】</div>
            { props.c()}
        </>)
}

// 子元件
// 由於props是物件，所以可以使用解構賦值，來取用資料
function MyComponent2({a,b,c}) {
    // 呼叫c屬性方法
    c();
    return<>
    <div>第一個屬性:{a}</div>
    <div>第二個屬性:{b}</div>
    <div>第三個屬性:{c()}</div>
    {/* c屬性是一個方法所以要加() */}
    </>
}


// 父元件
function App() {
    return (
        <>
            {/* 回調函式=>callback function */}
            <MyComponent
                a="我是屬性a"
                b="我是屬性b"
                c={()=>{console.log("我是屬性c")}}
            />

            <MyComponent2
                a="我是屬性a"                ㄒ
                b="我是屬性b"
                c={()=>{console.log("我是屬性c")}}
            />

        </>

    )
}

export default App