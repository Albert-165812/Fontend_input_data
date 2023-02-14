import React, { useState } from 'react'

const Timvan = () => {
    const [count_1, setCount_1] = useState(1);
    const [list_1] = useState([0]);
    const [count, setCount] = useState(1);
    const [list] = useState([0]);
  return (
    <div className="row mr-16 item__TV">
        <header className="title">Ôn tập</header>
        <span className="mr-x-8"></span>
        {/* <div className="col">
            <ul>
                {
                    list_1.map(index=>{
                        return(
                            <li className='row' key={index}>
                            <span>
                            <select name="timvan" id="timvan">
                              <option value="Tìm tiếng có âm ">Tìm tiếng có âm:__</option>
                              <option value="Tìm tiếng có thanh ">Tìm tiếng có thanh:__</option>
                              <option value="Tiếng nào có âm ">Tiếng nào có âm:__</option>
                              <option value="Tiếng nào có thanh ">Tiếng nào có thanh:__</option>
                            </select></span>
                            <span className="mr-x-4"></span>
                            <input type="text" placeholder="Nhập vần hoặc tiếng cần tìm: " />
                            </li>
                        )
                    })
                }
                <li>
                <button
                onClick={() => {
                    setCount_1(count_1 + 1);
                    list_1.push(count_1);
                }}>
                Thên vần cần đọc
                </button>
                </li>
            </ul>
        </div>  */}
        <div className="col">
        <ul>
          {list.map((index) => {
            return (
              <li className={"item__TV"} key={index}>
                <span className="mr-x-8">{index}</span>
                <span>
                    <input type="text" className='mr-x-8' placeholder="Nhập link ảnh: " />
                    <input type="text" placeholder="Nhập tên bài học: " />
                    <input type="text" placeholder="Nhập từ của hình: " />
                </span>
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
      <input type="checkbox" id="checkBox_OT"/>
    </div>
  )
}

export default Timvan