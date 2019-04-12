import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart}= this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log('cliccked')}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top"/>
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log('added');
              }}
            >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                {" "}
                in Cart
              </p>
              ) : (
                <i className="fas fa-cart-plus"/>
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
              {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mb-1">${price}</span>
            </h5>
          </div>
          </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all .3s ease;
    &:hover {
      box-shadow: 2px 2px 5px 0 var(--lightGray);
    }
  }

  .card-img-top {
    transition: all .3s ease;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .3s ease;
  }

  .cart-btn {
    background: var(--lightGreen);
    border-radius: 0.5rem 0 0;
    color: var(--mainWhite);
    font-size: 1.2rem;
    transform: translate(100%, 100%);
    transition: all .3s ease;
    position: absolute;
    bottom: 0;
    right: 0;
    &:hover {
      background: var(--mainGreen);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
    &:hover {
      .card-img-top {
        transform: scale(1.2);
        transition: all .3s ease;
      }
      .cart-btn {
        transform: translate(0, 0);
        transition: all .3s ease;
      }
    }
  }
`