import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';
import ChatBubbleSVG from './icons/svgs/ChatBubbleSVG';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
	coverImageUrl?: string;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount, coverImageUrl }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="flex flex-col max-w-2xl items-center gap-1 px-5 pb-5 md:pb-10">
			<h2 className="text-3xl md:text-5xl font-bold leading-tight md:leading-normal mb-3 tracking-normal text-left md:text-center  text-void dark:text-cotton">
				<Link href={postURL}>{title}</Link>
			</h2>
			{coverImageUrl && (
                <div className="md:max-w-sm">
					<Link href={postURL}>
                    <img src={coverImageUrl} alt={`Cover image for ${title}`} className="rounded-xl" />
					</Link>
                </div>
            )}
			<p className="flex flex-row items-center gap-2">
				<Link href={postURL} className="text-md mt-2 shadow-hard-void dark:shadow-hard-cotton rounded-full text-void outline-offset-3 border dark:border-cotton border-void px-3 py-1 dark:text-cotton">
					<DateFormatter dateString={date} />
				</Link>
				{commentCount > 2 && (
					<>
						<Link href={postURL} className="text-sm mt-2 flex  text-void shadow-hard-void dark:shadow-hard-cotton rounded-full border border-void dark:border-cotton px-3 py-1 dark:text-cotton">
							{commentCount} <ChatBubbleSVG className="h-5 ml-1 fill-void dark:fill-cotton "/>
						</Link>
					</>
				)}
			</p>
		</section>
	);
};
