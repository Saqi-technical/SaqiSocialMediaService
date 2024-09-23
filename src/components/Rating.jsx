import React, { memo } from "react";

// eslint-disable-next-line react/display-name
const Rating = memo(({ rating, setRating }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className="start"
            style={{
              cursor: "pointer",
              color: rating >= star ? "#E71C4F" : "grey",
              fontSize: `25px`,
            }}
            onClick={() => {
              setRating(star);
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
});

export default Rating;
