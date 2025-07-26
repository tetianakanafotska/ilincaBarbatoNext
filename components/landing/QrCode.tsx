function QrCode() {
  return (
    <div className="bg-white flex min-h-[50vh] md:px-[45px] px-[20px] pb-[12vh] gap-1 flex-col items-center justify-center">
      <div>
        <p className="text-48 italic leading-[1] text-center">
          say hello & book a free call
        </p>
        <p className="text-16 pt-5 text-center">
          Scan the QR Code to drop a quick message on Whatsapp
        </p>
      </div>

      <div className="text-center">
        <img
          src="https://res.cloudinary.com/dxdpltdkf/image/upload/v1750854828/Screenshot_2025-06-25_at_14.30.46_jer5fy.avif"
          alt="qr-code"
          className=" w-[200px] mix-blend-darken"
        />
        <span>
          <b>Ilinca</b>
          <br /> + 49 179 4525399
        </span>
      </div>
    </div>
  );
}

export default QrCode;
