import { useParams } from "react-router-dom"

function EditProduct() {
const {id} = useParams(); // urli muutuja

  return (
    <div>EditProduct</div>
  )
}

export default EditProduct