interface VideoBannerProps {
  src: string;
  alt: string;
}

const VideoBanner = ({ src, alt }: VideoBannerProps) => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {alt}
          </h1>
          <p className="font-inter text-lg md:text-xl drop-shadow-md">
            Since 1971 • Premium Ethnic Fashion
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;