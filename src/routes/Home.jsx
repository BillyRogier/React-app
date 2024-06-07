import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
            },
          }
        );
        setTokens(response.data);
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <main>
      <h1>Top 10 cryptocurrency</h1>
      <ul className="grid token-container">
        {tokens.map((token) => (
          <li key={token.id}>
            <Link to={`/token/${token.id}`} className="grid token-card">
              <img src={token.image} alt={token.name} width="25" height="25" />
              {token.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
