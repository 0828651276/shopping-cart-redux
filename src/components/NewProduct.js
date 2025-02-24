import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/actions";
import { v4 as uuidv1} from "uuid"
import products from "../reducers/products";
export default function NewProduct() {
    const [product, setProduct] = useState("");
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        setProduct(e.target.value);

    }
    const handleSubmit = (e) => {
        function addProductAction(param) {
            return undefined;
        }

        dispatch(addProductAction({
            id: products.id,
            code: product.code,
            name: product.name,
            price: product.price,
            genre: product.genre,
            date: product.date,
            inventory: product.inventory
        }))
        setProduct("");
    };
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='col-md-6'>
                    <input type="text" placeholder="" onChange={handleInputChange} value="text"/>

                </div>
                <div className="mx-sm-3 mb-2">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                </div>
            </div>
        </div>
    )


}
