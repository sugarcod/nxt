
import styles from "./Menu.module.sass";
import cn from 'classnames';
import { useContext } from "react";
import { AppContext } from "../../context/app.context";


export const Menu = () => {

  const {menu, firstCategory, setMenu} = useContext(AppContext)

  return (
    <div>
        {menu.map(elem => (<div key={elem._id.secondCategory}>{elem._id.secondCategory}</div>))}
    </div>
  )
};
