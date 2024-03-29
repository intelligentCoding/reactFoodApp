import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext , useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setIsBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  },0)
  const {items} = cartCtx;
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  useEffect(()=> {
    if(items.length === 0){
      return;
    }
    setIsBtnIsHighlighted(true)
    //after 3 seconds to btnhighlighted to false
   const timer = setTimeout(()=>{
      setIsBtnIsHighlighted(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;