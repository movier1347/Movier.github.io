import { useState } from "react";

const ReviewForm = (props)=>{

    const [revObj, setRevObj] = useState({});

    const handlePost = (event)=>{
        event.preventDefault();
        let user;
        if(!props.user || (Object.keys(props.user).length == 0)){
            user = "Anonymous"
        }else{
            user = props.user.name;
        }
        let revTitle = document.querySelector('.review-title').value;
        let rev = document.querySelector('.review-input').value;
        let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');

        if(revTitle.length > 0 && rev.length > 0){
            const review = {
                user,
                revTitle,
                review: rev,
                date
            }
            props.setReviews([...props.reviews, review]);
        }

        document.querySelector('.review-title').value = "";
        document.querySelector('.review-input').value = "";
    
    }



    return <form>
        <textarea className="review-title" id="title"
        placeholder="Title" required/>
        <div className="review-form">
            <textarea className="review-input" id="review"
            placeholder="Add review" required={true}/>
        </div>
            <button type="submit" onClick={handlePost} 
            className="review-btn">Post review</button>
    </form>
}

export default ReviewForm;