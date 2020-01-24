import React from 'react';
import '../../style/CardFavorite.css';

const CardFavorite = (props) => {
  return (
      <div className="card p-5 text-center" id="favorite">
      	<div className="bg-fav"></div>
      	<div className="favorite">
      		<img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle"
            />
            <h2 className="mt-4">Tedi Lesmana Store</h2>
            <hr/>
            <p>Selalu berprinsip untuk memberikan yang terbaik demi kenyaman dan kepuasan anda dalam berbelanja di toko kami, dan selalu memberikan promo yang menarik.</p>
      	</div>
      </div>
  )
}

export default CardFavorite;