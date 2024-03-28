import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import { ThemeProvider } from './theme-provider';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
			<div className="min-h-screen mx-auto max-w-7xl">
				<main>{children}</main>
			</div>
			</ThemeProvider>
			<Analytics />
			<Integrations />
		</>
	);
};
