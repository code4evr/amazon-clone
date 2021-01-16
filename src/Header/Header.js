import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon-logo"/>
      <div className="header__search">
        <input className="header__searchInput" type="text"/>
        <SearchIcon className="header__searchIcon" />
        {/* logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option_lineOne">Hello Guest</span>
          <span className="header__option_lineTwo">Signin</span>
        </div>
        <div className="header__option">
          <span className="header__option_lineOne">Returns</span>
          <span className="header__option_lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option_lineOne">Your</span>
          <span className="header__option_lineTwo">Prime</span>
        </div>
        <div className="header__basket">
          <ShoppingBasket />
          <span className="header__option_lineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  )
}

export default Header