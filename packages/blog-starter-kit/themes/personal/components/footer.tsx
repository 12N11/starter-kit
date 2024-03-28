import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="flex flex-col h-24 justify-center text-center text-sm">
			&copy; {new Date().getFullYear()} {publication.title} - Shaping Tomorrow, Today.
		</footer>
	);
};
