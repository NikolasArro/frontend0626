import { Link } from "react-router-dom"

function AdminHome() {
  return (
    <div>
      <Link to="/add-product">
        <button>TODO: Lisa toode</button>
      </Link>
      <Link to="/admin/manage-categories">
        <button>Halda kategooriad</button>
      </Link>
      <Link to="/admin/manage-products">
        <button>Halda tooteid</button>
      </Link>
    </div>
  )
}

export default AdminHome