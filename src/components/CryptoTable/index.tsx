import React from 'react';
import styled from 'styled-components';

interface CryptoTableProps {
  data: any;
}

const StyledCryptoTable = styled.table`
  background: #fff;
  border-radius: 5px;
  margin: auto;
  font-size: 14px;
  width: 100%;
  transform: translateZ(0px);
`;

const StyledTd = styled.td`
  border-bottom: 1px solid #eff2f5;
  padding: 10px;
  background-color: #fff;
  font-weight: 500;
  white-space: nowrap;
`;

const StyledCoin = styled.div`
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
    border-radius: 12px;
  }
`;

const StyledTh = styled.th`
  text-align: left;
`;

export const CryptoTable = ({ data }: CryptoTableProps): JSX.Element => {
  console.log('TOM DATA', data);
  return (
    <StyledCryptoTable>
      <thead>
        <tr>
          <StyledTh></StyledTh>
          <StyledTh>
            <p>Name</p>
          </StyledTh>
          <StyledTh>
            <p>Price</p>
          </StyledTh>
          <StyledTh>
            <p>24h%</p>
          </StyledTh>
          <StyledTh>
            <p>48h %</p>
          </StyledTh>
          <StyledTh>
            <p>Market Cap</p>
          </StyledTh>
          <StyledTh>
            <p>Volume (24h)</p>
          </StyledTh>
          <StyledTh>
            <p>Circulating Supply (24h)</p>
          </StyledTh>
        </tr>
      </thead>
      <tbody>
        <tr>
          <StyledTd>
            <span>STAR ICON</span>
          </StyledTd>
          <StyledTd>1</StyledTd>
          <StyledTd>
            <StyledCoin>
              <img
                className="coin-logo"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                loading="lazy"
                alt="BTC logo"
              ></img>
              <div>
                <p font-weight="semibold" color="text" font-size="1">
                  Bitcoin
                </p>
              </div>
              <div className="sc-1teo54s-2 fZIJcI">
                <p
                  color="text3"
                  className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                  font-size="1"
                >
                  BTC
                </p>
              </div>
            </StyledCoin>
          </StyledTd>
          <StyledTd>$70,379.15</StyledTd>
          <StyledTd>1.18%</StyledTd>
          <StyledTd>6.68%</StyledTd>
          <StyledTd>$1,331,460,839,398</StyledTd>
          <StyledTd>$29,118,389,263</StyledTd>
        </tr>
        <tr>
          <StyledTd>
            <span>STAR ICON</span>
          </StyledTd>
          <StyledTd>1</StyledTd>
          <StyledTd>
            <StyledCoin>
              <img
                className="coin-logo"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                loading="lazy"
                alt="ETH logo"
              />
              <div>
                <p font-weight="semibold" color="text" font-size="1">
                  Etherium
                </p>
              </div>
              <div className="sc-1teo54s-2 fZIJcI">
                <p
                  color="text3"
                  className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                  font-size="1"
                >
                  BTC
                </p>
              </div>
            </StyledCoin>
          </StyledTd>
          <StyledTd>$70,379.15</StyledTd>
          <StyledTd>1.18%</StyledTd>
          <StyledTd>6.68%</StyledTd>
          <StyledTd>$1,331,460,839,398</StyledTd>
          <StyledTd>$29,118,389,263</StyledTd>
        </tr>
        <tr>
          <StyledTd>
            <span>STAR ICON</span>
          </StyledTd>
          <StyledTd>1</StyledTd>
          <StyledTd>
            <StyledCoin>
              <img
                className="coin-logo"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                loading="lazy"
                alt="BNB logo"
              />
              <div>
                <p font-weight="semibold" color="text" font-size="1">
                  Binance Coin
                </p>
              </div>
              <div className="sc-1teo54s-2 fZIJcI">
                <p
                  color="text3"
                  className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                  font-size="1"
                >
                  BTC
                </p>
              </div>
            </StyledCoin>
          </StyledTd>
          <StyledTd>$70,379.15</StyledTd>
          <StyledTd>1.18%</StyledTd>
          <StyledTd>6.68%</StyledTd>
          <StyledTd>$1,331,460,839,398</StyledTd>
          <StyledTd>$29,118,389,263</StyledTd>
        </tr>
        <tr>
          <StyledTd>
            <span>STAR ICON</span>
          </StyledTd>
          <StyledTd>1</StyledTd>
          <StyledTd>
            <StyledCoin>
              <img
                className="coin-logo"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                loading="lazy"
                alt="BTC logo"
              ></img>
              <div>
                <p font-weight="semibold" color="text" font-size="1">
                  Bitcoin
                </p>
              </div>
              <div className="sc-1teo54s-2 fZIJcI">
                <p
                  color="text3"
                  className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                  font-size="1"
                >
                  BTC
                </p>
              </div>
            </StyledCoin>
          </StyledTd>
          <StyledTd>$70,379.15</StyledTd>
          <StyledTd>1.18%</StyledTd>
          <StyledTd>6.68%</StyledTd>
          <StyledTd>$1,331,460,839,398</StyledTd>
          <StyledTd>$29,118,389,263</StyledTd>
        </tr>
      </tbody>
    </StyledCryptoTable>
  );
};
