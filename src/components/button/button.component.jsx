import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "./button.styles";

const getButton = (buttonType = "base") => {
    return {
        base: BaseButton,
        google: GoogleSignInButton,
        inverted: InvertedButton,
    }[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
