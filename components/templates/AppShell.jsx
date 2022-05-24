import PropTypes from 'prop-types';
import AppContainer from '../atomics/AppContainer';
import AppDecoration from '../atomics/AppDecoration';
import AppHead from '../atomics/AppHead';
import AppNav from '../molecules/AppNav';
import AppSide from '../atomics/AppSide';
import AppCtaSection from '../molecules/AppCtaSection';
import AppHero from '../molecules/AppHero';
import AppFooter from '../atomics/AppFooter';

const AppShell = ({ title, keyword, description, hero, cta, children }) => (
  <>
    <AppHead title={title} description={description} keyword={keyword} />
    <AppNav />
    <AppDecoration />
    <AppSide />
    {hero && <AppHero />}
    <AppContainer>
      {children}
      {cta && <AppCtaSection />}
      <AppFooter />
    </AppContainer>
  </>
);

AppShell.propTypes = {
  title: PropTypes.string,
  keyword: PropTypes.string,
  description: PropTypes.string,
  hero: PropTypes.bool,
  cta: PropTypes.bool,
};

AppShell.defaultProps = {
  title: 'Jorge Del Castillo',
  description:
    'I am passionate about the STARTUP ecosystem and businesses with a high technological base. In ❤️ with digital products.',
  keyword: '',
  hero: false,
  cta: true,
};

export default AppShell;
