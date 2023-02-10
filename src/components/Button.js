const Button = ({href, type = 'button', onClick, children, ...rest }) => {
    return (
      <a href={href}>
      <button type={type} onClick={onClick} {...rest}>
        {children} 
      </button>
      </a>
    );
  };

  export default Button;