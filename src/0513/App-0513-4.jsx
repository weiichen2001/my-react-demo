import { LiaCitySolid } from "react-icons/lia"

function App() {

    let country = [
        {
            cityId: 1,
            cityName: "台北市",
        },
        {
            cityId: 2,
            cityName: "桃園市",
        },

    ]

    return (
        <>
            <button onClick={() => {
                //    將陣列物件轉為字串
                let countryString=JSON.stringify(country);
                // 寫入字串到localstorage
                localStorage.setItem('countrys', countryString);

            }}>寫入</button>

            <button onClick={()=>{
                // 取出localstorage資料
                console.log(localStorage.getItem('countrys'));
                // 將字串轉成陣列物件
                let getDataArray=JSON.parse(getData);
                console.log('getDataArray',getDataArray,typeof(getDataArray));
            }}>讀取</button>
            </>
            )
}

            export default App