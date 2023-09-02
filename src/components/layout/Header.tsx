export default function Header(){
  return (
    <header className="flex h-18 px-10  w-full bg-black dark:bg-slate-950 fixed text-white">
     <img src="poke_Ball_icon.png" className="w-16 h-16" alt="" />
     <nav className="flex align-middle ml-6">
			<ul className="flex grid-cols-4 gap-8 items-center text-xl">
				<li><a >Pokemons</a></li>
				<li><a >items</a></li>
				<li><a >Abilities</a></li>
				<li><a >About</a></li>
			</ul>
		</nav>
    </header>
  )
}
