import {ChangeEvent, useState} from 'react' 
 
export const useForm = (initialState={}) => { 
    const [formValues, setFormValues] = useState(initialState); 
 
    const handleInputChange = (e : ChangeEvent<HTMLInputElement>) =>{ 
        setFormValues({ 
            ...formValues, 
            [e.target.name] : e.target.value 
        }) 
    }; 
 
    const reset = () => { 
        setFormValues(initialState) 
    } 
 
    return { 
        formValues, 
        handleInputChange, 
        reset 
    } 
}