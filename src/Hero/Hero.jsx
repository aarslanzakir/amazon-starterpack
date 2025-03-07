import React from 'react';
import css from './Hero.module.css';
import HeroImg  from '../../src/assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs';
import {motion} from 'framer-motion';

const Hero = () => {
  const transition = {duraion:3 , type:"spring"}
  return (
   <div className={css.container}>
    {/* left side */} 
     <div className={css.h_sides}>
    <span className={css.text1}>Skin Protection cream</span>
    <div className={css.text2}>
    <span>Trendy COllection</span>
    <span>{""}
      Speedily say has suitable disposal and boy.Exercise joy man</span>
    </div>
     </div>
     {/*Middle side hero image */}
     <div className={css.wrapper}>
      
      {/*Blue Circle */}
      
      <motion.div 
      initial={{bottom:"-2rem"}}
      whileInView={{bottom:"0rem"}}
      transition={transition}
      className={css.blueCircle}></motion.div>
      <motion.img
      initial={{bottom:"2rem"}}
      whileInView={{bottom:"0rem"}}
      transition={transition}
      src={HeroImg}  alt="" width={600}/>
      <motion.div 
      transition={transition}
      initial={{right:"4%"}}
      whileInView={{right:"2%"}
    }
      
      className={css.cart2}>
        <RiShoppingBagFill  />
        <div className={css.signup}>
          <span>Best Signup Offers</span>
          <div>
            <BsArrowRight  />
          </div>
        </div>
      </motion.div>
     </div>
     {/*Right Sides */}
     <div className={css.h_sides}>
    <div className={css.traffic}>
    <span>1.5m</span>
    <span>Monthly Traffic</span>
    </div>
    <div className={css.customers}>
      <span>100k</span>
      <span>Happy Customers</span>
    </div>
     </div>
   </div>
  )
}

export default Hero ;