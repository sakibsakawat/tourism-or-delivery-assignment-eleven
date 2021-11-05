import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {

        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data);
            
            axios.post('https://aqueous-stream-72495.herokuapp.com/services', data)
            .then(res => {
                if(res.data.insertedId) {
                    alert('Plan Added Successfully');
                    reset();
                }
            })
        }
    return (
        <div className="divAddService">
              <div className="">
                       <h1 className="text-success text-center fw-bold fs-1">ADD A PLAN</h1>
                  <form  onSubmit={handleSubmit(onSubmit)}>
                       
                              <input placeholder="Enter Your Name" {...register("name")} /> <br/>
                              <input placeholder="Paste an Image Link "  {...register("image")} /> <br/>
                              <textarea placeholder="Describe Your Plan"  {...register("description")} /> <br/>
                              <input placeholder="Enter Your Budget"  type="number"  {...register("price")} /> <br/>
                              <input type="submit" />
                        
                       
               </form>
              
              
              </div>
        </div>
    );
};

export default AddService;