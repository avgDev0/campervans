export const transformRentalsForUI = (rentals) =>
  rentals.reduce((acc, rental) => {
    // Extracting necessary UI data
    const {
      attributes: {
        primary_image_url: imageSrc,
        display_vehicle_type: type,
        location: { city, state },
        name,
        price_per_day: cost,
        score,
        reviews_num: reviews,
      },
    } = rental;

    const location = `${city}, ${state}`;

    acc.push({
      imageSrc,
      type,
      location,
      name,
      cost: cost / 100,
      score,
      reviews,
    });

    return acc;
  }, []);
