export const metadata = {
  title: "Legal Notice | Ilinca Barbato",
  description:
    "Legal information, ownership, and contact details for this website and its services.",
  openGraph: {
    title: "Legal Notice | Ilinca Barbato",
    description:
      "Legal information, ownership, and contact details for this website and its services.",
    url: "https://ilincabarbato.com/legal",
    type: "website",
  },
};

function LegalNotice() {
  return (
    <main className="mt-30 md:mx-[45px] mx-[20px] max-w-screen mb-25">
      <h1 className="text-2xl text-48 border-b border-dark/40 pb-2 mb-10">
        Legal Notice
      </h1>
      <div className="flex flex-col md:flex-row md:gap-30 gap-10">
        <div className="md:w-[22%] w-full">
          <p className="mb-8">Information pursuant to § 5 TMG:</p>

          <p>
            <strong>Name and Address:</strong>
            <br />
            Ilinca Barbato
            <br />
            Rathenower Str. 24
            <br />
            10559 Berlin
          </p>

          <p>
            <strong>Contact:</strong>
            <br />
            Email: ilinca.barbato@yahoo.com
          </p>

          <p>
            <strong>VAT Identification Number (USt-IdNr.):</strong>
            <br />
            According to §19 section 1 of the German VAT Act (UStG), no VAT is
            charged.
          </p>
        </div>

        <div className="md:w-[35%] w-full">
          <p>
            <strong>Professional Title and Legal Regulations:</strong> <br />
            Profession: Freelance Artist <br /> The general laws for
            self-employed activities and consulting apply (there are no specific
            professional regulations for artists). <br /> Responsible for
            Content According to § 18 MStV: Ilinca Barbato <br />
            <strong>Disclaimer:</strong>
            <br /> The contents of this website have been created with the
            greatest possible care. However, no guarantee can be given for the
            accuracy, completeness, or timeliness of the content. <br />
            <strong>Copyright:</strong>
            <br />
            The content published on this website is subject to German copyright
            law. All texts, images, and graphics are protected by copyright. Any
            use, reproduction, or distribution of the content requires the
            express permission of the author.
          </p>
        </div>
      </div>
    </main>
  );
}

export default LegalNotice;
