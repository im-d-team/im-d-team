import { Link } from 'gatsby';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';

import { toggleSidebar } from '@/store';
import { MenuProps } from '@/components/Menu';

import './style.css';

interface HeaderProps extends MenuProps {
  dispatch?: Dispatch<any>;
}

export const Header = ({ dispatch }: HeaderProps) => (
  <header className="imd-header">
    <BsReverseLayoutTextSidebarReverse
      className="imd-header__sidebar-image"
      onClick={() => dispatch && dispatch(toggleSidebar())}
    />

    <h1 className="imd-header__title">Im-D Dev Blog</h1>

    <Link to={'/'}>
      <img
        className="imd-header__logo-image"
        src="https://avatars1.githubusercontent.com/u/45911353?s=200&v=4"
        alt="imd logo"
      />
    </Link>
  </header>
);

export default connect()(Header);