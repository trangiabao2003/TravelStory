import React from 'react';
import { FaMicrophone, FaSearch, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={styles.header}>
      <Logo />
      <SearchBar />
      <div style={styles.rightSection}>
        <img 
          src="https://via.placeholder.com/40" 
          alt="User Avatar" 
          style={styles.avatar} 
        />
        <FaBars style={styles.menuIcon} />
      </div>
    </header>
  );
};

const Logo = () => (
  <h1 style={styles.logo}>
    <span style={{ color: '#00C4B4' }}>Travel</span> Story
  </h1>
);

const SearchBar = () => (
  <div style={styles.searchBar}>
    <input type="text" placeholder="Japan" style={styles.searchInput} />
    <FaMicrophone style={{ ...styles.icon, right: 30 }} />
    <FaSearch style={styles.icon} />
  </div>
);

export default Header;

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  searchBar: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '20px',
    border: '1px solid #ccc',
    paddingLeft: '10px',
    width: '300px',
  },
  searchInput: {
    flex: 1,
    padding: '10px 40px 10px 10px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: '10px',
    color: '#00C4B4',
    fontSize: '18px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  menuIcon: {
    fontSize: '24px',
    cursor: 'pointer',
    color: '#333',
  },
};
