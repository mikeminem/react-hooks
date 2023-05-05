import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

//initial state
const initState = []

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}

export const useTodos = ( ) => {

    const [ todoList, dispatchTodo ] = useReducer( todoReducer, initState, init )

    useEffect(() => {
        //what I need to do
        localStorage.setItem('todos', JSON.stringify( todoList ) || [] )
      
      }, [ todoList ])


      const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Task',
            payload: todo
        }
        dispatchTodo( action )

    }

    const handleDeleteTodo = ( id ) => {

        const action = {
            type: '[TODO] Remove Task',
            payload: id
        }
        dispatchTodo( action )

    }

    const handleToggleTodo = ( id ) => {

        const action = {
            type: '[TODO] Toggle Task',
            payload: id
        }
        dispatchTodo( action )

    }


  return { 
        todoList,
        todoCount: todoList.length,
        todoPendingCount: todoList.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
  }
}
