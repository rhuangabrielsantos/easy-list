import { FaStickyNote } from 'react-icons/fa'

export default function Header() {
  return (
    <header class="flex items-center justify-start w-screen">
      <FaStickyNote class="text-cullen text-3xl ml-5 mr-2"/>
      <h1 class="text-cullen text-3xl font-lobster my-5">Todo list</h1>
    </header>
  )
}
