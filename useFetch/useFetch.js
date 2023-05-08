//this is a new useFetch

//url that is working
// https://api.breakingbadquotes.xyz/v1/quotes/1

import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [ state, setState ] = useState ({
        data:       null,
        isLoading : true,
        hasError:   null,
    })

    const getfetch = async() => {
        
        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch( url )
        const data = await resp.json()

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })
    }
    useEffect(() => {
        //call the fetch request
        getfetch()
    }, [ url ])
    
  return {
    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError

  }
}
