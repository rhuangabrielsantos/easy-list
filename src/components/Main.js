import { useState, useEffect } from 'react'
import { FaFlag, FaRegFlag, FaRegTrashAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Main() {
  const [ todo, setTodo ] = useState([])
  const [ note, setNote ] = useState('')

  useEffect(() => {
    const storageTodo = JSON.parse(localStorage.getItem('todo'));

    if (storageTodo !== null) {
      setTodo(storageTodo)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  function createNewTodo(e) {
    e.preventDefault()

    if(!note) {
      return;
    }

    setTodo([...todo, {
      description: note,
      checked: false
    }])

    setNote('');
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

    setTodo(newTodo)
  }

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -70 },
  }

  function trashNote(indexToChanged) {
    let newTodo = todo.filter((item, index) => {
      return index !== indexToChanged
    })

    setTodo(newTodo)
  }

  return (
    <main className="flex flex-col items-center justify-start mt-5 w-screen">
      <div  className="flex items-center justify-center">
        <form>
          <input 
            className="shadow appearance-none border rounded w-11/12 md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Note"
            onChange={ e => setNote(e.target.value) }
            value={note}
          />
          <button
            className="shadow bg-dracula hover:bg-buffy focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-3" 
            type="submit"
            onClick={createNewTodo}
          >
            Create
          </button>
        </form>
      </div>


      <div className="flex flex-col items-center justify-start mt-5 h-96 max-h-96 w-11/12 md:w-9/12 lg:w-4/12 overflow-y-auto">
        {todo.map((note, index) => (
          <motion.div 
            className="flex items-center justify-start rounded-md m-2 h-auto p-3 w-11/12 bg-vonCount cursor-pointer" 
            key={index}
            initial="hidden"
            animate="visible"
            variants={item}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-1/12 flex items-center justify-center" onClick={() => checkNote(index)}>
              {note.checked ? <FaFlag className="w-5 h-5 text-cullen" /> : <FaRegFlag className="w-5 h-5 text-cullen" /> }
            </div>
            <div className="w-10/12" onClick={() => checkNote(index)}>
              <h3 className={"break-all text-cullen font-workSans text-xl ml-3 whitespace-normal " + (note.checked ? 'line-through' : '')}>{note.description}</h3>
            </div>
            <div className="w-1/12 flex items-center justify-center" onClick={() => trashNote(index)}>
              <FaRegTrashAlt className="w-5 h-5 text-cullen" />
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
