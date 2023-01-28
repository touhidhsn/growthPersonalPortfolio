import React from "react";

const Button = (props: any) => {
  return (
    <button className='px-4 py-2 ml-8 rounded bg-transparent duration-300 outline-yellow-400 outline hover:bg-yellow-300 hover:text-gray-700'>
      {props.children}
    </button>
  );
};
export default Button;
