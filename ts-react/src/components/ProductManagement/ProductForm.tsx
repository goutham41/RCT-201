import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import styles from "./style.module.css";

type laptopForm = {
  id: string;
  model: string;
  makeYear: number;
  operatingSystem: string;
  screenHeight: number;
  screenWidth: number;
  price: number;
};

export const ProductForm = () => {
  const [formData, setformData] = useState({});
  const [data, setdata] = useState<laptopForm[]>([]);

  const handleInput = (e: { target: any }) => {

    setformData({
      ...formData,
      [e.target.name]: e.target.value,
      id: uuid(),
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/laptop", formData)
      .then(getData)
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios("http://localhost:8000/laptop")
      .then((data) => {
        setdata(data.data);
      })
      .catch((error) => console.log(error));
  };
    function handleSort(data: laptopForm[], by: keyof laptopForm) {
      let N = data.length;
      for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
          if (+(data[j][by]) > +(data[j + 1][by])) {
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
          }
        }
      }
      setdata([...data]);
    }
    
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid gray",
            width: "22%",
            margin: "auto",
            padding: "10px 10px",
            marginTop: "40px",
          }}
        >
          <input
            className={styles.box}
            placeholder="Model"
            type="text"
            name="model"
            onChange={handleInput}
          />
          <br />
          <input
            className={styles.box}
            placeholder="makeYear"
            type="number"
            name="makeYear"
            onChange={handleInput}
          />
          <br />
          <input
            className={styles.box}
            placeholder="Operating system"
            type="text"
            name="operatingSystem"
            onChange={handleInput}
          />
          <br />
          <input
            className={styles.box}
            placeholder="Screen Height"
            type="number"
            name="screenHeight"
            onChange={handleInput}
          />
          <br />
          <input
            className={styles.box}
            placeholder="Screen Width"
            type="number"
            name="screenWidth"
            onChange={handleInput}
          />
          <br />
          <input
            className={styles.box}
            placeholder="Price"
            type="number"
            name="price"
            onChange={handleInput}
          />
          <br />
          <input id={styles.submit} type="submit" value="Add Product" />
        </form>
      </div>
      <h2>List of the Product</h2>

      <div
        style={{
          display: "flex",
          height: "35px",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <p style={{ marginTop: "5px", marginRight: "10px" }}>Sort methods</p>
        <button onClick={() => handleSort(data, "makeYear")}>
          Sort low-to-high Year
        </button>

        <button onClick={() => handleSort(data, "price")}>
          Sort low-to-high Price
        </button>

        <button onClick={() => handleSort(data, "screenWidth")}>
          Sort low-to-high Width
        </button>
      </div>
     
      <div style={{ width: "fit-content", margin: "auto" }}>
        <table className={styles.table}>
          <thead className={styles.head}>
            <tr>
              <th>Model</th>
              <th>Operating System</th>
              <th>Making Year</th>
              <th>Screen Height</th>
              <th>Screen Width</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.model}</td>
                <td>{item.operatingSystem}</td>
                <td>{item.makeYear}</td>
                <td>{item.screenHeight}</td>
                <td>{item.screenWidth}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
