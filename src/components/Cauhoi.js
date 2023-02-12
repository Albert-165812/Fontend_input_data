import React from "react";

const Cauhoi = () => {
  return (
    <div className="row mr-16">
      <header className="title">Câu hỏi</header>
      <span className="mr-x-8"></span>
      <div className="col">
        <span>
          <select name="cauhoi" id="cauhoi">
            <option value="Tìm tiếng có âm ">Tìm tiếng có âm:__</option>
            <option value="Tìm tiếng có thanh ">Tìm tiếng có thanh:__</option>
            <option value="Tiếng nào có âm ">Tiếng nào có âm:__</option>
            <option value="Tiếng nào có thanh ">Tiếng nào có thanh:__</option>
          </select>
        </span>
      </div>
    </div>
  );  
};

export default Cauhoi;
