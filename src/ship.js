function Ship(length) {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    if (hits < length) {
      hits++;
    }
    if (hits == length) {
      sunk = true;
    }
  }

  const isSunk = () => {
    return sunk;
  }

  const getLength = () => {
    return length;
  }

  return {getLength, hit, isSunk}
}

export default Ship;