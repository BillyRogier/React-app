import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TokenInfo = () => {
  const { id } = useParams();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setToken(response.data);
      } catch (error) {
        console.error('Error fetching token info:', error);
      }
    };

    fetchTokenInfo();
  }, [id]);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="grid token_info-container">
        <div className="grid token_info-card">
          <h1>{token.name}</h1>
          <img
            src={token.image.large}
            alt={token.name}
            className="token_info-img"
          />
          <p>Symbol: {token.symbol.toUpperCase()}</p>
          <p>Current Price: ${token.market_data.current_price.usd}</p>
          <p>Market Cap: ${token.market_data.market_cap.usd}</p>
        </div>
        <div
          className="token_info-description"
          dangerouslySetInnerHTML={{ __html: token.description.en }}
        />
      </div>
    </main>
  );
};

export default TokenInfo;
