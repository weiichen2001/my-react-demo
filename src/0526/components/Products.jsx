import productsData from "../data/productsData"
export default function Products() {
    return (
        <>

            <div className="row row-cols-3 g-3">
                {
                    productsData.map((product) => {
                        return (
                            <div className="col" key={product.id}>
                                <div class="card">
                                    <img src={product.img}
                                        className="card-img-top"
                                        alt="..." />
                                    <div class="card-body">
                                        <h6 class="card-title">
                                            {product.title}
                                            <span className="float-end">NT$ {product.price}</span>
                                        </h6>
                                        <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </>
    )
}