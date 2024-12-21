import React from 'react';


function Button(props) {
    const { children, style, onClick } = props;

    return (
        <button 
            className='custom-button ' // Add your CSS class here
            type='button' 
            style={style ? style : { background: '', color: '#fff' }} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
