const AuthSocialButton = ({
    icon: Icon,
    onClick
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
        >
            <Icon />
        </button>
    )
}

export default AuthSocialButton;