import { useState } from "react";

const ReviewForm = (props)=>{

    const [revObj, setRevObj] = useState({});

    const handlePost = (event)=>{
        event.preventDefault();
        let user;
        if(!props.user){
            user = "Anonymous"
        }else{
            user = props.user;
        }
        let revTitle = document.querySelector('.review-title').value;
        let rev = document.querySelector('.review-input').value;
        let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');

        const review = {
            user,
            revTitle,
            review: rev,
            date
        }
        console.log(review);
        props.setReviews([...props.reviews, review]);
        console.log(props.reviews);
    
    }



    return <form>
        <textarea className="review-title" id="title"
        placeholder="Title"/>
        <div className="review-form">
            <textarea className="review-input" id="review"
            placeholder="Add review"/>
        </div>
            <button type="submit" onClick={handlePost} 
            className="review-btn">Post review</button>
    </form>
}

export default ReviewForm;