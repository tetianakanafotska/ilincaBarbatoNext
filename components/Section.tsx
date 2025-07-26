interface SectionProps {
  heading?: string;
  description?: string;
  right?: boolean;
  gradient?: boolean;
  id?: string;
  children: React.ReactNode;
}

function Section({
  heading,
  description,
  right,
  gradient,
  id,
  children,
}: SectionProps) {
  if (gradient) {
    return (
      <section
        id={id}
        className="max-w-screen md:px-[45px] px-[20px] bg-white flex items-center justify-center bg-gradient-to-b from-transparent from-0% via-purple via-55% to-100% to-transparent"
      >
        {children}
      </section>
    );
  }

  if (right) {
    return (
      <section
        id={id}
        className="max-w-screen bg-white md:px-[45px] px-[20px] border-dark/40"
      >
        {heading && (
          <h3 className="section-divider flex justify-end">{heading}</h3>
        )}
        {description && (
          <div className="w-full flex justify-end">
            <p className="section-subtitle text-right md:mb-[7rem] mb-[4rem]">
              {description}
            </p>
          </div>
        )}

        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      className="border-dark/40 bg-white max-w-screen md:px-[45px] px-[20px]"
    >
      <h3 className="section-divider">{heading}</h3>
      {description && (
        <div className="md:mb-[7rem] mb-[4rem]">
          <p className="section-subtitle">{description}</p>
        </div>
      )}

      {children}
    </section>
  );
}

export default Section;
