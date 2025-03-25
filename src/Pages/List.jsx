import axios from "axios";
import react, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const colDefs = [
    { field: "title", headerName: "Product Title", flex: 1 },
    { field: "warrantyInformation", headerName: "Warranty", flex: 1 },
    { field: "weight", headerName: "Weight", flex: 1 },
    {
      field: "tags",
      headerName: "Tags",
      flex: 1,
      valueFormatter: (params) => params.value?.join(", ") || "N/A" // Show tags as comma-separated values
    }
  ];

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      const productData = await axios.get(`https://dummyjson.com/products`);
      if (productData?.data?.products) {
        setTableData(productData.data.products);
      } else {
        console.error("Unexpected API response format:", productData);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  function handleClick() {
    navigate('/googleLogin')
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <button onClick={handleClick}>
            Login with Google
          </button>
        </div>
        <div className="row mt-5">
          Table
          <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
            <AgGridReact
              rowData={tableData}
              columnDefs={colDefs}
              pagination={true}
              paginationPageSize={10}
              // domLayout="autoHeight"
              modules={[ClientSideRowModelModule]} // Register ClientSideRowModel
            />
          </div>
          {/* <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Warranty</th>
                <th>Weight</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.warrantyInformation}</td>
                  <td>{product.weight}</td>
                  <td><tr key={product.tags}>
                    <td>
                      {product.tags}
                    </td>
                  </tr></td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </>
  )
}