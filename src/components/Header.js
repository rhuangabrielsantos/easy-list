import { FaStickyNote } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="flex items-center justify-start w-screen">
      <FaStickyNote className="text-cullen text-3xl ml-5 mr-2"/>
      <h1 className="text-cullen text-3xl font-lobster my-5">Todo list</h1>
    </header>
  )
}
