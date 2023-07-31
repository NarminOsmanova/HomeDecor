
const ProductContent = () => {
  return (
    <div className="shop-context d-block d-md-flex">
    <div>
      <h2>Products</h2>
      <span>
        Et harum quidem rerum facilis est et expedita distinctio. Nam
        libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime.
      </span>
    </div>
    <div className="shop-filter d-flex align-items-center justify-content-end w-100">
      <div className="shop-filter__select">
        <div className="dropdown">
          <button
            className="dropdown-toggle d-flex"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="d-none d-md-block">
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            </span>
            SORT BY
            <span className="d-block d-md-none">
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            </span>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <a className="dropdown-item" href="#">
                POPULAR FIRST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                CHEAPEST FIRST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                EXPENSIVE FIRST
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductContent