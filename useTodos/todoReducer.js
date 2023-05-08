//reducer for Todo list

export const todoReducer = ( initState, action) => {

    switch ( action.type ) {
        //this is so common with not implemented functions or actions
        case 'abc':
            throw new Error('Action ABC is not implemented yet')

        case '[TODO] Add Task':
            //console.log('[TODO] Add Task', action.payload)
            return [ ...initState, action.payload ]
            break
        
        case '[TODO] Remove Task':
            //console.log('[TODO] Remove Task', action.payload)
            return initState.filter( todo => todo.id !== action.payload )
            break

        case '[TODO] Toggle Task':
            //console.log('[TODO] Toggle Task', action.payload)
            return initState.map( todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }



                return todo
            })
            break


        default:
            return initState
    }

}