export default function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Navbar</a>
                <button class="btn btn-outline-success position-relative" type="button">
                    購物車
                    <span class="badge bg-danger position-absolute top-0 start-100 translate-middle">99</span>
                </button>
            </div>
        </nav>
    )
}