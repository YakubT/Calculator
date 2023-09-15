import './App.module.css';
import styles from './App.module.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [num, changeNum] = useState("0");
  const [prev, changePrev] = useState("0");
  const [op, changeOp] = useState("+");

  function operation(e) {
    let text = e.target.innerText;
    if (text === 'C') {
      changeNum(0);
      changePrev(0);
    } else {
      if (text === '←') {
        let str = num.toString(10);
        if (str.length === 1) {
          changeNum(0);
        } else {
        changeNum(str.substring(0,str.length-1));
        }
      } else {
        if (Number.isInteger(parseInt(text))) {
          if (num == '0') {
            changeNum(text);
          } else {
           changeNum(num+text);
          }
        } else {
          let res;
          if (op == '+') {
            res = (parseFloat(prev)+parseFloat(num)).toString(10);
          }

          if (op == '−') {
            res = (parseFloat(prev)-parseFloat(num)).toString(10);
          }

          if (op.includes('÷')) {
            res = (Math.round((prev)/parseFloat(num)*1000)/1000).toString(10);
          }

          if (op == '×') {
            res = (parseFloat(prev)*parseFloat(num)).toString(10);
          }

          if (op == '=') {
            res = num;
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
      <div id="wrapper" on onClick={(e)=>operation(e)}>
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
        <button class={styles.red}>=</button>
      </div>
    </main>
  );
}

export default App;
