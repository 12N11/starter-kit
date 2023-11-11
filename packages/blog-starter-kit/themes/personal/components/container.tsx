type Props = {
	children?: React.ReactNode;
	className?: string;
};

export const Container = ({ children, className }: Props) => {
	return <div className={' mx-auto flex flex-col ' + className}>{children}</div>;
};
