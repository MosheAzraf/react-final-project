import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const purchases = useSelector((state) => state.purchases.purchases);
  const customers = useSelector((state) => state.customers.customers);
  const products = useSelector((state) => state.products.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = products.map((product) => {
      const filterPurchasesByProduct = purchases.filter(
        (purchase) => purchase.productId === product.id
      );
      const customerWhoBoughtIt = filterPurchasesByProduct.reduce(
        (acc, purchase) => {
          const customer = customers.find((c) => c.id === purchase.customerId);
          if (customer && !acc.includes(customer)) {
            acc.push(customer);
          }
          return acc;
        },
        []
      );
      return { product, customerWhoBoughtIt, filterPurchasesByProduct };
    });
    //"productInfo": product, "Purchases": filterPurchasesByProduct, "customers": customersByPurchases
    console.log(data);
    setData(data);
  }, [customers, products, purchases]);

  return (
    <div className="container">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border border-cyan-600 font-medium">
            <tr>
              <th className="px-6 py-4 underline">Id</th>
              <th className="px-6 py-4 underline">Name</th>
              <th className="px-6 py-4 underline">Price</th>
              <th className="px-6 py-4 underline">Quantity</th>
              <th className="px-6 py-4 underline">Customers</th>
              <th className="px-6 py-4 underline">Edit Product</th>
              <th className="px-6 py-4 underline">Purchases</th>
            </tr>
          </thead>
          <tbody className="mt-3">
            {data.map((data) => (
              <tr key={data.product.id} className="border border-cyan-600 ">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {data.product.id}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {data.product.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {data.product.price}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {data.product.quantity}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {data.customerWhoBoughtIt.length === 0 ? (
                    <p className=" text-rose-700">
                      No one bought this product yet
                    </p>
                  ) : (
                    data.customerWhoBoughtIt.map((customer) => (
                      <ul key={customer.id}>
                        <li>
                          {`${customer.firstName} ${customer.lastName}`}{" "}
                          <button className="ml-4 text-cyan-600 hover:underline">
                            Edit Customer
                          </button>{" "}
                          <button className="ml-2 text-cyan-600 hover:underline">
                            Add Products
                          </button>{" "}
                        </li>
                      </ul>
                    ))
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button className="text-cyan-600 hover:underline">
                    Edit
                  </button>{" "}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {data.filterPurchasesByProduct.length === 0 ? (
                    <p>No purchases yet</p>
                  ) : (
                    data.filterPurchasesByProduct.map((purchase) => (
                      <ul key={purchase.id}>
                        {" "}
                        <li>{purchase.date}</li>{" "}
                      </ul>
                    ))
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;

