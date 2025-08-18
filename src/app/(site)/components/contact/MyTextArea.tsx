import { ErrorMessage, useField } from "formik";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeHolder?: string;
}

export const MyTextArea = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="ml-[1%] text-[1.15rem] font-medium">{label}</label>
      <textarea
        {...props}
        {...field}
        className={`w-[100%] h-[20vh] border  rounded-lg text-black bg-secondary  ${
          meta.error && meta.touched
            ? "mb-[0] border-primary border-[4px]"
            : "mb-[2%] border-blue-400"
        } `}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="text-primary text-[0.9rem]"
      />
    </>
  );
};
