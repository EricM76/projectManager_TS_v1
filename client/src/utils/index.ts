import Swal from "sweetalert2"

type Icon = 'warning' | 'error' | 'success' | 'info' | 'question';

type ShowMessageResponse =  (title: string, text : string, icon? : Icon) => void


export const showMessageResponse : ShowMessageResponse = (title, text, icon ='info') => {

    Swal.fire({
        icon,
        title,
        text
    })

}