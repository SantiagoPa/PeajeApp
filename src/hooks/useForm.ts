import { ChangeEvent, useState } from "react"
import { IRegisterVehicle } from "../peaje/interface";

export const useForm = (initialState: IRegisterVehicle) => {
    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm(initialState);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    return {
        ...form,
        form,

        //methods
        setForm,
        reset,
        handleInputChange,
    }
}