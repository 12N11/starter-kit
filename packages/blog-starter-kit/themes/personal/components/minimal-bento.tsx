// MinimalBento.tsx
import { PostFragment } from '../generated/graphql';
import { BentoGrid } from './ui/bento-grid';
import { MinimalPostPreviewBento } from './minimal-post-preview-bento';


type Props = {
  posts: PostFragment[];
  context: 'home' | 'series' | 'tag';
};

export const MinimalBento = ({ posts }: Props) => {
  return (
	
    <BentoGrid className="">
		
      {posts.map((post) => (
        <MinimalPostPreviewBento
          key={post.id}
          title={post.title}
          date={post.publishedAt}
          author={{
            name: post.author.name,
          }}
          slug={post.slug}
          commentCount={post.comments?.totalDocuments}
          coverImageUrl={post.coverImage?.url}
        />

      ))}
    </BentoGrid>
  );
};
