import { Navigation } from '../Navigation/navigation';
import { UserMenu } from '../UserMenu/userMenu';
import { AuthNav } from '../AuthNav/authNav';
import { useAuth } from 'hooks';
import css from '../AppBar/appBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ?
        <UserMenu />
         : 
        <AuthNav />
       } 
    </header>
  );
};
