
import styles from "./Menu.module.sass";
import cn from 'classnames';
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu = () => {

  const {menu, firstCategory, setMenu} = useContext(AppContext)
  const router = useRouter()

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m=>{
      if(m._id.secondCategory == secondCategory){
        m.isOpened = !m.isOpened
      }
      return m;
    }))
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menu => (
          <div key={menu.id}>
            <Link key={`/${menu.route}-menu.id`} href={`/${menu.route}`}>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelACtive]: menu.id == firstCategory
                })}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {menu.id == firstCategory && buildSecondLevel(menu)}
          </div>
        ))} 
      </>
    )
  }

  const buildSecondLevel = (menuMain: FirstLevelMenuItem) => {
    return (
      <div key={menuMain.name}  className={styles.secondBlockContainer}>
        {menu.map(menuItem => {
          if(menuItem.pages.map(page=>page.alias).includes(router.asPath.split('/')[2])){
            menuItem.isOpened = true
          }
          return (
          <div key={menuItem._id.secondCategory}>
            <div className={styles.secondCategory} onClick={()=>openSecondLevel(menuItem._id.secondCategory)}>
            {menuItem._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpen]: menuItem.isOpened
            })}>
              {buildThirdLevel(menuItem.pages, menuMain.route)}
            </div>

            </div>
          );
          })}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
        pages.map((page) => (
          <Link key={`/${route}/${page.alias}`} href={`/${route}/${page.alias}`}>
          <a   className={cn(styles.thirdLevel,{
            [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
          })}>
                {page.category}
          </a>
         </Link>
        ))
    )
  }

  return (
    <div className={styles.menu}>
        {buildFirstLevel()}
    </div>
  )
};
