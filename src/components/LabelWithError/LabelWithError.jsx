import { useField } from 'formik';
import {
  StyledIconError,
  StyledIconSuccess,
  StyledLabel,
  SuccessMessage,
} from './LabelWithError.styled';
import { Icon } from 'components/Icon';

export const LabelWithError = ({ name, children }) => {
  const [, meta] = useField(name);
  const isSuccess = meta.touched && !meta.error;
  const isError = meta.touched && meta.error;
  return (
    <StyledLabel className={isError ? 'error' : isSuccess ? 'success' : ''}>
      {children}
      {isError && (
        <StyledIconError>
          <Icon name="pajamas_error" stroke="#e90516" />
        </StyledIconError>
      )}
      {isSuccess && (
        <>
          <StyledIconSuccess>
            <Icon name="gg_check-o" stroke="#30b94d" />
          </StyledIconSuccess>
          <SuccessMessage>{name} is secure</SuccessMessage>
        </>
      )}
    </StyledLabel>
  );
};
