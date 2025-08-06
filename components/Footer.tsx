import TransitionLink from "@/lib/TransitionLink";

const Footer = () => {
  return (
    <footer className="pt-15 flex flex-col justify-end bg-light-purple md:px-[45px] px-[20px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p>
            <b className="text-20 leading-[1]">
              Therapeutic Art & Sound Healing
            </b>
            <br />
            by Ilinca Barbato
          </p>
          <div className="mt-8">
            <p className="pb-4">You can find us here:</p>
            <span>
              Rykestraße 23,
              <br />
              10405, Berlin
            </span>
          </div>
        </div>

        <div className="flex gap-5 md:w-[28%] w-full md:items-end flex-col">
          <p className="md:text-right mt-3 md:mt-0">
            Let's stay connected. Sign up to our Whatsapp newsletter to stay
            informed about events.
          </p>
          <a
            className="button w-fit px-10 rounded-full"
            href="https://chat.whatsapp.com/E0J0TQePnuL93SI6Triudf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Whatsapp channel
          </a>
          <p className="text-dark/40 md:text-right">
            By signing up to our newsletter you agree to our{" "}
            <TransitionLink
              href="/privacy"
              className="underline underline-offset-3"
            >
              privacy policy
            </TransitionLink>
          </p>
        </div>
      </div>

      <div className="mt-[6%] flex flex-col md:flex-row max-w-screen justify-between py-7 text-dark/40 border-t-1 border-dark/15">
        <span>© 2025 Ilinca Barbato. All rights reserved.</span>

        <span className=" underline-offset-4">
          <TransitionLink
            href="/legal"
            className="hover:underline transition-all"
          >
            Legal Notice
          </TransitionLink>
          <span>, </span>
          <TransitionLink
            href="/privacy"
            className="hover:underline transition-all"
          >
            Privacy Policy
          </TransitionLink>
        </span>
        <span>
          Website by{" "}
          <a
            href="https://www.tetianakanafotska.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Tetiana Kanafotska
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
