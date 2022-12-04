

const WrittenReviews = (props)=>{

    return (
    <>
    <div className="review-container">
        <div className="review-header">
            <h5>{props.review.user}</h5>
            <h5>{props.review.date}</h5>
        </div>
        <h3>{props.review.revTitle}</h3>
        <p className="review-pr">{props.review.review}</p>
    </div>
    </>);
}

export default WrittenReviews;