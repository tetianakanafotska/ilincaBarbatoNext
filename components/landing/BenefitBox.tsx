interface BenefitProp {
  id: string;
  name: string;
  description: string;
  pic: string;
}

function BenefitBox({ name, description, pic }: BenefitProp) {
  return (
    <article className="flex flex-col lg:w-[26vw] p-5">
      <div className="flex w-full justify-center">
        <img src={pic} className="md:w-[52%] w-[42%] aspect-square mb-6" />
      </div>

      <h3 className="font-bold text-16 pb-2">{name}</h3>
      <p className="text-16">{description}</p>
    </article>
  );
}

export default BenefitBox;
