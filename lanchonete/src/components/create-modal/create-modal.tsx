import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from '../../interface/FoodData';
import "./create-modal.css"
interface InputProps{
    label:string,
    value: string| number,
    update(value:any):void
}


const Input =({ label, value, update}:InputProps)=>{
    return (
        <>
        <label >{label}</label>
        <input value={value} onChange={event =>update(event.target.value)} />
        </>
    )
}
interface ModalProps{
    closeModal(): void;
}
export function CreateModal({closeModal} : ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] =  useState("");
    const {mutate , isSuccess, isLoading} = useFoodDataMutate();

    const submit = () => {
        //valida se os campos do formulario estão preenchidos
        if (title.trim() === "" || price <= 0 || image.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        //cria o objeto que levara os valores ao cadastro 
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);
    }

    useEffect(()=>{
        if(!isSuccess) return closeModal();
    }, [isSuccess]);

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>
                    cadastre um novo item
                </h2>
                <form className="input-container">
                <Input label="title" value={title} update={setTitle}></Input>
                <Input label="price" value={price}  update={setPrice}></Input>
                <Input label="image" value={image}  update={setImage}></Input> 
                 <button onClick={submit} className="btn-secondary ">
                     {isLoading ? 'Postando...' :'Postar'}
                 </button>
               
                </form>
              </div>
        </div>
    )
}