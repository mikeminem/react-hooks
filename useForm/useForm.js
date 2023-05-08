import { useState } from 'react'

export const useForm = ( initForm = {}) => {
  
    const [ formState, setformState ] = useState( initForm )

    //not work for a global form
    //const { username, email, password} = formState

    const handleInputChange = ( { target } ) => {
        const{ name, value } = target

        setformState({
            ...formState, 
            [ name ]: value
        })
    }

    //handle on Reset form
    const handleResetForm = () => {
        setformState( initForm )
    }

    return {
        ...formState,
        formState,
        handleInputChange,
        handleResetForm,
    }
}
