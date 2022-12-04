const ReviewForm = (props)=>{
    return <form>
        <div className="review-form">
            <textarea className="review-input"/>
            <button>Post</button>
        </div>
        <div className="error-msg">error</div>
    </form>
}

export default ReviewForm;