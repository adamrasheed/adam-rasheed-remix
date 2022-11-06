import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { IPostPreview } from "~/types";
import { getFormattedDate } from "~/utils";

type Props = IPostPreview | Omit<IPostPreview, "excerpt">;

const PostPreview: FC<Props> = ({ title, date, excerpt, uri, contentType }) => {
  const url = `${contentType.node.uri.slice(0, -1)}${uri}`;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">
        <Link to={url}>{title}</Link>
      </h2>
      <p className="post-preview-date">{getFormattedDate(date)}</p>

      {!!excerpt && (
        <div
          className="post-preview-excerpt"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      )}
    </div>
  );
};

export default PostPreview;
