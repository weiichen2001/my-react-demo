import { useEffect } from "react";

import $ from 'jquery';
import './App.css';

export default function App() {
    useEffect(() => { 
        // 當滑鼠碰到超連結時，檢查has()是否有ttpShow類別
        $('a:has(.ttpShow)').on('mouseover',function(e){
            // 動態增加:append()一個div區域在body標籤中
            // 取得超連結指定的子元素children()中的html內容html()
            $('body').append('<div id="ttpPanel">'+$(this).children('.ttpShow').html()+'</div>');
            $('#ttpPanel').css({
                top:(e.pageY+10)+'px',
                left:(e.pageX+10)+'px'
            }).fadeIn('fast');
        })
        .on('mouseout',function(){
            $('#ttpPanel').remove();
        })
        .on('mousemove',function(e){
             $('#ttpPanel').css({
                top:(e.pageY+10)+'px',
                left:(e.pageX+10)+'px'
            });
        })

    }, [])

    return (
        <>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem ipsum dolor, sit amet
                <a href="#"> consectetur
                    <span className="ttpShow">consectetur內容說明</span>
                </a>
                Lorem ipsum dolor
                <a href="#">  sit amet,
                    <span className="ttpShow"><img src="../public/images/banner.jpg" alt="" style={{width:'100px'}} />
                    <p>jishuhfohkiiij</p>
                    </span>
                </a>
                
                consectetur adipisicing elit. Dignissimos quis, qui tempore totam illo consectetur doloribus, quisquam, corporis temporibus ullam veniam praesentium laudantium. Architecto laudantium nobis exercitationem sint illum enim minus optio dolorem eos ex quidem quod quo, velit, officia cum amet. Eius autem laborum eum error soluta, laboriosam reiciendis inventore repellendus vel corporis commodi cumque placeat aliquam nemo ea ut! Voluptas, tempore. At tempora praesentium nesciunt, magnam aperiam impedit commodi quae! Reprehenderit quo repellat in blanditiis. Commodi asperiores rerum voluptatem quibusdam accusantium pariatur ducimus inventore aperiam porro distinctio. Aperiam rerum omnis rem consectetur enim consequuntur molestiae laudantium ipsam harum cupiditate quis cumque commodi corrupti sed voluptas praesentium exercitationem quasi fuga, beatae vero nulla, voluptatem esse quisquam. Id enim molestiae, magni harum voluptatem minima hic delectus saepe quidem aspernatur provident dolor quia, officia beatae accusamus accusantium praesentium nemo reprehenderit distinctio qui, quasi ipsa quibusdam? Neque numquam alias id magnam illum ipsum consectetur fuga ipsa. Amet ullam ipsa iusto dolorem quisquam officiis, id veritatis quod nam magnam ipsam reiciendis, sed recusandae aut est. Est, voluptate. Deserunt totam consectetur iure aliquid ipsam ea placeat ipsum architecto ipsa molestiae? Ratione modi eum consequatur in obcaecati neque voluptas veritatis, nulla voluptatibus alias tenetur consectetur accusantium doloremque aspernatur ad voluptates nisi, corporis pariatur impedit dignissimos tempore? Ipsam, recusandae. Iusto ratione officia id sapiente, optio illo. Optio illum a eum ratione deserunt aspernatur facilis saepe in laudantium ducimus voluptate quibusdam, maxime voluptates sint quasi, perspiciatis libero et nihil officia enim suscipit sed, tempore architecto. Dolores similique autem dolore ducimus, deserunt aspernatur sed alias aliquam, saepe eos sapiente impedit repellat placeat officia esse fugiat nihil perspiciatis officiis rerum expedita fugit accusantium. Iusto, illum harum impedit architecto, neque laudantium, ex illo ducimus necessitatibus optio fugiat deleniti asperiores debitis ut omnis. Consequuntur ducimus est officia sed quis minima neque?
            </p>
        </>
    )
}