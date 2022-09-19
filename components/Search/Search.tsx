import { SearchProps } from "./Search.props";
import styles from './Search.module.sass';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import GlassIcon from './IconSearch.svg'
import { useRouter } from "next/router";


export const Search = ({children, className, ...props}: SearchProps) => {

  const [search, setSearch] = useState<string>('')
  const router = useRouter()


  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q:search
      }
    })
  }

  const handleKeyDown = (e:KeyboardEvent) => {
    if(e.key === 'Enter') {
      goToSearch()
    }
  }

  return (
    <div className={cn(className, styles.search)}  {...props}>
      <Input
      className={styles.input}
        placeholder="Search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button 
      className={styles.button} 
      appearance="primary"
      onClick={goToSearch}
      
      >
     <GlassIcon />
        
      </Button>
    </div>
  );
};