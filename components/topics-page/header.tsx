type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return <h1 className="text-3xl self-center font-semibold">{title}</h1>;
};

export default Header;
