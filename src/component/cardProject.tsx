import { CgArrowTopRight } from "react-icons/cg";

const CardProject = ({img,link,name}:{img:string,link:string,name:string}) => {
  return (
    <div className="w-[90%] sm:w-[390px] h-[310px]">
      <div className="overflow-hidden rounded-t-sm">
        <a href={link}>
          <img
            src={img}
            className="rounded-t-sm duration-[0.5s] w-full hover:scale-[110%]"
            width={390}
            height={270}
            loading="lazy"
            alt={name}
          />
        </a>
      </div>
      <div className="h-[70px] w-full bg-black/70 flex justify-between items-center px-2 rounded-b-sm">
        <div className="leading-1">
          <p className="text-white text-[10px] text-start   font-[500]">
            click to vist
          </p>
          <h2 className="title text-[14px]/8 ">{name}</h2>
        </div>
        <div>
          <a href={link}>
            <button className="btn border-0 text-white duration-[0.5s] hover:text-sky-600  text-lg">
              <CgArrowTopRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
