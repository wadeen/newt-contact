import React, { useState } from "react";

export default function Home() {
  const [inputName, setInputName] = useState("");

  const changeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  return (
    <form method="post" action={process.env.NEWT_FORM_ENDPOINT}>
      <input type="text" name="userName" value={inputName} onChange={changeInputName} />
      <button type="submit">送信</button>
    </form>
  );
}
