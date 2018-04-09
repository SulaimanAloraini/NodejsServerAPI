// To send response (Error or Success)

const Repsonse = (response:any, Status:number, Message:string, Data:T) => {
  response
    .StatusCode(Status)
    .json({ Message, Data })
}
