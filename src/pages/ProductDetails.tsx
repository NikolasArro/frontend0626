import { useParams } from "react-router-dom";

function ProductDetails() {
const {id} = useParams(); // urli muutuja

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails