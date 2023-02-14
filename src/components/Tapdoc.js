import React, { useState } from "react";

const Tapdoc = () => {
  const [count, setCount] = useState(1);
  const [list] = useState([0]);
  return (
    <div className="row mr-16 item_TD">
      <header className="title">Kể chuyện</header>
      <span className="mr-x-8"></span>
      <input type="text" placeholder="Nhập tên bài: " />
      <ul className="List_kechuyen">
        {list.map((index) => {
          return (
            <li key={index}>
              <input type="text" placeholder="Nhập câu chuyện" />
              <input type="text" placeholder="nhập link hình" />
            </li>
          );
        })}
      </ul>
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
      <input type="checkbox" id="checkBox_KC" />
    </div>
  );
};

export default Tapdoc;
