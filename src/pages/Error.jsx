import styles from '@/styles/error.module.css'

export default function Error() {
  return (
    <div class="App">
      <header class="App-header">
      <div class="wrapper">
        <p class={styles.line__1}>An error occured</p>
        <p class={styles.line__2}>Please return <a href="/">Home</a></p>
      </div>        
      </header>
    </div>
  );
}

