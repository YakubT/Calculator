import './App.module.css';
import styles from './App.module.css';

function App() {
  return (
    <main>
      <div class={styles.panel}>
        
      </div>
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
    </main>
  );
}

export default App;
