import { useState } from 'react'
import p1 from './images/flower.jpg'
import p2 from './images/penguin.jpg'


function App() {
    // 目前圖片的state
    const [currentImg,setCurrentImg]=useState(0);

    // 圖片陣列
    const arrPhotos=[p1,p2];

    return (
        <>
            <div className="main">
                {/* 縮圖區 */}
                <div>
                    {/* <img src={p1} alt="" width={100} /> */}
                    {/* <img src={p2} alt="" width={100} /> */}

                    {
                        arrPhotos.map((photo,index)=>{
                            return(
                                <img key={index}src={photo} alt="" width={100}
                                // 當滑鼠碰到時，取得目前圖片的索引編號，透過setCurrentImg方法更改
                                onMouseOver={e=>setCurrentImg(index)}
                                // 變更滑鼠的形狀為手型icon
                                style={{cursor:"pointer"}}
                                
                                />
                            )
                        })
                    }
                </div>

                {/* 放大圖區 */}
                <div >
                    <img src={arrPhotos[currentImg]} alt="" width={300} />
                </div>
            </div>

        </>
    )
}

export default App