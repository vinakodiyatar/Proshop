import { useState,useEffect } from "react";
import {Link,useNavigate,useParams} from  "react-router-dom"
import {Form ,Button} from "react-bootstrap"
import Loader from "../../componets/Loader"
import Message from "../../componets/Message"
import FormContainer from "../../componets/FormContainer"
import {toast} from 'react-toastify';
import {useUpdateProductMutation,useGetProductDetailsQuery} from '../../slices/productsApiSlice'


const ProductEditScreen = () => {
    const { id: productId } = useParams();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');



  return (
    <div>ProductEditScreen</div>
  )
}

export default ProductEditScreen