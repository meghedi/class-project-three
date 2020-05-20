import React from "react";

const styles = {
  buttonStyle: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  mediaStyle: {
    position: "relative",
  },
};
function Media({restaurant, cuisines,rating, image, link, handleSave}) {
  return (
    <div className="media">
      <img className="mr-3" src={image} alt={restaurant} />
      <div className="media-body">
        <h5 className="mt-0"><a href={link} target="_blank">{restaurant}</a></h5>
      </div>
      <button
        type="button"
        id="btnSave"
        style={styles.buttonStyle}
        className="btn btn-default"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export default Media;
