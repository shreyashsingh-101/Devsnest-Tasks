const updatePlace = (place) => {
  return {
    type: "place",
    payload: place,
  };
};

const updateData = (place) => {
  return (dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=c119dcb06f8048098a4193020212209&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "data",
          payload: data,
        });
      });
  };
};

export { updateData, updatePlace };
