let TourArray = [];
let nextId = 1;

function addOne(name, info, image, price, location) {
    if (!name || !info || !image || !price || !location) {
        return false;
    }

const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
    location,
};

TourArray.push(newTour);
return newTour;
};

function getAll() {
    return TourArray;
}


const findById = (id) => {
    return TourArray.find((tour) => tour.id === Number(id)) || null;
};


const update = (id, data) => {
  const tour = TourArray.find(
    (tour) => tour.id === Number(id)
  );

  if (!tour) {
    return null;
  }

  Object.assign(tour, data);

  return tour;
};

const deleteOne = (id) => {
  const index = TourArray.findIndex(
    (tour) => tour.id === Number(id)
  );

  if (index === -1) {
    return false;
  }

  TourArray.splice(index, 1);
  return true;
};

module.exports = {
  addOne,
  getAll,
  findById,
  update,
  deleteOne,
};