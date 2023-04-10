import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* props.children is the content in App.js that is wrapped by the Layout tag */}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;