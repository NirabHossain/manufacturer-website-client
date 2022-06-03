import React, {useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Url from './../Shared/Url';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const [userReview, setUserReview] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name?.value;
        const email = e.target.email?.value;
        const rating = e.target.rating.value;
        const review = e.target.review.value;
        const url = Url + `reviews`;

        const newReview = { name, email, rating, review};
        setUserReview(newReview, userReview);

        fetch(url, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newReview)
        }).then(res => res.json()).then(inf => {
            if (inf.success) {
                toast.success("Review Added Successfully");
            }
            else{
                toast.warning("Review already added");
            }
            e.target.reset();
        })
    }

    return (
        <div>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add a Review</h3>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                    <input name='name' type="text" placeholder="Name" disabled value={user?.displayName || user?.name} className="input input-bordered w-full max-w-xs" />
                    <input name='email' type="email" placeholder="Email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input name='rating' type="number" placeholder="rating" defaultValue={5} min="0" max="5" step="0.5" className="input input-bordered w-full max-w-xs" />

                    <textarea name='review' type="text" defaultValue="Very Good Product! Trustworthy" placeholder="Your address" className="input input-bordered w-full max-w-xs" />

                    <input name='submit' type="submit" value="Submit" className={`cursor-pointer bg-gradient-to-r from-secondary to-primary w-full max-w-xs btn-md btn-circle `} />
                </form>
            </div>
        </div >

    );
};

export default MyReview;