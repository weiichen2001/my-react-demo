import "./App.css"

import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"

export default function App() {
    return (
        <>
            <div className="wrap">
                {/* 導覽列（navbar) */}
                <Navbar />

                <div className="container mt-4">
                    {/* 外層格線 */}
                    <div className="row">
                        {/* 產品列表區（左）(card) */}
                        <div className="col-md-7">
                            {/* 內層格線 */}
                            <Products/>
                        </div>
                        {/* 購物清單區（右）(表格) */}
                        <div className="col-md-5">
                            <Cart/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}