import { Icon } from 'components/Icon';
import logo from '../../img/Logo1x.webp';
import { StyledImgForm, WrapperIconForm } from './LogoForm.styled';

export const LogoForm = () => {
  return (
    <>
      <WrapperIconForm>
        <Icon name="Logo" width="42px" height="17px" fill="#F9F9F9" />
      </WrapperIconForm>
      <StyledImgForm src={logo} alt="logo" />
    </>
  );
};