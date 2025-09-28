export default function Home() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/images-pexels-com-photos-2529375-pexels-photo-2529375-auto-compress-cs-tinysrgb-dpr-2-h-650-w-940.jpeg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Finn roen og balansen med Liv/Laga
          </h1>
          <p className="text-white text-lg md:text-xl">
            Velkommen til Liv/Laga, et sted for å finne indre ro og balanse
            gjennom positiv psykologi, meditasjon, Yoga og lydbad. Vi hjelper
            deg med å finne ditt indre lys, og leve et mer bevisst og harmonisk
            liv.
          </p>
        </div>
      </section>
    </>
  );
}
