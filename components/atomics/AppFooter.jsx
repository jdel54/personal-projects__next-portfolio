import USER from '../../data/user.json';

const AppFooter = () => {
  return (
    <footer className="text-center text-xs md:text-md text-gray py-7">
      <p className="mb-1">❤️ {USER.name}</p>  
    </footer>
  );
};

export default AppFooter;
