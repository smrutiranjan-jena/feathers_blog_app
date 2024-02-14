const onPostLiked = async (result, context) => {
    const { app } = context
    const { post } = result
    const likeCount = await app.service('like')._find({
        query: {
            post,
            status: 1
        }
    }).then((res) => {
        return res.total
    })
    await app.service('post')._patch(post, {
        likeCount
    })

}
export default onPostLiked