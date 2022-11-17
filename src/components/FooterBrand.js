import React from 'react'
import codeLogo from '../assets/programming1.png';
import './FooterBrand.css';

const FooterBrand = () => {
  return (
    <>
      <footer> 
        <div className="containerFooter">

            <img alt="icon-code" src={codeLogo} width="24px" height="24px" />
            <span style={{color: 'tomato'}} >developed by <a href='https://github.com/Brachintosh/' target='_blank' rel="noreferrer" style={{color: '#343434'}} >@brachintosh</a></span>

        </div>
    </footer>
    </>
  )
}

export default FooterBrand