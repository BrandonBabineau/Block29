import { useState, useEffect } from 'react';

const PlayerCard = ({ player, onPlayerClick }) => (
  <div className="player-card" key={player.id}> 
    <div className="player-div"> 
      <img className='player-image' src={player.imageUrl} alt={player.name} onClick={() => onPlayerClick(player.id)} />
    </div>
    <div className="player-info"> 
      <h4>{player.name}</h4>
      <div>
        <strong>Breed: </strong>
        {player.breed}
      </div>
      <div>
        <strong>Status: </strong>
        {player.status}
      </div>
    </div>
  </div>
);

const Search = ({ searchedPlayers, navigate }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(searchedPlayers) || searchedPlayers.length === 0) {
    return <div>Sorry, no players available.</div>;
  }

  return (
    <div className="container">
      {searchedPlayers.map(player => (
        <PlayerCard key={player.id} player={player} onPlayerClick={id => navigate(`/players/${id}`)} />
      ))}
    </div>
  );
};

export default Search;