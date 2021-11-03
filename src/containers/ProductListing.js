import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from 'axios'
import { setProduct } from "../redux/actions/productActions";


const ProductListing= ()=>{
    const products= useSelector((state)=>state);
    const dispatch = useDispatch();

    // const fetchProducts= async()=>{
    //     const response= await axios.get("https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json").catch(err=>{
    //         console.log("err",err);
    //     });
    //     dispatch(setProduct(response))
    // } 
    // const fetchProducts= ()=>{
    //     fetch("https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json").then(response=>response.json()).then((data)=>{
    //         dispatch(setProduct(data));
    //     })
    // }
    //
    const productArray=[
        {
          id: 1,
          name: 'food card',
          description: 'This card is used for spending on Food merchants',
          final_price: 21,
          original_price: 30,
          img_url: 'https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png'
        },
        {
          id: 2,
          name: 'travel card',
          description: 'This card is used for spending on Travel and hotel bookings',
          final_price: 20,
          img_url: 'https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png'
        },
        {
          id: 3,
          name: 'epic card',
          description: 'Use this card and get benefits on every transaction',
          final_price: 40,
          img_url: 'https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png'
        },
        {
          id: 4,
          name: 'happay premium card',
          description: 'Use this card and get benefits on every transaction',
          final_price: 40,
          img_url: 'https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png'
        }
      ];
      useEffect(()=>{
          dispatch(setProduct(productArray))
        },[]);
//     fetch('https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json')
//   .then(blob => blob.json())
//   .then(data => {
//     console.log(data);
//     dispatch(setProduct(data));
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });
   // console.log("Products: ",products);
    return(
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}
 export default ProductListing;