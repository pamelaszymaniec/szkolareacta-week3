function MenuLink({to, children, isActive}) {

    const activeStyles = {
        textDecoration: 'underline',
        color: '#e74c3c'
    };

    return (
    <li>
        <a style={isActive ? activeStyles : null} className="MenuLink" href={to}>{children}</a>
    </li>
    )
}

export default MenuLink;