/* eslint-disable array-callback-return */
import React, { useState } from "react";
function Danhvan() {
  const [count, setCount] = useState(1);
  const [list] = useState([0]);

  return (
    <div className="row mr-16">
      <header className="title">Đánh vần</header>
      <div className="col">
        <ul>
          {list.map((index) => {
            return (
              <li className={"item__DV"} key={index}>
                <span className="mr-x-8">{index}</span>
                <input type="text" placeholder="Nhập từ: " />
                <input
                  type="text"
                  placeholder="Nhập cách đánh vần từ đã nhập: "
                />
                <input
                  type="text"
                  placeholder="Nhập hình ảnh: "
                />
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
      <span>Lưu</span>
      <input type="checkbox" id="checkBox_DV"/>
    </div>
  );
}

export default Danhvan;
