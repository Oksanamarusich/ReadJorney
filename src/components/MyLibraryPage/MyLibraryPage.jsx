import { Link } from 'react-router-dom';
import { Subtitle } from './MyLibraryPage.styled';

export const MyLibraryPage = () => {
  return (
    <div>
      <div>
        <Subtitle>Start your workout</Subtitle>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <Link>My library</Link>
      </div>
    </div>
  );
};
