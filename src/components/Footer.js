import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer class="flex flex-col items-center justify-center my-5">
      <div class="flex items-center justify-center">
        <h1 class="text-cullen text-xl font-roboto mr-2">Developed by Rhuan</h1>
        <FaHeart class="text-marcelin"/>
      </div>
      <div class="flex items-center justify-center m-1">
        <a href="https://github.com/rhuangabrielsantos" title="Github" target="_blanked" >
          <FaGithub class="text-3xl text-vonCount m-1 hover:text-nosferatu transition duration-300 ease-in-out"/>
        </a>
        <a href="https://www.linkedin.com/in/rhuangabrielsantos/" title="Linkedin" target="_blanked" >
          <FaLinkedin class="text-3xl text-vonCount m-1 hover:text-nosferatu transition duration-300 ease-in-out"/>
        </a>
        <a href="https://twitter.com/rhuangs_" title="Twitter" target="_blanked" >
          <FaTwitter class="text-3xl text-vonCount m-1 hover:text-nosferatu transition duration-300 ease-in-out"/>
        </a>
        <a href="https://codepen.io/rhuangabrielsantos" title="Codepen" target="_blanked" >
          <FaCodepen class="text-3xl text-vonCount m-1 hover:text-nosferatu transition duration-300 ease-in-out"/>
        </a>
      </div>
    </footer>
  )
}
