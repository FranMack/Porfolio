import { ErrorMessage, useField } from 'formik';
import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeHolder?: string;
}

export const MyTextInput = ({label, ...props}:Props) => {

    const [field, meta] = useField(props);
  return (
   <>
     <label className="ml-[1%] text-[1.15rem] font-medium">{label}</label>
      <input
      {...props}
      {...field}
        type="text"
        className={`w-[100%] h-[6.5vh] border  rounded-lg text-black bg-secondary  ${
          meta.error && meta.touched
            ? "mb-[0] border-primary border-[4px]"
            : "mb-[2%] border-blue-400"
        } `}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className='text-primary text-[0.9rem]'
      />
   </>
  )
}
