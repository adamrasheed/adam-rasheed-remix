import { FC } from "react";
import { IRelatedPosts } from "~/types";

const RelatedPosts: FC<{ posts: IRelatedPosts }> = ({ posts }) => {
  const hasPosts = !!posts.edges.length;
  return (
    <div className="">
      <p className="text-base font-semibold accent lrg leading-none small-caps">
        Related Posts
      </p>
      <ul className="mt-4 space-y-2 list-none">
        {hasPosts &&
          posts.edges.map(({ node }) => (
            <li key={node.id}>
              <a href={`/blog${node.uri}`} className="inline-block font-medium">
                {node.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;
