import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ManageProducts() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
    fetch("http://localhost:8080/products/all")
        .then(res => res.json())
        .then(json => setProducts(json))
    }, []);

    // TODO: table

    function deleteProduct(id: number) {
      fetch("http://localhost:8080/products/" + id, {method: "DELETE"})
        .then(res => res.json())
        .then(json => setProducts(json))
    }

    return (
      <div>
          {products.map(product => 
          <div key={product.id}>
              <div>{product.id}</div>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.active ? "Aktiivne" : "Mitteaktiivne"}</div>
              <div>{product.image}</div>
              <div>{product.stock}</div>
              <div>{product.category ? product.category.name : "Kategooria puudub"}</div>
              <button onClick={() => deleteProduct(product.id)}>Kustuta</button>
              <Link to={"/admin/edit-product/" + product.id}>
                <button>Muuda</button>
              </Link>
          </div>
          )}
      </div>
    )
}

export default ManageProducts
