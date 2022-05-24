import Fade from 'react-reveal/Fade';
import DATA from '../../data/user.json';
import AppContainer from '../atomics/AppContainer';
import AppButton from '../atomics/AppButton';

const AppHero = () => (
  <header>
    <AppContainer>
      <Fade duration={2000}>
        <div className="h-screen flex flex-col justify-center pt-16 items-center text-center lg:items-start lg:text-left">
          <span className="text-xs md:text-sm text-black flex items-center"/>
          <h1 className="text-5xl lg:text-8xl font-bold text-black">
            {DATA.name}
          </h1>
          <h2 className="text-xl lg:text-4xl font-bold text-primary mt-2">
            [{DATA.status}]
          </h2>
          <p className="text-xs lg:text-base text-gray max-w-md tracking-widest mt-2 lg:mt-3 md:ml-1">
            {DATA.description}
          </p>
          <div className="together">
          <img className="Jorge_profile" src="services/Grabacion-avatar-Jorge.gif" alt="Jorge_Del_Castillo" />
          <AppButton title="Get in touch" href="/contact" />
          
</div>
        </div>
      </Fade>
    </AppContainer>
  </header>
);

export default AppHero;
