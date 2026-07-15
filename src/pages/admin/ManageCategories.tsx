import { useEffect, useState } from 'react'

function ManageCategories() {
    const [categories, setCategories] = useState<any[]>([]);
    const [newCategory, setNewCategory] = useState<any>({name: ""});

    useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/categories")
        .then(res => res.json())
        .then(json => setCategories(json))
    }, []);

    // TODO: table

    function deleteProduct(id: number) {
      fetch(import.meta.env.VITE_BACKEND_URL + "/categories/" + id, {method: "DELETE"})
        .then(res => res.json())
        .then(json => setCategories(json))
    }

    function addCategory() {
        fetch(import.meta.env.VITE_BACKEND_URL + "/categories", {
          method: "POST",
          body: JSON.stringify(newCategory), // TODO: body on: {},
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
          }
        })
          .then(res => res.json())
          .then(json => setCategories([...categories, json]))
    }

    return (
      <div>
        <label>Kategooria nimi</label> <br />
        <input onChange={(e) => setNewCategory({name: e.target.value})} type="text" /> <br />
        <button onClick={() => addCategory()}>Lisa</button>
        {categories.map(category => 
        <div>
            <div>{category.id}</div>
            <div>{category.name}</div>
            <button onClick={() => deleteProduct(category.id)}>Kustuta</button>
        </div>
        )}
      </div>
    )
}

export default ManageCategories