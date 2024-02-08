import { useState } from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router';
import Search from './Search';

const Navigation = ({ allPlayers, setSearchedPlayers }) => {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called!');
    console.log('PlayerName afterSubmit', playerName);
    searchPlayer(playerName);
    clearSearchInput();
  }

  function searchPlayer() {
    if (!Array.isArray(allPlayers) || allPlayers.length === 0) {
      console.log('No players available');
      return;
    }
    
    const players = allPlayers.filter(player => {
      return player.name.toLowerCase() === playerName.toLowerCase();
    });
    console.log(players);
    setSearchedPlayers(players);
    navigate(`/search`);
  }

  function clearSearchInput() {
    setPlayerName('');
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="left">
        <Container>
          <Nav className="me-auto">
            <LinkContainer to='/'>
               <Nav.Link >Home</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="new-player-menu">
            <LinkContainer to='/newPlayer'>
              <Nav.Link>Add New Player</Nav.Link>
            </LinkContainer>
          </Nav>

          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              id='search-input'
              onChange={(e) => {
                console.log('playername',e.target.value);
                setPlayerName(e.target.value)}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
              value={playerName}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
