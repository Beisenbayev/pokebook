import React from "react";
import classNames from "classnames";
import s from './Button.module.css';

interface Props {
   title: string,
   handleOnClick: () => void,
   isDisabled?: boolean
};

const Button: React.FC<Props> = (props): JSX.Element => {
   return (
      <div className={classNames(s.content, {
         [s.isDisabled]: props.isDisabled
      })}
         onClick={() => props.handleOnClick()}>
         {props.title}
      </div>
   );
}


export default Button;