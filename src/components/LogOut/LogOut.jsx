import { useDispatch } from 'react-redux';
import { ButtonLogOut } from './LogOut.styled';
import { logOut } from '../../redux/auth/operations';

export const LogOut = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <ButtonLogOut type="button" onClick={handleClick}>
        LogOut
      </ButtonLogOut>
    </>
  );
};
