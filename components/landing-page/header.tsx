const Header = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <header className="sm:text-4xl text-lg font-semibold glow text-primary dark:shadow-lg  dark:shadow-gray-700  shadow-sm">
        Data Structures & Algorithms
      </header>
      <p className="sm:text-xl text-sm text-muted-foreground  text-balance text-center">
        Welcome to CS210! This website is a master list of all things data
        structures. You will find video lectures, slides, JAR files of code and
        additional resources.
      </p>
    </section>
  );
};

export default Header;
