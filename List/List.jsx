// import React from "react";
// import './List.css';
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState,useEffect } from "react";
// const List =(url)=>{


//     const [list,setList] = useState([]);
//     const [change,setChange] = useState(false);
//     const fetchList = async ()=>{

//         const response = await axios.get(`${url}/api/food/list`);
//       //  console.log(response.data);
//         if(response.data.success)
//             {
//                 setList(response.data.data);
//             }
//             else{
//                 toast.error("Error");
//             }
//     }
//    const removeFood= async(foodId)=>{
//     // const response = await axios.delete(`${url}/api/food/remove`,{id:foodId});
//     const response = await axios.delete(`${url}/api/food/remove`, {
//       data: { id: foodId },
//     });
//     await fetchList();
//     // console.log(foodId);

//    }


//    useEffect(()=>{
//     fetchList();
//    },[])
  
//     return (
//       <div className="list add flex-col">
//         <p>All Food List</p>
//         <div className="list-table">
//           <div className="list-table-format title">
//             <b>Image</b>
//             <b>Name</b>
//             <b>Price</b>
//             <b>Category</b>
//             <b>Action</b>
            
//           </div>
//           {list.map((item,index)=>{
            
//             return (
//               <div key={index} className="list-table-format">
//                 <img src={`${url}/images/` + item.image} alt="" />
//                 {/* <img src ={`${url}/images/`+item.image} alt=""/> */}
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>{item.category}</p>

//                 <p onClick={() => removeFood(item._id)}  className="cursor">
//                   x
//                 </p>
//                 {/*  */}
//               </div>
//             );
            
//           })

//           }
//         </div>
//       </div>
//     );
// }
// export default List;
import React, { useState, useEffect } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [change, setChange] = useState(false);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Failed to fetch the list");
    }
  };

  // const removeFood = async (foodId) => {
  //   try {
  //     const response = await axios.delete(`${url}/api/food/remove`, {
  //       data: { id: foodId },
  //     });
  //     if (response.data.success) {
  //       fetchList();
  //     } else {
  //       toast.error("Failed to remove the item");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to remove the item");
  //   }
  // };

  useEffect(() => {
    fetchList();
  }, [change]);

  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.category}</p>
            <p className="cursor">x</p>
            {/* onClick={() => removeFood(item._id)} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
