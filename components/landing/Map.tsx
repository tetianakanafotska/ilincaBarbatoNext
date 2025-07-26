import Section from "../../components/Section";

function Map() {
  return (
    <Section
      heading="find us here"
      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
    >
      <div className="max-w-screen mx-[45px] -translate-y-18">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.735081370726!2d13.419698376787618!3d52.53822717206589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fbac05e33e5%3A0x6a437bc5e00e4bb0!2sBOAR%C3%89%20Yoga%20Art%20Studio!5e0!3m2!1sde!2sua!4v1747570629241!5m2!1sde!2sua"
          style={{
            width: "100%",
            height: "70vh",
            filter: "sepia(0.2)",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}

export default Map;
