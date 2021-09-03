const chngUsername = (val) => {
  return {
    type: "CHNG_USERNAME",
    payload: val,
  };
};

const chngPassword = (val) => {
  return {
    type: "CHNG_PASSWORD",
    payload: val, 
  };
};

export { chngUsername,chngPassword }