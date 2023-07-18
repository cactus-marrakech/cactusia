import { useContext , useEffect } from 'react'
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import cactuses from "../assets/cactusImages/import"
import pots from "../assets/potsImages/import"
import { ControlersContext } from '../Context/ControlersContext';
import { CartContext } from '../Context/CartContext';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {motion} from "framer-motion"
import { CardTravel, Shop } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function MarketCart() {
   const {pot,setPot,cactus,setCactus ,quantity,setQuantity,finalCactus,finalPots}=useContext(ControlersContext);
   const {cart ,currentItem ,setCurrentItem ,setCart}= useContext(CartContext);
   const handelSelect = (key)=>{
      setPot(cart[key].pot)
      setCactus(cart[key].cactus)
      setQuantity(cart[key].quantity)
      setCurrentItem(key)
   }
   const handelAddNew = ()=>{
          let key = cart.length
          let newCart = cart
          newCart.push({pot:0,cactus:0,quantity:1})
          setCart(newCart)
          setPot(cart[key].pot)
          setCactus(cart[key].cactus)
          setQuantity(cart[key].quantity)
          setCurrentItem(key)
   }
   const handleRemove =(key)=>{
        if(cart.length>1){
          let newCart = cart.filter((item,i)=>key!==i)
          setCart(newCart)
          setCurrentItem(0)
        }
   }
   useEffect(() => {
        setPot(cart[currentItem].pot)
        setCactus(cart[currentItem].cactus)
        setQuantity(cart[currentItem].quantity)
   }, [cart])
   useEffect(() => {
        setPot(cart[currentItem].pot)
        setCactus(cart[currentItem].cactus)
        setQuantity(cart[currentItem].quantity)
   }, [currentItem])
   
  return (
    <motion.div initial={{x:-200}} animate={{x:0}}  className='md:h-48 mb-2 flex flex-col items-center justify-center md:justify-center '>
      <div className='xl:pt-12  border overflow-auto px-4 border-red-500 max-w-full md:pt-8 pt-10  rounded-lg flex gap-2 '>
        {
          cart.map((item,key)=>{
            return(
              <div key={key}  className={'flex relative flex-col items-center gap-1 drop-shadow-lg '}>
              <button onClick={()=>handelSelect(key)} className={' w-20 h-20 bg-dark-white duration-100 rounded-lg   flex justify-center items-center flex-col border-2  '+(key==currentItem?" border-green " :"border-[#0001] ")}>
                <div className={(key==currentItem?"scale-[1.25]":"scale-[1.20]")+' duration-150 relative -translate-y-5 w-[50px] flex flex-row justify-center items-center drop-shadow-md'}>
                    <img draggable={false} className={'h-[50px] absolute top-[10px] duration-150 '} src={key==currentItem?finalPots[pot]?.img:finalPots[item?.pot]?.img}></img>
                    <img draggable={false} className='h-[50px] opacity-0' src={key==currentItem?finalPots[pot]?.img:finalPots[item?.pot]?.img}></img>
                    <img draggable={false} className={'w-[50px] absolute top-[-18px] duration-150 '} src={key==currentItem? finalCactus[cactus]?.img: finalCactus[item?.cactus]?.img}></img>
                </div>
                <p className='px-4 rounded-md font-medium text-gray-700 border-green bg-[#0001] '>
                  {key==currentItem?quantity:item.quantity}
                </p>
              </button>
              {
                  key==currentItem && cart.length>1 &&
                  <button onClick={()=>handleRemove(key)} className={'z-[0] hover:bg-dark-white2 duration-100 bg-dark-white border border-gray-400 w-8 h-8 flex justify-center items-center rounded-full p-1'}>
                    <CloseRoundedIcon sx={{color:"#444",fontSize:18}}/>
                  </button>
              }
              </div>
            )
          })
        }
        <div className='w-20 h-20'>
        <button onClick={handelAddNew} className='drop-shadow-lg w-20 h-20 duration-100 border-2 border-[#0001]  hover:bg-dark-white2 bg-dark-white rounded-lg  '>
          <AddShoppingCartIcon className="text-green scale-[150%]" />
        </button>
        </div>
      </div>
    </motion.div>
  )
}

export default MarketCart