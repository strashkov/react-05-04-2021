import React from "react";
import ReactDOM from "react-dom";

let messages = ["Привет", "Как дела?"];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
  return props.messages.map((message) => <MessageComponent text={message} />);
};

// вариант 1

function handleClick() {
  messages.push("Нормально");
  ReactDOM.render(
    <div>
      <MessageField messages={messages} />
      <button onClick={handleClick}>Отправить сообщение</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div>
    <MessageField messages={messages} />
    <button onClick={handleClick}>Отправить сообщение</button>
  </div>,
  document.getElementById("root")
);

// вариант 2

// const button = document.getElementById("btn");
// button.addEventListener("click", function () {
//   messages.push("Нормально");
//   ReactDOM.render(
//     <div>
//       <MessageField messages={messages} />
//     </div>,
//     document.getElementById("root")
//   );
// });

// ReactDOM.render(
//   <div>
//     <MessageField messages={messages} />
//   </div>,
//   document.getElementById("root")
// );
