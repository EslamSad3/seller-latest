import { Field, FieldArray, FormikProvider, useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";
import SideBar from "../sidebar/SideBar";
import { useNavigate } from "react-router-dom";

function Add() {
  const { getCate, addNewProduct, categories } = useContext(productsContext);


  async function addProduct(values) {
    const res = await addNewProduct(values)
    // console.log(res)
  }





  let formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      quantity: "",
      colors: [""],
      price: "",
      priceAfterDiscount: "",
      sold: 4,
      images: [""],
      imageCover: "",
      category: "64ac169f513cc89c46b1f9e9",
      subcategory: "64acb9f5e8085d57c8828776",
      brand: "64ac1dc0fcf2cb0002db967e",
    },
    onSubmit: addProduct,
  });

  useEffect(() => {
    getCate();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row m-0 d-flex justify-content-between">
          <div
            className="col-3 rounded-2 my-2"
            style={{ backgroundColor: "#E6E6E6" }}
          >
            <SideBar />
          </div>
          <div className="w-75 mx-auto py-4">
            <h3>Add New Product</h3>
            <FormikProvider value={formik}>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="name">Product Name</label>
                  <input
                    class="form-control my-2 py-3"
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>

                <div>
                  <label htmlFor="description">Product description</label>
                  <input
                    class="form-control my-2 py-3"
                    type="text"
                    placeholder="Product description"
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                </div>

                <div>
                  <label htmlFor="quantity">Product quantity</label>
                  <input
                    class="form-control my-2 py-3"
                    type="number"
                    placeholder="Product quantity"
                    name="quantity"
                    id="quantity"
                    min="1"
                    onChange={formik.handleChange}
                    value={Number(formik.values.quantity)}
                  />
                </div>

                <div>
                  <label htmlFor="price">Product price</label>
                  <input
                    class="form-control my-2 py-3"
                    type="number"
                    placeholder="Product price"
                    name="price"
                    id="price"
                    min="1"
                    onChange={formik.handleChange}
                    value={Number(formik.values.price)}
                  />
                </div>

                <div>
                  <label htmlFor="priceAfterDiscount">
                    Product price After Discount
                  </label>
                  <input
                    class="form-control my-2 py-3"
                    type="number"
                    placeholder="Product price After Discount"
                    name="priceAfterDiscount"
                    id="priceAfterDiscount"
                    min={1}
                    onChange={formik.handleChange}
                    value={Number(formik.values.priceAfterDiscount)}
                  />
                </div>
                <div>
                  <label htmlFor="images">Product images</label>
                  <FieldArray name="images">
                    {(filedArrayProps) => {
                      const { push, form } = filedArrayProps;
                      const { values } = form;
                      const { images } = values;
                      return (
                        <div>
                          {images.map((item, index) => {
                            return (
                              <div className="form-control" key={index}>
                                <Field name={`images[${index}]`} />
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => push("")}
                                >
                                  +
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>
                <div>
                  <label htmlFor="colors">Product Colors</label>
                  <FieldArray name="colors">
                    {(filedArrayProps) => {
                      const { push, form } = filedArrayProps;
                      const { values } = form;
                      const { colors } = values;
                      return (
                        <div>
                          {colors.map((item, index) => {
                            return (
                              <div className="form-control" key={index}>
                                <Field name={`colors[${index}]`} />
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => push("")}
                                >
                                  +
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>

                <div>
                  <label htmlFor="imageCover">Product image Cover Link</label>
                  <input
                    class="form-control my-2 py-3"
                    type="text"
                    placeholder="Product imageCover Link"
                    name="imageCover"
                    id="imageCover"
                    onChange={formik.handleChange}
                    value={formik.values.imageCover}
                  />
                </div>

                <div>
                  <label htmlFor="category">Product Category</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    {categories.map((cat) => {
                      return <option value={formik.values.cat._id}>{cat.name}</option>;
                    })}
                  </select>
                </div>

                <div>
                  <label htmlFor="subcategory">Product subcategory</label>
                  <input
                    class="form-control my-2 py-3"
                    type="text"
                    placeholder="Product subcategory"
                    name="subcategory"
                    id="subcategory"
                  />
                </div>

                <div>
                  <label htmlFor="brand">Product brand</label>
                  <input
                    class="form-control my-2 py-3"
                    type="text"
                    placeholder="Product brand"
                    name="brand"
                    id="brand"
                  />
                </div>

                <button className="btn btn-success px-5 my-2" type="submit">
                  Add
                </button>
              </form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
