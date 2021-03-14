import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 75px;
  z-index: 1;
  background-color: #222;
  overflow-x: hidden;
  padding-top: 10px;
  left: 0;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path: "/dashboard",
          name: "Home",
          css: "fa fa-fw fa-home",
          key: 1,
        },
        {
          path: "/community",
          name: "Community",
          css: "fa fa-fw fa-clock",
          key: 2,
        },
        {
          path: "/userDetail",
          name: "NoMatch",
          css: "fas fa-hashtag",
          key: 3,
        },
      ],
    };
  }

  onItemClick = (path) => {
    this.setState({ activePath: path });
  };

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {items.map((item) => {
          return (
            <NavItem
              path={item.path}
              name={item.name}
              css={item.css}
              onItemClick={this.onItemClick}
              active={item.path === activePath}
              key={item.key}
            />
          );
        })}
      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px;
  text-align: center;
  margin-bottom: 0;
  a {
    font-size: 2.7em;
    color: ${(props) => (props.active ? "white" : "#9FFFCB")};
    :hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}

const NavIcon = styled.div``;

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
