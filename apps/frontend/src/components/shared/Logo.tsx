import Image from 'next/image';
import Link from 'next/link';
import logoTexto from '../../public/logo-texto.png';
import logo from '../../public/logo.png';

export default function Logo() {
	return (
		<Link href="/" className="flex items-center gap-3">
			<Image src={logo} height={60} width={60} className="w-auto h-auto" alt="logo" />
			<Image src={logoTexto} width={230} height={0} className="w-auto h-auto" alt="logo" />
		</Link>
	);
}
