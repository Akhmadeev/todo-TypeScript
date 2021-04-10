import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  //   const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //   const changeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      //   setTitle("");
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        type='text'
        id='title'
        placeholder='Введите название дела'
        ref={ref}
        // onChange={changeHander}
        // value={title}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor='title' className='active'>
        Введите название дела
      </label>
    </div>
  );
};
export default TodoForm;
