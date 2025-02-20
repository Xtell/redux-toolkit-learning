import ListIcon from '../../assets/icons/entypo-list.svg?react';
import styles from './AllTasks.module.css'
export const AllTasks = () => {

  console.log(ListIcon)
  return (
    <button className={styles.root}>
      <span className={styles.icon}>
        <ListIcon/>
      </span>
      Все задачи
    </button>
  )

}