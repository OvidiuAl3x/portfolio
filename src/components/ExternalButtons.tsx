import arrowRight from "../assets/icons/right-arrow.png";

type Props = {
  link: string;
  image: string;
};

const ExternalButtons = ({ link, image }: Props) => {
  return (
    <a href={link} target="_blank" className="flex">
      <div className="rounded-full border border-l-grayLight w-10 h-10 p-2">
        <img src={image} alt="icon" />
      </div>
      <div className="rounded-full border border-l-grayLight w-10 h-10 p-2 bg-textWhite right-4 relative">
        <img src={arrowRight} alt="arrow" className="-rotate-45" />
      </div>
    </a>
  );
};

export default ExternalButtons;
