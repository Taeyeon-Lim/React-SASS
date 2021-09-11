import React from "react";
import classNames from 'classnames';
import './Button.scss';

// size : medium(default), large, small
// color : blue(default), lime, green
function Button({ children, size, color, outline, fullWidth }) {
    return (
        <button className={classNames('Button', size, color, {
            outline,
            fullWidth
        })}>{children}</button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;