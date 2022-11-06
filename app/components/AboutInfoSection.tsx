import { FC } from "react";
import { IAboutEducation, IAboutTalk } from "~/types";

type Props = { data: IAboutEducation[] | IAboutTalk[]; title: string };

const AboutInfoSection: FC<Props> = ({ title, data }) => {
  return (
    <div className=" mb-8">
      <p className="font-semibold accent lrg mb-4 leading-none">{title}</p>
      <ul className=" space-y-4">
        {data.map((item, idx) => (
          <li key={`${item.url}_${idx}`}>
            <a
              href={item.url.url}
              className="block w-fit font-semibold text-sm mb-1"
            >
              {item.title}
            </a>
            <p className="font-semibold text-xs font-light">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutInfoSection;
