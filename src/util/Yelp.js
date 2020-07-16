const apiKey = "zIlNKDgtB91d5tgWBzNwDo61N1LPg-9pvxTt5xF0EzUtRbT4nD0wJJSUPi9gLg4UG1fYL3eyCLFol8XhCdM6RHYzjkFXeHni1EoJcWa1Z_jLkgcZMO8K7PEKo5xbXnYx";
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(res => {
            return res.json();
        })
        .then(jsonRes => {
            if(jsonRes.businesses) {
                return jsonRes.businesses.map(business => ({
    
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
    
                }))
            } else {
                console.log("There was an error with the request");
            }
        })
    }
}

export default Yelp