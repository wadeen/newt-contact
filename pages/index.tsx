import React, { useState } from "react";
import style from "../styles/Home.module.css";

export default function Home() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputContents, setInputContents] = useState("");

  return (
    <form method="post" action={process.env.NEWT_FORM_ENDPOINT} className={style.container}>
      <dl className={style.list}>
        <div className={style.listRow}>
          <dt className={style.term}>名前：</dt>
          <dd className={style.desc}>
            <input type="text" name="name" required onChange={(e) => setInputName(e.target.value)} value={inputName} />
          </dd>
        </div>
        <div className={style.listRow}>
          <dt className={style.term}>メールアドレス：</dt>
          <dd className={style.desc}>
            <input type="email" name="email" onChange={(e) => setInputEmail(e.target.value)} value={inputEmail} />
          </dd>
        </div>
        <div className={style.listRow}>
          <dt className={style.term}>内容：</dt>
          <dd className={style.desc}>
            <textarea name="body" onChange={(e) => setInputContents(e.target.value)}>
              {inputContents}
            </textarea>
          </dd>
        </div>
      </dl>
      <button type="submit" className={style.submitBtn}>
        送信する
      </button>
    </form>
  );
}
