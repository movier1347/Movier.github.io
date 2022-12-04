const ReviewForm = (props)=>{

    const handlePost = (event)=>{
        event.preventDefault();
    }

    return <form>
            <textarea className="review-title"
            placeholder="Title"/>
        <div className="review-form">
            <textarea className="review-input"/>
        </div>
            <button onClick={handlePost} className="review-btn">Post review</button>
    </form>
}

export default ReviewForm;