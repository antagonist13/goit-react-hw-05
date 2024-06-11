import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css'
export default function NotFoundPage() {
  
  return  <div>
      <p>
        Sorry, page not found! Please go to <Link to="/" className={css.goHome}>home page</Link>!
      </p>
    </div>
}