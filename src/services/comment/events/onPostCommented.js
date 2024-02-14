const onPostCommented = async (result, context) => {
    const { app } = context
    const { post } = result
    const commentCount = await app.service('comment')._find({
        query: {
            post,
            status: 1
        }
    }).then((res) => {
        return res.total
    })
    await app.service('post')._patch(post, {
        commentCount
    })

}
export default onPostCommented