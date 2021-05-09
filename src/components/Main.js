import { useState, useEffect } from 'react';
import { FaFlag, FaRegFlag } from 'react-icons/fa';

export default function Main() {
  const [ todo, setTodo ] = useState([])
  const [ note, setNote ] = useState('')

  function createNewTodo(e) {
    e.preventDefault()

    if(!note) {
      return;
    }

    setTodo([...todo, {
      description: note,
      checked: false
    }])
  }

  function checkNote(indexToChanged) {
    let newTodo = []
    
    todo.forEach((item, index) => {
      if(index === indexToChanged) {
        newTodo = [...newTodo, {
          description: item.description,
          checked: item.checked === true ? false : true
        }]

        return
      }

      newTodo = [...newTodo, item]
    })

    console.log(newTodo)

    setTodo(newTodo)
  }

  useEffect(() => {
    setTodo(todo)
  }, [todo])

  return (
    <main className="flex flex-col items-center justify-start mt-5 w-screen">
      <div  className="flex items-center justify-center">
        <input 
          className="shadow appearance-none border rounded w-11/12 md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          placeholder="Note"
          onChange={ e => setNote(e.target.value) }
        />
        <button
          className="shadow bg-dracula hover:bg-buffy focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-3" 
          type="button"
          onClick={createNewTodo}
        >
          Create
        </button>
      </div>


      <div className="flex flex-col items-center justify-start mt-5 h-80 max-h-80 w-screen overflow-auto">
        {todo.map((note, index) => (
          <div 
            className="flex items-center justify-start rounded-md m-2 h-auto p-3 w-10/12 md:max-w-2xl bg-vonCount cursor-pointer" 
            onClick={() => checkNote(index)}
            key={index}
          >
            {note.checked ? <FaFlag className="w-5 h-auto text-cullen" /> : <FaRegFlag className="w-5 h-auto text-cullen" /> }
            
            <h3 className={"text-cullen font-workSans text-xl ml-3 " + (note.checked ? 'line-through' : '')}>{note.description}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}
