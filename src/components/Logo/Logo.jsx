import { Icon } from "components/Icon"
import logo from "../../img/Logo1x.webp";
import { StyledImg, WrapperIcon } from "./Logo.styled";

export const Logo = () => {


    return (<>
        <WrapperIcon>
            <Icon name="icon" width="42" height="17" fill="#F9F9F9" />
            </WrapperIcon>
        <StyledImg src={logo} alt="logo"/>
    </>)
}
