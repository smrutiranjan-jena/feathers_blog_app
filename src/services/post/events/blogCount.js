const blogCount = async (result, context) => {
    const { app } = context
    const { user } = result
    const blogCount=await app.service('post').find({
        query: {
            user,
            status:1
        }
    }).then((res)=>{
        return res.total
    })
    await app.service('user')._patch(user,{
        blogCount
    })
}
export default blogCount