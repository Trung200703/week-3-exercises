const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAll();
    res.json(tours);
};

const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;
  if (!name || !info || !image || !price || !location) {
    return res.status(400).json({ message: "All tour fields are required",
    });
  }

  const tour = Tour.addOne(
    name,
    info,
    image,
    price,
    location
  );

  res.status(201).json(tour);
};

const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.tourId);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};

const updateTour = (req, res) => {
  const tour = Tour.update(
    req.params.tourId,
    req.body
  );

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};

const deleteTour = (req, res) => {
  const deleted = Tour.deleteOne(req.params.tourId);

  if (!deleted) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.status(204).send();
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};