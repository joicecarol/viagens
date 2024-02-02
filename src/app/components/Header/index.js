import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<img src="/Logo Serviços De Turismo (3).png" alt="logo" />
			<ul>
				<li>
					<Link href="/RotaUm">Início</Link>
				</li>
				<li>
					<Link href="/RotaDois">Promoções</Link>
				</li>
				<li>
					<Link href="/RotaTres">Sobre Nós</Link>
				</li>
			</ul>
		</header>
	)
}