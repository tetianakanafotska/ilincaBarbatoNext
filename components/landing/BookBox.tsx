import ArrowLink from "@/components/icons/ArrowLink";
import TransitionLink from "@/lib/TransitionLink";
interface ServiceProp {
  id: string;
  pic: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  link: string;
}

function BookBox({
  pic,
  name,
  description,
  price,
  duration,
  link,
}: ServiceProp) {
  return (
    <TransitionLink
      className="flex group cursor-pointer lg:border-0 border-dark/40 border-1 relative hover:bg-dark/7 transition-all duration-300 overflow-hidden flex-col lg:w-[28vw] max-w-screen rounded-tr-[2.5rem]"
      href={link}
    >
      <div className="w-[33%] aspect-[1.86] overflow-hidden absolute top-0 right-0 hidden md:flex">
        <img src={pic} className="object-cover h-full w-full object-center" />
      </div>

      <div className="flex md:p-9 p-6 md:pb-12 pb-8 flex-col flex-grow">
        <h3 className="text-48 pb-6 lg:mt-[30%] mt-[10%] leading-[0.95] w-[50%]">
          {name}
        </h3>
        <p>{description}</p>

        <div className="my-6 italic text-dark">
          <span className="inline-block text-center  align-baseline ">
            {price}
          </span>
          <span className=""> / {duration}</span>
        </div>

        <button className="relative bottom-0 text-left cursor-pointer mt-8">
          <span className="link-underline group-hover-link leading-[1.2]">
            Learn more
          </span>
          <ArrowLink className="inline ml-2 h-[13px] rotate-225" />
        </button>
      </div>
    </TransitionLink>
  );
}

export default BookBox;
