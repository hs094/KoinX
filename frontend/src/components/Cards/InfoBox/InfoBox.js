import React from "react";
import "./style.css";

const TrendingCoin = ({ name, symbol, percentage, icon }) => {
    return (
        <li className="trending-coin">
            <div className="coin-info">
                <img src={icon} alt={`${name} icon`} className="coin-icon" />
                <span className="coin-name">
                    {name} <span className="coin-symbol">({symbol})</span>
                </span>
            </div>
            <span className={`coin-percentage ${percentage > 0 ? "positive" : "negative"}`}>
                {percentage > 0 ? `▲ ${percentage}%` : `▼ ${percentage}%`}
            </span>
        </li>
    );
};

const InfoBox = () => {
    const trendingCoins = [
        {
            name: "Ethereum",
            symbol: "ETH",
            percentage: 8.21,
            icon: "./icon/ethereum.svg",
        },
        {
            name: "Bitcoin",
            symbol: "BTC",
            percentage: 5.26,
            icon: "./icon/bitcoin.svg",
        },
        {
            name: "Polygon",
            symbol: "MATIC",
            percentage: 4.32,
            icon: "./icon/polygon.svg",
        },
    ];

    return (
        <section className="realised-profit-loss">
            <header className="header">
                <h2 className="title">Trending Coins (24h)</h2>
                <a href="/view-more" className="view-more">
                    View more
                </a>
            </header>
            <ul className="trending-coins-list">
                {trendingCoins.map((coin) => (
                    <TrendingCoin
                        key={coin.symbol}
                        name={coin.name}
                        symbol={coin.symbol}
                        percentage={coin.percentage}
                        icon={coin.icon}
                    />
                ))}
            </ul>
        </section>
    );
};

export default InfoBox;