import { Icon } from 'components/Icon';
import {
  SpanLibrary,
  StyledItem,
  StyledLink,
  StyledQuot,
  StyledSpan,
  Subtitle,
  TextLibrary,
  WrapperItem,
  WrapperLibrary,
  WrapperLink,
  WrapperQuot,
  WrapperRound,
} from './MyLibrary.styled';
import books from '../../img/📚.png';

export const MyLibrary = () => {
  return (
    <>
      <WrapperLibrary>
        <Subtitle>Start your workout</Subtitle>
        <ul>
          <StyledItem>
            <WrapperItem>
              <WrapperRound>1</WrapperRound>
              <TextLibrary>
                Create a personal library:
                <SpanLibrary>
                  {' '}
                  add the books you intend to read to it.
                </SpanLibrary>
              </TextLibrary>
            </WrapperItem>
          </StyledItem>
          <StyledItem>
            <WrapperItem>
              <WrapperRound>2</WrapperRound>
              <TextLibrary>
                Create your first workout:{' '}
                <SpanLibrary>
                  define a goal, choose a period, start training.
                </SpanLibrary>
              </TextLibrary>
            </WrapperItem>
          </StyledItem>
        </ul>
        <WrapperLink>
          <StyledLink>My library</StyledLink>
          <Icon name="log-in" stroke="#F9F9F9" width="24px" height="24px" />
        </WrapperLink>
      </WrapperLibrary>
      <WrapperQuot>
        <img src={books} alt="books" width="40px" height="40px"/>
        <StyledQuot>
          "Books are <StyledSpan>windows</StyledSpan> to the world, and reading is a journey into the
          unknown."
        </StyledQuot>
      </WrapperQuot>
    </>
  );
};
