import './list.css'

const CarList = () => {
    const cars = [
        {
            id: 1,
            brand: "bmw",
            model: "m5",
            price: 250000,
            year: 2023,
        },
        {
            id: 2,
            brand: "audi",
            model: "r8",
            price: 380000,
            year: 2022,
        },
        {
            id: 3,
            brand: "nissan",
            model: "gtr r32 sktline",
            price: 40000,
            year: 2005,
        },
        {
            id: 4,
            brand: "ford",
            model: "ford mustang",
            price: 60000,
            year: 1992,
        },
    ];

    // list soft by car brand
    // cars.sort((a,b) => a.brand.localeCompare(b.brand));

    // list soft by car model
    // cars.sort((a,b) => a.model.localeCompare(b.model));

    // list soft by year
    // cars.sort((a,b) => a.year - b.year);

    // list soft by year reverse
    cars.sort((a, b) => b.year - a.year);

    // list call cars
    const carLists = cars.map((carList) => {
        return (
            <ul
                key={carList.id}
            >
                <li>{carList.brand}</li>
                <li>{carList.model}</li>
                <li>{carList.price}</li>
                <li>{carList.year}</li>
            </ul>
        );
    });

    // filter

    // filter by year
    // const carsFilter = cars.filter(item => item.year <= 2010);

    // filter by price
    const carsFilter = cars.filter((item) => item.price >= 200000);

    const ListCars = carsFilter.map((carList) => {
        return (
            <ul
                key={carList.id}
            >
                <li>{carList.brand}</li>
                <li>{carList.model}</li>
                <li>{carList.price}</li>
                <li>{carList.year}</li>
            </ul>
        );
    });

    return (
        <div>
            {carLists}
            <br />
            <p>Filter List</p>
            {ListCars}
        </div>
    );
};

export default CarList;
