export const UploadFile=async (fileData)=>{
    try{
        const backendUrl=import.meta.env.VITE_BACKEND_URL;

        const response=await fetch(`${backendUrl}/upload`,{
            method:'POST',
            body:fileData
        });
        return response.json();
    }catch(err){
        console.log("Error while uploading file",err.message);
    }
}