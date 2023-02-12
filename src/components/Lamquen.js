/* eslint-disable array-callback-return */
import React, { useState } from "react";
function Lamquen() {
  const [count, setCount] = useState(1);
  const [list] = useState([0]);

  return (
    <div className="row mr-16">
      <header className="title">Làm quen</header>
      <div className="col">
        <ul>
          {list.map((index) => {
            return (
              <li className={"item__LQ"} key={index}>
                <span className="mr-x-8">{index}</span>
                <input type="text" placeholder="Nhập từ: " />
                <input type="text" placeholder="Nhập link ảnh: " />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col">
        <button
          onClick={() => {
            setCount(count + 1);
            list.push(count);
          }}>
          Thêm nội dung
        </button>
      </div>
    </div>
  );
}

export default Lamquen;
