const bins = document.getElementsByClassName("binImg");
Array.from(bins).forEach(bin => {
    bin.addEventListener('click',async()=>{
        courseID = bin.getAttribute('course-id');
        const confirmed = confirm('Are you sure,you wanna delete this course ?!!');
        if(confirmed){
            try{
                const response = await fetch(`/Courses/${courseID}`,{
                    method:'DELETE',
                    headers: {
                    'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();

                console.log(response);
                if(response.ok){
                    alert(data.message);
                    location.reload();
                }else{
                    alert(data.message);
                }

            }catch(err){
                console.log('Error happend while delete the course :',err);
                alert('Something went wrong');
            }
        }
    });
});