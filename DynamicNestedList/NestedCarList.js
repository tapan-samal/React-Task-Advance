import React from "react";

const CarNestedList = () => {
  const cars = [
    {
      brandName: "BMW",
      models: [
        {
          model: "BMW i3",
          colors: [{ color: "Black", lunch: [{ year: 2011 }] }],
        },
        {
          model: "BMW i5",
          colors: [{ color: "White" }],
        },
      ],
    },
    {
      brandName: "Audi",
      models: [
        {
          model: "Audi Q5",
          colors: [{ color: "Black", lunch: [{ year: 2011 }] }],
        },
        {
          model: "Audi Q7",
        },
      ],
    },
    {
      brandName: "Honda",
    },
  ];

  return (
    <>
      <h2>Dynamic Nested List:</h2>
      {cars.map((car, index) => (
        <div key={index}>
          <h3>Brand: {car.brandName}</h3>
          {car.models && (
            <ul>
              {car.models.map((model, modelIndex) => (
                <ul key={modelIndex}>
                  <li>
                    Model: {model.model}
                    {model.colors && (
                      <ul>
                        {model.colors.map((color, colorIndex) => (
                          <li key={colorIndex}>
                            Color: {color.color}
                            {color.lunch && (
                              <ul>
                                {color.lunch.map((year, yearIndex) => (
                                  <li key={yearIndex}>
                                    Lunching Year: {year.year}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default CarNestedList;
