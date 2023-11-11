import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="flex flex-col h-24 justify-center bg-cotton dark:bg-void text-sm text-void dark:text-cotton">
			&copy; {new Date().getFullYear()} {publication.title} - Shaping Tomorrow, Today.
		</footer>
	);
};
