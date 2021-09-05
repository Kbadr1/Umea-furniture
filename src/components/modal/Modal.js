import React, { useContext } from "react";
import { CartContext, SavedContext, ProductModalContext } from "../../context";
import "./modal.scss";

const Modal = () => {
  const { productData, setProductData } = useContext(ProductModalContext);
  const { addToCart } = useContext(CartContext);
  const { addToSaved } = useContext(SavedContext);

  return (
    <div className="Modal">
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body row">
              <div className="col-lg-6 mt-4 mb-4">
                <img
                  src={`http://localhost:1337${productData.image[0].url}`}
                  alt=""
                />
              </div>
              <div className="col-lg-6 mt-4 mb-4">
                <h2>{productData.name}</h2>
                <h5>
                  {" "}
                  <span>EGP {productData.price}</span>{" "}
                </h5>
                <p>{productData.category.name}</p>
                <button className="add" onClick={() => addToCart(productData)}>
                  Add to cart
                </button>
                <button
                  className="save"
                  onClick={() => addToSaved(productData)}
                >
                  <i class="bi bi-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
