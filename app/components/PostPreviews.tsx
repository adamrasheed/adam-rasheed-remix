import { FC } from "react";
import { IPostPreviews } from "~/types";

type Props = {
  posts: IPostPreviews;
  title?: string;
};
const PostPreviews: FC<Props> = ({ posts }) => {
  return (
    <section>
      <h1 className="section-title">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {edges.map(({ node }) => (
          <PostPreview key={node.id} {...{ ...node }} />
        ))}
      </div>
    </section>
  );
};

export default PostPreviews;
