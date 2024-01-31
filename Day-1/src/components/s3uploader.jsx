
// import AWS from 'aws-sdk';

// const S3uploader = () => {
//     const config={
//         bucketName:import.meta.env.AWS_BUCKET_NAME,
//         dirName:"userprofiles",
//         region:import.meta.env.AWS_BUCKET_REGION,
//         accessKeyID:import.meta.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY
//     }
//     const handleFileUpload=(event)=>{
//         const file=event.target.files[0];
//         console.log(file);

//         AWS.config.update({
//             accessKeyId: config.accessKeyId,
//             secretAccessKey: config.secretAccessKey,
//             region: config.region
//         })

//         const S3 = new AWS.S3();

//         const reader = new FileReader();

//         reader.onload=()=>{
//             const fileBuffer = reader.result;
//             S3.upload({
//                 BucketName: config.bucketName,
//                 Key: ${config.dirName}/${file.name},
//                 Body: fileBuffer,
//                 ACL: 'public-read',
//                 ContentType: 'image/svg+xml'
//             },(err, uploadedData) =>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log(uploadedData);
//                 }
//             })
//         }
//     }
//     return (
//         <div>
//             <input type="file"  name='file to be uploaded' onChange={handleFileUpload}/>
//         </div>
//     );
// };

// export default S3uploader;