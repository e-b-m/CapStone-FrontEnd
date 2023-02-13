const Hero = (() => {

    const bubbles = [
        {
            s: 0.8,
            x: 2704,
            y: 334,
          },
          {
            s: 0.6,
            x: 2271,
            y: 356,
          },
          {
            s: 0.6,
            x: 795,
            y: 226,
          },
          {
            s: 0.6,
            x: 276,
            y: 256,
          },
          {
            s: 0.6,
            x: 1210,
            y: 365,
          },
          {
            s: 0.6,
            x: 444,
            y: 193,
          },
          {
            s: 0.6,
            x: 2545,
            y: 387,
          },
          {
            s: 0.8,
            x: 1303,
            y: 193,
          },
          {
            s: 0.8,
            x: 907,
            y: 88,
          },
          {
            s: 0.8,
            x: 633,
            y: 320,
          },
          {
            s: 0.8,
            x: 323,
            y: 60,
          },
          {
            s: 0.8,
            x: 129,
            y: 357,
          },
          {
            s: 0.8,
            x: 1440,
            y: 342,
          },
          {
            s: 0.8,
            x: 1929,
            y: 293,
          },
          {
            s: 0.8,
            x: 2135,
            y: 198,
          },
          {
            s: 0.8,
            x: 2276,
            y: 82,
          },
          {
            s: 0.8,
            x: 2654,
            y: 182,
          },
          {
            s: 0.8,
            x: 2783,
            y: 60,
          },
          {
            s: 1.0,
            x: 1519,
            y: 118,
          },
          {
            s: 1.0,
            x: 1071,
            y: 233,
          },
          {
            s: 1.0,
            x: 1773,
            y: 148,
          },
          {
            s: 1.0,
            x: 2098,
            y: 385,
          },
          {
            s: 1.0,
            x: 2423,
            y: 244,
          },
          {
            s: 1.0,
            x: 901,
            y: 385,
          },
          {
            s: 1.0,
            x: 624,
            y: 111,
          },
          {
            s: 1.0,
            x: 75,
            y: 103,
          },
          {
            s: 1.0,
            x: 413,
            y: 367,
          },
          {
            s: 1.0,
            x: 2895,
            y: 271,
          },
          {
            s: 1.0,
            x: 1990,
            y: 75,
          },
        ];
        const backgroundPositions = [];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
              backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
            }
          }

    return(
        <div className="bubbles-wrapper">
            <div className="bubbles">
            {bubbles.map((bubble, index) => (
          <div
            className="bubble"
            id={`bubble-${index}`}
            key={`${bubble.x} ${bubble.y}`}
            style={{
              backgroundPosition: backgroundPositions[index],
              transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
            }}
          />
        ))}
                {/* <div className="bubble pic-1"/>
                <div className="bubble pic-2"/>
                <div className="bubble pic-3"/>
                <div className="bubble pic-4"/>
                <div className="bubble pic-5"/>
                <div className="bubble pic-6"/>
                <div className="bubble pic-7"/>
                <div className="bubble pic-8"/>
                <div className="bubble pic-9"/> */}
            </div>
        </div>
    )
})
export default Hero;