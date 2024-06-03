import { useEffect, useState } from 'react';

function App() {
  const [loding, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loding ? '' : `(${coins.length})`}</h1>
      {loding ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

// 챌린지
// input창을 만들고
// 내 돈으로 얼마만큼의 비트코인을 살 수 있는지 알아봄
// 아주 간단한 나누기

export default App;
