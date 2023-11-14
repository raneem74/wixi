"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchDataFromStudio, urlFor } from '../../lib/client';
import Link from 'next/link';

type TBannerData = {
  buttonText: string;
  desc: string;
  image: { _type: 'image'; asset:{_ref
    : string
    _type
    : 
    string} }; 
  largeText1: string;
  midText: string;
  product: string;
  smallText: string;
};

export default function Banner() {
  // const [products,setProducts] = useState([]);

  // const getProducts = async() => {
  //   const data = await fetchDataFromStudio("product");
  //   console.log("result is")
  //   console.log(data)
  //   setProducts(data);
  // }
  // useEffect(()=>{
  //   getProducts();
  // },[])
  // useEffect(() => {
  //   console.log("product is")
  //   console.log(products);
  // }, [products]);

  const [bannerData,setBannerData] = useState<TBannerData>();

  const getBannerData = async() => {
    const data = await fetchDataFromStudio("banner");
    setBannerData(data[0]);
  }

  useEffect(()=>{
    getBannerData();
  },[])

  useEffect(()=>{
    console.log(bannerData)
  },[bannerData])

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{bannerData?.smallText}</p>
        <h3>{bannerData?.midText}</h3>
        <h1>{bannerData?.largeText1}</h1>
        <Image src={urlFor(bannerData?.image).url()} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${bannerData?.product}`}>
            <button type="button">{bannerData?.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{bannerData?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
