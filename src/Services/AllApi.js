import { ServerURL } from "./ServerURL";
import { CommonApi } from "./CommonApi";

//Upload videos

export const uploadVideos =async(reqBody)=>{
   return await CommonApi('POST', `${ServerURL}/videos`,reqBody)
}

//get all videos

export const getAllvideos =async()=>{
   return await CommonApi('GET',`${ServerURL}/videos`,"")
}

// delete video
export const deleteVideo = async (id) => {
   return await CommonApi('DELETE', `${ServerURL}/videos/${id}`, ""); // Pass an empty string as the third argument
 };

 //add to watch history

 export const addToHistory = async (data) => {
   return await CommonApi('POST',`${ServerURL}/history`,data)
 }

//get Videos History
export const getVideosHistory = async() => {

   return await CommonApi('GET',`${ServerURL}/history`,"")

}

// delete history
export const deleteHistory = async (id) => {
   return await CommonApi('DELETE', `${ServerURL}/history/${id}`, ""); // Pass an empty string as the third argument
 };

 //add category

 export const addCategory =async (reqBody) =>{
   return await CommonApi('POST',`${ServerURL}/categroy`,reqBody)
 }
 //get all Category

 export const getAllCategory= async()=>{
   return await CommonApi('GET',`${ServerURL}/categroy`,"")
 }

 //delet catoegory

 export const deleteCategory = async(id)=>{
   return await CommonApi('DELETE',`${ServerURL}/categroy/${id}`,"")
 }
 //get video details by id 

 export const getAllvideosById =async(id)=>{
   return await CommonApi('GET',`${ServerURL}/videos/${id}`,"")
}
//update category with video details

export const updateCategory = async (data, id) => {
  return await CommonApi('PUT', `${ServerURL}/categroy/${id}`, data); // Ensure no typos here
};
// category video box delete

export const deleteCategoryBox = async(id)=>{
  return await CommonApi('DELETE',`${ServerURL}/videos/${id}`,"")
}
