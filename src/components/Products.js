import React from "react";
import {
  DomainName,
  InvoiceGenerator,
  PrivacyPolicy,
  TermsConditions,
} from "../images";
const Products = () => {
  const productList = [
    {
      name: "Privacy Policy Generator",
      image: PrivacyPolicy,
      description: `Stock your store with 100s of products and start selling to
          customers in minutes, without the hassle of inventory or
          packaging.`,
    },
    {
      name: "Terms & Conditions Generator",
      image: TermsConditions,
      description: `Stock your store with 100s of products and start selling to
          customers in minutes, without the hassle of inventory or
          packaging.`,
    },
    {
      name: "Domain Name Generator",
      image: DomainName,
      description: `Stock your store with 100s of products and start selling to
          customers in minutes, without the hassle of inventory or
          packaging.`,
    },
    {
      name: "Invoice Generator",
      image: InvoiceGenerator,
      description: `Stock your store with 100s of products and start selling to
          customers in minutes, without the hassle of inventory or
          packaging.`,
    },
  ];
  return (
    <div className="section-products">
      <div className="container">
        <h1>Try our other free products</h1>
        <div className="products-wrapper">
          {productList.map(({ name, image, description }) => {
            return (
              <div className="product-item">
                <img src={image} loading="lazy" alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
