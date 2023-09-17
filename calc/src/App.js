import './App.module.css';
import styles from './App.module.css';
import React, { useState } from 'react';

function App() {
  const [num, changeNum] = useState("0");
  const [prev, changePrev] = useState("0");
  const [op, changeOp] = useState("+");

  function operation(e) {
    let text = e.target.innerText;
    if (text === 'C') {
      changeNum("0");
      changePrev("0");
      changeOp("+");
    } else {
      if (text === '←') {
        let str = num.toString(10);
        if (str.length === 1) {
          changeNum("0");
        } else {
          if (str.length > 2 && str.charAt(str.length - 2) == '.') {
            changeNum(str.substring(0, str.length - 2));
          } else {
            changeNum(str.substring(0, str.length - 1));
          }

        }
      } else {
        if (Number.isInteger(parseInt(text)) || (text == '.')) {
          if (num == '0' || op == '=') {
            if (text == '.') {
              changeNum(num + text);
            } else {
              changeNum(text);
            }
            if (op == '=') {
              changeOp("==");
            }
          } else {
            if (!(text == '.' && num.includes('.'))) {
            changeNum(num + text);
            }
          }
        } else {
          let res;
          if (op == '+') {
            res = (parseFloat(prev) + parseFloat(num))
          }

          if (op == '−') {
            res = (parseFloat(prev) - parseFloat(num))
          }

          if (op.includes('÷')) {
            res = (prev) / parseFloat(num)
          }

          if (op == '×') {
            res = parseFloat(prev) * parseFloat(num)
          }

          if (op.includes('=')) {
            res = num;
          } else {
            res = (Math.round(res*1000)/1000).toString(10);
          }
          if (text == '=') {
            changeNum(res);
            changePrev("0");
            changeOp('=');
          } else {
            changePrev(res);
            changeOp(text);
            changeNum("0");
          }


        }
      }
    }
  }
  return (
    <main>
      <div class={styles.panel}>
        {num}
      </div>
      <div id="wrapper" onClick={(e) => operation(e)}>
        <button class={styles.red}>C</button>
        <button class={styles.red}>&larr;</button>
        <button class={styles.red}> &divide;</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class={styles.red}>&times;</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class={styles.red}>&minus;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class={styles.red}>+</button>
        <button>0</button>
        <button>.</button>
        <button class={styles.red}>=</button>
      </div>
    </main>
  );
}

export default App;
